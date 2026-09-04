/**
 * ============================================================================
 * ПРИЁМНИК ЗАЯВОК — общий на все восемь посадочных (Cloudflare Worker)
 * ----------------------------------------------------------------------------
 * Принимает POST /lead с любой посадочной и рассылает заявку параллельно:
 *   1. в ЛСО            — основной приёмник, из него потом идёт выгрузка
 *                         офлайн-конверсий в Метрику;
 *   2. в Telegram       — мгновенно менеджерам. Ботов ДВА: у «Первого Луча»
 *                         свой, у посадочных Керамики свой;
 *   3. в Google-таблицу — страховка на случай, если ЛСО не ответила;
 *   4. на почту         — опционально, если задан ключ Resend.
 *
 * Почему одним воркером на все площадки, а не по одному на каждую: заявки
 * должны падать в одну ЛСО с одинаковым набором полей. Разные приёмники —
 * это разные точки отказа и три кода, которые придётся синхронно чинить.
 * Площадка различается полем site_key, оно приходит с посадочной.
 *
 * Ответ отдаём 200, если сработал хотя бы один канал: заявка, дошедшая
 * в Telegram, но не дошедшая в ЛСО, всё равно не потеряна.
 *
 * Токены живут в секретах воркера и в браузер не попадают.
 * Настройка — api/README.md
 * ==========================================================================*/

/* ---- Площадки -------------------------------------------------------------
   site_key приходит с посадочной. По нему выбираем бота, вкладку в таблице
   и название площадки в тексте сообщения. Ботов два: у «Первого Луча» свой,
   у посадочных Керамики свой — они уходят разным менеджерам.
--------------------------------------------------------------------------- */

const SITES = {
  'luch-banya':            { title: 'Первый Луч',        tab: 'Первый Луч',        bot: 'LUCH' },
  'cd-barbekyu-kompleksy': { title: 'Барбекю комплексы', tab: 'Барбекю комплексы', bot: 'CD' },
  'cd-kaminy':             { title: 'Камины',            tab: 'Камины',            bot: 'CD' },
  'cd-izraztsy':           { title: 'Изразцы',           tab: 'Изразцы',           bot: 'CD' },
  'cd-pechi-kaminy':       { title: 'Печи-камины',       tab: 'Печи-камины',       bot: 'CD' },
  'cd-bannye-portaly':     { title: 'Банные порталы',    tab: 'Банные порталы',    bot: 'CD' },
  'cd-russkie-pechi':      { title: 'Русские печи',      tab: 'Русские печи',      bot: 'CD' },
  'cd-otopitelnye-pechi':  { title: 'Отопительные печи', tab: 'Отопительные печи', bot: 'CD' },
};

function siteOf(lead) {
  const key = String(lead.site_key || (lead.attribution || {}).site_key || '').toLowerCase();
  if (SITES[key]) return { key, ...SITES[key] };
  // Незнакомый ключ не теряем: заявка уйдёт боту по префиксу, а в таблицу —
  // на вкладку своего бренда. Молча ронять лид нельзя.
  const luch = key.startsWith('luch');
  return { key: key || '—',
           title: luch ? 'Первый Луч' : 'Ceramica Decor',
           tab: luch ? 'Первый Луч' : 'Изразцы',
           bot: luch ? 'LUCH' : 'CD' };
}

/* ---- Хелперы -------------------------------------------------------------- */

function origins(env) {
  const list = String(env.ALLOWED_ORIGINS || '')
    .split(',').map((s) => s.trim()).filter(Boolean);
  return list.length ? list : ['https://chagagagaga.github.io'];
}

function corsHeaders(origin, env) {
  const list = origins(env);
  // Отдаём эхо только известному источнику. Звёздочка сделала бы из приёмника
  // открытую форму: спамить можно было бы с любой страницы в интернете.
  const allow = list.includes(origin) ? origin : list[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(data, status, origin, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...corsHeaders(origin, env) },
  });
}

const digits = (s) => String(s || '').replace(/\D/g, '');
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const money = (n) => Number(n || 0).toLocaleString('ru-RU');

