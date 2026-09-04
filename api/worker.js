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

/* ---- Площадки ------------------------------------------------------------- */

/** По site_key определяем, чьи это заявки: у брендов разные боты и вкладки. */
function siteOf(lead) {
  const key = String(lead.site_key || lead.attribution?.site_key || '').toLowerCase();
  if (key.startsWith('luch')) {
    return { id: 'luch', title: 'Первый Луч', tab: 'Первый Луч',
             token: 'TG_TOKEN_LUCH', chat: 'TG_CHAT_LUCH' };
  }
  return { id: 'cd', title: 'Ceramica Decor', tab: 'Посадочные CD',
           token: 'TG_TOKEN_CD', chat: 'TG_CHAT_CD' };
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

const TIMING = { now: 'Уже сейчас', '1-3m': 'В ближайшие 1–3 мес.', later: 'Позже, присматривается' };
const CHANNEL = { whatsapp: 'WhatsApp', telegram: 'Telegram', max: 'MAX', call: 'Звонок' };

/* ---- Сообщение в Telegram -------------------------------------------------
   Посадочные шлют разные калькуляторы: у Керамики конфигурация уже свёрнута
   в готовую строку summary, у «Первого Луча» приходит разложенной по полям.
   Печатаем то, что пришло, — без попытки знать заранее все поля.
--------------------------------------------------------------------------- */

function buildMessage(lead, site) {
  const a = lead.attribution || {};
  const q = lead.quiz || null;
  const marks = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    .map((k) => (lead[k] || a[k]) ? `${k}=${lead[k] || a[k]}` : null)
    .filter(Boolean).join(', ');

  const r = [];
  r.push(`<b>🔔 Заявка — ${esc(site.title)}</b>`);
  r.push('');
  r.push(`<b>Имя:</b> ${esc(lead.name)}`);
  r.push(`<b>Телефон:</b> <a href="tel:+${digits(lead.phone)}">${esc(lead.phone)}</a>`);
  if (lead.channel) r.push(`<b>Связаться через:</b> ${CHANNEL[lead.channel] || lead.channel}`);
  if (lead.timing) r.push(`<b>Сроки:</b> ${TIMING[lead.timing] || lead.timing}`);
  if (lead.comment) r.push(`<b>Комментарий:</b> ${esc(lead.comment)}`);
  if (lead.product_title) r.push(`<b>Направление:</b> ${esc(lead.product_title)}`);

  if (q) {
    r.push('');
    r.push('<b>— Конфигурация —</b>');
    if (q.summary) {
      // Керамика: строка вида «Площадь 6 м²; Пакет Премиум; …»
      String(q.summary).split(';').map((s) => s.trim()).filter(Boolean)
        .forEach((s) => r.push(esc(s)));
    } else {
      if (q.area_m2) r.push(`Площадь парной: ${q.area_m2} м²`);
      if (q.volume_m3) r.push(`Расчётный объём: ${q.volume_m3} м³`);
      if (q.glass_inside) r.push(`Стекло внутри дома: ${q.glass_inside} шт.`);
      if (q.glass_outside) r.push(`Стекло на улицу: ${q.glass_outside} шт.`);
      if (q.steam_type) r.push(`Тип парной: ${q.steam_type}`);
      if (q.package) r.push(`Пакет отделки: ${q.package}`);
      if (q.stove) r.push(`Выбрана печь: ${esc(q.stove)}`);
      if (q.finish_options?.length) r.push(`Интересно дополнительно: ${q.finish_options.join(', ')}`);
    }
    if (q.estimate_min || q.estimate_max) {
      r.push(`<b>Расчёт: ${money(q.estimate_min)}${q.estimate_max ? ' – ' + money(q.estimate_max) : ''} ₽</b>`);
    }
  }

  r.push('');
  r.push('<b>— Источник —</b>');
  r.push(`Площадка: <code>${esc(lead.site_key || a.site_key || '—')}</code>`);
  r.push(`Блок на странице: ${esc(lead.source || '—')}`);
  r.push(`Метки: ${esc(marks || 'прямой заход')}`);
  if (a.referrer) r.push(`Реферер: ${esc(a.referrer)}`);
  if (a.visits) r.push(`Визитов до заявки: ${a.visits}`);
  // Три поля, по которым CRM потом вернёт конверсию в Метрику.
  const cid = lead.ym_client_id || a.ym_client_id;
  const uid = lead.lead_uid || a.lead_uid;
  const ycl = lead.yclid || a.yclid;
  if (uid) r.push(`Номер заявки: <code>${esc(uid)}</code>`);
  if (cid) r.push(`ClientID: <code>${esc(cid)}</code>`);
  if (ycl) r.push(`yclid: <code>${esc(ycl)}</code>`);
  r.push(`Страница: ${esc(a.page_url || lead.page || '')}`);
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
  const token = env[site.token];
  const chat = env[site.chat];
  if (!token || !chat) return `skip: не задан бот ${site.id}`;
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
      new Date().toISOString(),
      lead.lead_uid || a.lead_uid || '',
      lead.site_key || a.site_key || '',
      lead.name || '', lead.phone || '',
      CHANNEL[lead.channel] || lead.channel || '',
      TIMING[lead.timing] || lead.timing || '',
      lead.source || '',
      lead.ym_client_id || a.ym_client_id || '',
      lead.yclid || a.yclid || '',
      lead.utm_source || a.utm_source || '',
      lead.utm_medium || a.utm_medium || '',
      lead.utm_campaign || a.utm_campaign || '',
      lead.utm_content || a.utm_content || '',
      lead.utm_term || a.utm_term || '',
      q.summary || '',
      q.estimate_min ? `${money(q.estimate_min)} – ${money(q.estimate_max)} ₽` : '',
      a.page_url || lead.page || '',
      a.referrer || '',
    ];
    const range = encodeURIComponent(`${site.tab}!A:S`);
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${env.SHEET_ID}/values/${range}:append`
      + '?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS',
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