// Адрес посадочной без меток: в шапке сообщения нужна ссылка, по которой
// менеджер откроет ту же страницу, что видел человек. Хвост из utm и yclid
// там только мешает — он и так есть ниже, в строке про рекламу.
// Время по Москве: менеджеры и заявки в одном часовом поясе, а воркер
// живёт в UTC. Без пересчёта в сообщении стояло бы время на три часа назад.
function moscow(d) {
  return new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Moscow', day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  }).format(d);
}

function cleanUrl(raw) {
  try {
    const u = new URL(String(raw));
    return u.origin + u.pathname;
  } catch (e) {
    return String(raw || '').split('?')[0];
  }
}

const TIMING = { now: 'Уже сейчас', '1-3m': 'В ближайшие 1–3 мес.', later: 'Позже, присматривается' };
const CHANNEL = { whatsapp: 'WhatsApp', telegram: 'Telegram', max: 'MAX', call: 'Звонок' };
const STEAM = { russian: 'русская баня', finnish: 'финская сауна', hammam: 'хамам' };
const PKG = { comfort: 'Комфорт', premium: 'Премиум', author: 'Авторский' };
// Блок страницы, из которого нажали. Человеческие названия вместо служебных:
// менеджеру важно, читал человек калькулятор или ткнул кнопку в шапке.
const SOURCE = {
  'hero-cta': 'первый экран', calc: 'калькулятор', 'cta-mid': 'форма в середине',
  contacts: 'блок контактов', card: 'карточка товара', 'stove-card': 'карточка печи',
  'works-cta': 'блок работ', 'production-cta': 'блок производства',
  'stoves-cta': 'блок печей', lightbox: 'галерея', header: 'кнопка в шапке',
  burger: 'меню', mobilebar: 'нижняя панель', contract: 'запрос договора',
};

/* ---- Сообщение в Telegram -------------------------------------------------
   Посадочные шлют разные калькуляторы: у Керамики конфигурация уже свёрнута
   в готовую строку summary, у «Первого Луча» приходит разложенной по полям.
   Печатаем то, что пришло, — без попытки знать заранее все поля.
--------------------------------------------------------------------------- */

function buildMessage(lead, site) {
  const a = lead.attribution || {};
  const q = lead.quiz || null;
  const r = [];

  // Шапка — то, ради чего менеджер открывает сообщение: кто, куда звонить,
  // откуда пришёл. Технику (ClientID, метки) держим ниже: она нужна не ему,
  // а для разбора, и не должна мешать читать первые пять строк.
  const page = cleanUrl(a.page_url || lead.page || '');
  r.push(`🔥 <b>Новая заявка с сайта ${esc(site.title)}</b>`
         + (page ? ` (${esc(page)})` : ''));
  r.push(`🕐 <b>Когда:</b> ${moscow(new Date(lead.receivedAt || Date.now()))} МСК`);
  r.push(`👤 <b>Имя:</b> ${esc(lead.name)}`);
  r.push(`📞 <b>Телефон:</b> <a href="tel:+${digits(lead.phone)}">${esc(lead.phone)}</a>`);
  if (lead.source) r.push(`📍 <b>Источник:</b> ${esc(SOURCE[lead.source] || lead.source)}`);
  if (lead.channel) r.push(`💬 <b>Связаться через:</b> ${CHANNEL[lead.channel] || lead.channel}`);
  if (lead.timing) r.push(`🗓 <b>Когда планирует:</b> ${TIMING[lead.timing] || lead.timing}`);
  if (lead.comment) r.push(`✏️ <b>Комментарий:</b> ${esc(lead.comment)}`);

  if (q) {
    const lines = [];
    if (q.summary) {
      // Керамика присылает конфигурацию готовой строкой «Площадь 6 м²; …»
      String(q.summary).split(';').map((x) => x.trim()).filter(Boolean).forEach((x) => lines.push(x));
    } else {
      if (q.mode) lines.push(`Сценарий: ${q.mode === 'stove' ? 'только печь' : 'парная под ключ'}`);
      if (q.area_m2) lines.push(`Площадь парной: ${q.area_m2} м²`);
      if (q.volume_m3) lines.push(`Расчётный объём: ${q.volume_m3} м³`);
      if (q.glass_inside) lines.push(`Стекло внутри дома: ${q.glass_inside} шт.`);
      if (q.glass_outside) lines.push(`Стекло на улицу: ${q.glass_outside} шт.`);
      if (q.steam_type) lines.push(`Тип парной: ${STEAM[q.steam_type] || q.steam_type}`);
      if (q.package) lines.push(`Уровень отделки: ${PKG[q.package] || q.package}`);
      if (q.stove) lines.push(`Выбрана печь: ${q.stove}`);
      if (q.finish_options && q.finish_options.length) {
        lines.push(`Интересно дополнительно: ${q.finish_options.join(', ')}`);
      }
    }
    if (lines.length) {
      r.push('');
      r.push('🧮 <b>Калькулятор</b>');
      lines.forEach((x) => r.push('· ' + esc(x)));
    }
    if (q.estimate_min || q.estimate_max) {
      r.push(`💰 <b>Расчёт: ${money(q.estimate_min)}`
             + `${q.estimate_max ? ' – ' + money(q.estimate_max) : ''} ₽</b>`);
    }
  }

  // Реклама: по какой кампании пришёл человек. Менеджеру это нужно, чтобы
  // понимать контекст разговора, а нам — чтобы сверять с отчётом Директа.
  const camp = [lead.utm_source || a.utm_source, lead.utm_campaign || a.utm_campaign,
                lead.utm_content || a.utm_content].filter(Boolean).join(' / ');
  r.push('');
  r.push(`📈 <b>Реклама:</b> ${esc(camp || 'прямой заход')}`);
  if (a.visits > 1) r.push(`🔁 <b>Визитов до заявки:</b> ${a.visits}`);

  // Номер заявки — ключ, по которому CRM и Метрика говорят об одной строке.
  // Он же нужен менеджеру, чтобы найти лид в ЛСО.
  const uid = lead.lead_uid || a.lead_uid;
  if (uid) r.push(`🔖 <b>Заявка №</b> <code>${esc(uid)}</code>`);
  return r.join('\n');
}

/* ---- Каналы --------------------------------------------------------------- */

async function sendLso(env, lead) {
  if (!env.LSO_ENDPOINT) return 'skip: нет LSO_ENDPOINT';
  try {
    const res = await fetch(env.LSO_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    return res.ok ? 'ok' : 'ошибка HTTP ' + res.status;
  } catch (e) {
    return 'ошибка: ' + e.message;
  }
}

async function sendTelegram(env, site, text) {
  const token = env['TG_TOKEN_' + site.bot];
  const chat = env['TG_CHAT_' + site.bot];
  if (!token || !chat) return `skip: не задан бот ${site.bot}`;
  const chats = String(chat).split(',').map((s) => s.trim()).filter(Boolean);
  const out = [];
  for (const id of chats) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: id, text, parse_mode: 'HTML', disable_web_page_preview: true }),
      });
      out.push(res.ok ? 'ok' : 'HTTP ' + res.status);
    } catch (e) {
      out.push('ошибка: ' + e.message);
    }
  }
  return out.join('; ');
}

/* ---- Google-таблица -------------------------------------------------------
   Сервисный аккаунт: подписываем JWT, меняем на токен, дописываем строку.
   Таблица — страховка: если ЛСО не ответила, заявка всё равно записана
   и её видно глазами, без разбора логов.
--------------------------------------------------------------------------- */

function b64url(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function googleToken(env) {
  const key = String(env.GOOGLE_SA_KEY || '').replace(/\\n/g, '\n');
  if (!key || !env.GOOGLE_SA_EMAIL) return null;
  const pem = key.replace(/-----[A-Z ]+-----/g, '').replace(/\s+/g, '');
  const der = Uint8Array.from(atob(pem), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8', der.buffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']);

  const now = Math.floor(Date.now() / 1000);
  const head = b64url(new TextEncoder().encode(JSON.stringify({ alg: 'RS256', typ: 'JWT' })));
  const body = b64url(new TextEncoder().encode(JSON.stringify({
    iss: env.GOOGLE_SA_EMAIL,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now, exp: now + 3600,
  })));
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey,
    new TextEncoder().encode(head + '.' + body));
  const jwt = `${head}.${body}.${b64url(sig)}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt,
    }),
  });
  if (!res.ok) return null;
  return (await res.json()).access_token;
}

async function sendSheet(env, site, lead) {
  if (!env.SHEET_ID) return 'skip: нет SHEET_ID';
  try {
    const token = await googleToken(env);
    if (!token) return 'ошибка: не выдался токен Google';
    const a = lead.attribution || {};
    const q = lead.quiz || {};
    const row = [
      moscow(new Date(lead.receivedAt || Date.now())),
      lead.lead_uid || a.lead_uid || '',
      lead.name || '',
      lead.phone || '',
      CHANNEL[lead.channel] || lead.channel || '',
      TIMING[lead.timing] || lead.timing || '',
      cleanUrl(a.page_url || lead.page || ''),
      SOURCE[lead.source] || lead.source || '',
      q.estimate_min ? `${money(q.estimate_min)}${q.estimate_max ? ' – ' + money(q.estimate_max) : ''} ₽` : '',
      q.summary || [q.area_m2 && `площадь ${q.area_m2} м²`, q.steam_type && STEAM[q.steam_type],
                    q.package && PKG[q.package], q.stove].filter(Boolean).join('; '),
      lead.comment || '',
      lead.utm_source || a.utm_source || '',
      lead.utm_medium || a.utm_medium || '',
      lead.utm_campaign || a.utm_campaign || '',
      lead.utm_content || a.utm_content || '',
      lead.utm_term || a.utm_term || '',
      lead.yclid || a.yclid || '',
      lead.ym_client_id || a.ym_client_id || '',
      JSON.stringify((a.first_touch || {}).marks || {}),
      a.referrer || '',
      a.visits || '',
      lead.ip || '',
      lead.site_key || a.site_key || '',
    ];
    const range = encodeURIComponent(`${site.tab}!A:W`);
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${env.SHEET_ID}/values/${range}:append`
      // RAW, а не USER_ENTERED: иначе Google трактует «+79990001122»
      // как число и отрезает плюс, а номер телефона обязан остаться целым.
      + '?valueInputOption=RAW&insertDataOption=INSERT_ROWS',
      {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [row] }),
      });
    return res.ok ? 'ok' : 'ошибка HTTP ' + res.status;
  } catch (e) {
    return 'ошибка: ' + e.message;
  }
}

/* ---- Маячок ухода в мессенджер --------------------------------------------
   Человек нажал WhatsApp, Telegram или MAX и ушёл с сайта. Заявки нет,
   но источник знать надо: иначе обращение придёт в CRM без кампании.
   Пишем строку в ту же вкладку, что и заявки, — с пометкой в колонке
   «Источник». В чат такие события не шлём: кликов кратно больше, чем
   обращений, и группа превратилась бы в ленту шума.
--------------------------------------------------------------------------- */

const MESSENGER = { whatsapp: 'WhatsApp', telegram: 'Telegram', max: 'MAX' };

async function sendBeaconRow(env, site, b) {
  if (!env.SHEET_ID) return 'skip: нет SHEET_ID';
  try {
    const token = await googleToken(env);
    if (!token) return 'ошибка: не выдался токен Google';
    const row = [
      moscow(new Date()),
      b.lead_uid || '',
      '', '',                                   // имени и телефона ещё нет
      MESSENGER[b.messenger] || b.messenger || '',
      '',
      cleanUrl(b.page_url || ''),
      'ушёл в мессенджер',
      '', '', '',
      b.utm_source || '', b.utm_medium || '', b.utm_campaign || '',
      b.utm_content || '', b.utm_term || '',
      b.yclid || '', b.ym_client_id || '',
      b.first_touch || '', b.referrer || '', b.visits || '', '',
      b.site_key || '',
    ];
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${env.SHEET_ID}/values/`
      + `${encodeURIComponent(`${site.tab}!A:W`)}:append`
      + '?valueInputOption=RAW&insertDataOption=INSERT_ROWS',
      { method: 'POST',
        headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [row] }) });
    return res.ok ? 'ok' : 'ошибка HTTP ' + res.status;
  } catch (e) {
    return 'ошибка: ' + e.message;
  }
}

async function sendEmail(env, subject, html) {
  if (!env.RESEND_API_KEY || !env.MAIL_TO) return 'skip: нет почты';
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.MAIL_FROM || 'Заявки с сайта <onboarding@resend.dev>',
        to: String(env.MAIL_TO).split(',').map((s) => s.trim()),
        subject, html,
      }),
    });
    return res.ok ? 'ok' : 'ошибка HTTP ' + res.status;
  } catch (e) {
    return 'ошибка: ' + e.message;
  }
}

/* ---- Обработчик ----------------------------------------------------------- */

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin, env) });
    }
    // Маячок приходит формой из sendBeacon, а не JSON: тело у sendBeacon
    // отправляется как URLSearchParams, и разбирать его надо соответственно.
    if (url.pathname === '/beacon' && request.method === 'POST') {
      let b = {};
      try {
        const form = await request.formData();
        form.forEach((v, k) => { b[k] = String(v); });
      } catch (e) {
        return json({ ok: false, error: 'bad_form' }, 400, origin, env);
      }
      const site = siteOf(b);
      const sheet = await sendBeaconRow(env, site, b);
      // Дублируем в ЛСО тем же маячком: там он склеится с обращением
      // по номеру заявки из первого сообщения.
      let lso = 'skip';
      if (env.LSO_BEACON) {
        try {
          const r = await fetch(env.LSO_BEACON, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ ...b, beacon_id: b.lead_uid || '' }),
          });
          lso = r.ok ? 'ok' : 'ошибка HTTP ' + r.status;
        } catch (e) { lso = 'ошибка: ' + e.message; }
      }
      return json({ ok: true, sheet, lso }, 200, origin, env);
    }

    if (url.pathname === '/health') {
      return json({ ok: true, service: 'cd-lead' }, 200, origin, env);
    }
    if (request.method !== 'POST') {
      return json({ ok: false, error: 'method_not_allowed' }, 405, origin, env);
    }

    let lead;
    try {
      lead = await request.json();
    } catch (e) {
      return json({ ok: false, error: 'bad_json' }, 400, origin, env);
    }

    /* --- Валидация и антиспам --- */
    const name = String(lead.name || '').trim();
    const phone = digits(lead.phone);
    if (name.length < 2 || name.length > 80) {
      return json({ ok: false, error: 'bad_name' }, 422, origin, env);
    }
    if (phone.length !== 11) {
      return json({ ok: false, error: 'bad_phone' }, 422, origin, env);
    }
    // Ссылка в имени или комментарии — почерк спам-бота. Отвечаем 200,
    // чтобы бот считал попытку удачной и не долбил приёмник заново.
    if (/https?:\/\/|www\.|\[url/i.test(name + ' ' + (lead.comment || ''))) {
      return json({ ok: true, spam: true }, 200, origin, env);
    }

    lead.name = name;
    lead.phone = '+' + phone;
    lead.receivedAt = new Date().toISOString();
    lead.ip = request.headers.get('CF-Connecting-IP') || '';
    lead.country = request.cf ? request.cf.country : '';

    /* --- Рассылка: все каналы одновременно --- */
    const site = siteOf(lead);
    const text = buildMessage(lead, site);
    const [lso, tg, sheet, mail] = await Promise.all([
      sendLso(env, lead),
      sendTelegram(env, site, text),
      sendSheet(env, site, lead),
      sendEmail(env, `Заявка ${site.title}: ${lead.name}, ${lead.phone}`, text.replace(/\n/g, '<br>')),
    ]);

    const delivered = [lso, tg, sheet, mail].some((r) => String(r).startsWith('ok'));
    return json({ ok: delivered, site: site.id, lso, telegram: tg, sheet, email: mail },
                delivered ? 200 : 502, origin, env);
  },
};
