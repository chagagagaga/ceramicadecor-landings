/* ============================================================================
   CERAMICADECOR — ДВИЖОК ПОСАДОЧНОЙ
   ----------------------------------------------------------------------------
   Один файл на все семь направлений. Весь контент приходит из <slug>/data.js
   в объекте window.LP. Здесь — только рендер и поведение.

   Что делает:
     · конфигуратор первого экрана с живой вилкой цены
     · каталог топ-моделей с фильтрами и двумя ценами
     · галерею с лайтбоксом, этапы, гарантии, FAQ
     · захват заявки: модалка, встроенные формы, валидация, антиспам
     · атрибуцию до кампании Директа и цели Яндекс.Метрики
   ========================================================================== */
(function () {
  'use strict';

  var P = window.LP;
  if (!P) return;

  /* ── Утилиты ───────────────────────────────────────────────────────────── */
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function fmt(n) { return Math.round(n || 0).toLocaleString('ru-RU').replace(/,/g, ' '); }
  function money(n) { return '<i>' + fmt(n) + '&nbsp;₽</i>'; }
  function num(v, d) { return Number(v).toFixed(d).replace('.', ','); }

  var QS = new URLSearchParams(location.search || '');

  /* Превью для сетки. Полный кадр в 1600 px нужен только лайтбоксу, который
     показывает фото во всю высоту экрана. Карточке хватает 700 px, и весит
     она вшестеро меньше: без этого первый экран каталога тянул 2,7 МБ.
     Уменьшенная копия лежит рядом, в подпапке s/ — путь получается заменой,
     список превью в данных держать не нужно. Собираются они скриптом
     tools/make_thumbs.py. */
  function thumb(src) {
    // Путь бывает и своим («img/01.webp»), и чужим («../kaminy/img/03.webp»),
    // поэтому цепляемся за начало строки или за косую черту перед папкой.
    return String(src || '').replace(/(^|\/)img\//, '$1img/s/');
  }

  /* ══ 1. АТРИБУЦИЯ ═══════════════════════════════════════════════════════
     Запоминаем первый и последний источник, чтобы в заявке было видно,
     из какой кампании Директа пришёл человек. Только localStorage, без cookie.

     СКВОЗНАЯ АНАЛИТИКА (задача Дениса, 31.08.2026). Чтобы ЛСО могла вернуть
     в Метрику офлайн-конверсию по этой заявке, в ней обязаны приехать:
       · ym_client_id — ClientID Метрики (официальный getClientID,
         cookie _ym_uid только как запасной вариант);
       · yclid        — метка клика Директа, держим 90 дней отдельно от utm;
       · lead_uid     — сквозной номер заявки, по нему CRM и Метрика говорят
         об одной строке и повтор отправки не задваивается.
     Контракт полей одинаковый с посадочной «Первого Луча» — приёмник один.
  ═══════════════════════════════════════════════════════════════════════ */
  var Attr = (function () {
    var K1 = 'cd_first', K2 = 'cd_last', KV = 'cd_visits';
    var K_CID = 'cd_ym_cid', K_YCLID = 'cd_yclid';
    var YCLID_TTL_DAYS = 90;
    function read(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
    function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
    var marks = {};
    QS.forEach(function (v, k) { if (/^utm_|^y?click|yclid|gclid|roistat/i.test(k)) marks[k] = v; });
    var snap = { marks: marks, referrer: document.referrer || '', landing: location.pathname, at: new Date().toISOString() };
    if (!read(K1)) write(K1, snap);
    var external = document.referrer && document.referrer.indexOf(location.hostname) === -1;
    if (Object.keys(marks).length || external || !read(K2)) write(K2, snap);
    var visits = (read(KV) || 0) + 1; write(KV, visits);

    // ClientID Метрики: официальный вызов работает только после инициализации
    // счётчика, поэтому ответ кэшируем — заявку могут отправить раньше.
    (function captureCid() {
      var id = P.brand.metrikaId || 0;
      if (!id) return;
      var tries = 0;
      (function ask() {
        if (typeof window.ym === 'function') {
          try {
            window.ym(id, 'getClientID', function (cid) {
              if (cid) { try { localStorage.setItem(K_CID, String(cid)); } catch (e) {} }
            });
            return;
          } catch (e) {}
        }
        if (++tries < 20) setTimeout(ask, 500);
      })();
    })();

    function clientId() {
      var cached = '';
      try { cached = localStorage.getItem(K_CID) || ''; } catch (e) {}
      if (cached) return cached;
      var ym = document.cookie.match(/(?:^|;\s*)_ym_uid=([^;]+)/);
      return ym ? decodeURIComponent(ym[1]) : '';
    }

    // yclid живёт дольше utm: человек может уйти и вернуться напрямую,
    // а конверсию Директу всё равно нужно вернуть на тот самый клик.
    if (marks.yclid) write(K_YCLID, { v: marks.yclid, at: snap.at });
    function yclid() {
      var box = read(K_YCLID);
      if (!box || !box.v) return '';
      return (Date.now() - new Date(box.at).getTime()) / 86400000 <= YCLID_TTL_DAYS ? box.v : '';
    }

    // Один номер на загрузку страницы: если отправка сорвалась и человек
    // нажал ещё раз, в CRM приедет тот же номер и она склеит повтор.
    var LEAD_UID = (function () {
      var d = new Date();
      return 'CD-' + String(d.getFullYear()).slice(2) +
        ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) +
        '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    })();

    function flatUtm() {
      var m = (read(K2) || snap).marks || {};
      var out = {};
      ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function (k) { out[k] = m[k] || ''; });
      return out;
    }

    /* ── Уход в мессенджер ──────────────────────────────────────────────
       Кнопка мессенджера уводит человека с сайта: заявки не создаётся,
       и вся накопленная атрибуция до CRM не доезжает — обращение приходит
       без источника. На клике делаем две вещи.

       1. В предзаполненный текст дописываем номер заявки: менеджер видит его
          первым сообщением и находит по нему источник. Работает только
          в WhatsApp — Telegram и MAX предзаполнить личный чат не дают,
          там остаётся только маячок.
       2. Шлём маячок на приёмник: ClientID, yclid, метки. Через sendBeacon —
          он переживает уход со страницы и ничего не задерживает.
    ─────────────────────────────────────────────────────────────────────── */
    function messengerOf(href) {
      var h = String(href || '');
      if (/(^|\/\/)(wa\.me|api\.whatsapp\.com|whatsapp\.com\/send)/i.test(h)) return 'whatsapp';
      if (/(^|\/\/)(t\.me|telegram\.me)/i.test(h)) return 'telegram';
      if (/(^|\/\/)max\.ru/i.test(h)) return 'max';
      return '';
    }

    function withOrderNo(href) {
      try {
        var u = new URL(href, location.origin);
        var t = (u.searchParams.get('text') || '').replace(/\s*№ заявки:[\s\S]*$/, '').trim();
        u.searchParams.set('text', (t ? t + '\n\n' : '')
          + '№ заявки: ' + LEAD_UID + '. Пожалуйста, не удаляйте номер.');
        return u.toString();
      } catch (e) { return href; }
    }

    document.addEventListener('click', function (e) {
      var link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!link) return;
      var kind = messengerOf(link.getAttribute('href'));
      if (!kind) return;
      if (kind === 'whatsapp') link.setAttribute('href', withOrderNo(link.getAttribute('href')));
      var url = window.LP_BEACON || P.brand.beacon || '';
      if (!url || !navigator.sendBeacon) return;
      try {
        var p = api.payload();
        p.event = 'messenger_click';
        p.messenger = kind;
        var body = new URLSearchParams();
        Object.keys(p).forEach(function (k) {
          var v = p[k];
          if (v === undefined || v === null) return;
          body.append(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
        });
        navigator.sendBeacon(url, body);
      } catch (err) {
        // Упавший маячок не должен мешать человеку уйти в мессенджер.
      }
    }, true);

    var api = {
      payload: function () {
        var last = read(K2) || snap;
        return Object.assign({
          // ── склейка с Метрикой: без этих полей сквозной аналитики нет
          lead_uid: LEAD_UID,
          site_key: 'cd-' + P.slug,
          ym_client_id: clientId(),
          yclid: yclid(),
          gclid: (last.marks && last.marks.gclid) || '',
          first_touch: read(K1) || snap, last_touch: last, visits: visits,
          page_url: location.href, referrer: document.referrer || '',
          // ym_uid оставлен для обратной совместимости со старым приёмником
          ym_uid: clientId(),
          screen: window.innerWidth + 'x' + window.innerHeight,
          user_agent: navigator.userAgent,
        }, flatUtm());
      },
    };
    return api;
  })();

  /* ══ 2. СЧЁТЧИК И ЦЕЛИ МЕТРИКИ ══════════════════════════════════════════
     Счётчик поднимается здесь, из brand.metrikaId. До 03.09.2026 его на
     посадочных не было вообще — все вызовы ym() уходили в пустоту, и ни
     одна цель не доезжала. Без счётчика вся сквозная аналитика не начнётся:
     офлайн-конверсии привязываются к визиту по ClientID, а ClientID выдаёт
     именно счётчик.

     Цели, которые нужно завести руками в Метрике (тип «JavaScript-событие»,
     имена одинаковые с посадочной «Первого Луча», чтобы отчёты сходились):
       lead_submitted, calc_started, calc_cta_click, cta_click,
       phone_click, messenger_click, gallery_open, scroll_75
     Офлайн-цели (тип «Загрузка данных») заводятся отдельно — см. план.
  ═══════════════════════════════════════════════════════════════════════ */
  (function metrika() {
    var id = P.brand.metrikaId || 0;
    if (!id) {
      console.warn('[Ceramica Decor] Счётчик Метрики не задан: brand.metrikaId = 0. ' +
                   'Цели и сквозная аналитика работать не будут.');
      return;
    }
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * new Date();
      k = e.createElement(t); a = e.getElementsByTagName(t)[0];
      k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

    window.ym(id, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      // Параметры визита: направление приезжает в отчёты само, и семь
      // посадочных можно сравнивать между собой в одном счётчике.
      params: { product: P.slug, product_title: P.title },
    });

    var ns = document.createElement('noscript');
    ns.innerHTML = '<div><img src="https://mc.yandex.ru/watch/' + id +
      '" style="position:absolute;left:-9999px" alt=""></div>';
    document.body.appendChild(ns);
  })();

  function goal(name, params) {
    if (window.dataLayer) window.dataLayer.push(Object.assign({ event: name, product: P.slug }, params || {}));
    var id = P.brand.metrikaId || 0;
    if (id && typeof window.ym === 'function') { try { window.ym(id, 'reachGoal', name, params || {}); } catch (e) {} }
  }
  window.LPGoal = goal;

  /* ══ 3. ОТПРАВКА ЗАЯВОК ═════════════════════════════════════════════════
     Пока боевой приёмник не подключён — форма показывает успех, но никуда
     не отправляет, и в консоль пишется предупреждение. Так лендинг можно
     показывать и проверять, не рискуя потерять реальную заявку.
  ═══════════════════════════════════════════════════════════════════════ */
  var Lead = (function () {
    var ENDPOINT = window.LP_ENDPOINT || P.brand.endpoint || '';
    var demo = !ENDPOINT || location.protocol === 'file:' ||
               /^(localhost|127\.0\.0\.1)$/.test(location.hostname) ||
               /(^|[?&])demo=1(&|$)/.test(location.search);
    if (!ENDPOINT) {
      console.warn('[Ceramica Decor] Приёмник заявок не задан: укажите brand.endpoint в data.js. ' +
                   'Формы работают в демо-режиме и никуда не отправляют.');
    }

    function maskPhone(el) {
      var d = el.value.replace(/\D/g, '').slice(0, 11);
      if (d[0] === '8') d = '7' + d.slice(1);
      if (d && d[0] !== '7') d = '7' + d;
      d = d.slice(0, 11);
      var o = '+7';
      if (d.length > 1) o += ' (' + d.slice(1, 4);
      if (d.length >= 4) o += ') ' + d.slice(4, 7);
      if (d.length >= 7) o += '-' + d.slice(7, 9);
      if (d.length >= 9) o += '-' + d.slice(9, 11);
      el.value = d.length ? o : '';
    }
    function bindPhone(el) {
      if (!el || el.dataset.bound) return;
      el.dataset.bound = '1';
      el.addEventListener('input', function () { maskPhone(el); });
      el.addEventListener('focus', function () { if (!el.value) el.value = '+7 '; });
      el.addEventListener('blur', function () { if (el.value.replace(/\D/g, '').length < 2) el.value = ''; });
    }
    function status(form, text, type) {
      var b = $('.form-status', form);
      if (!b) return;
      b.className = 'form-status' + (type ? ' form-status--' + type : '');
      b.textContent = text || '';
    }

    function submit(form, extra, onOk) {
      if (form.dataset.sending === '1') return;
      var honey = form.querySelector('[name="website"]');
      if (honey && honey.value) return;

      var nameEl = form.querySelector('[name="name"]');
      var phoneEl = form.querySelector('[name="phone"]');
      if (nameEl && nameEl.value.trim().length < 2) { nameEl.focus(); status(form, 'Напишите, как к вам обращаться', 'error'); return; }
      if (phoneEl && phoneEl.value.replace(/\D/g, '').length !== 11) { phoneEl.focus(); status(form, 'Проверьте номер — нужно 11 цифр', 'error'); return; }

      var fd = {};
      new FormData(form).forEach(function (v, k) { fd[k] = typeof v === 'string' ? v.trim() : v; });
      delete fd.website;
      var payload = Object.assign({
        product: P.slug, product_title: P.title,
        source: form.dataset.leadSource || 'form',
        page: location.pathname, sentAt: new Date().toISOString(),
        attribution: Attr.payload(),
      }, fd, extra || {});

      var btn = form.querySelector('[type="submit"]');
      var label = btn ? btn.textContent : '';
      form.dataset.sending = '1';
      if (btn) { btn.disabled = true; btn.textContent = 'Отправляем…'; }
      status(form, '');

      var req = demo
        ? new Promise(function (r) { setTimeout(function () { r({ ok: true }); }, 450); })
        : fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

      req.then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        goal('lead_submitted', { source: payload.source });
        form.dataset.sending = '';
        if (typeof onOk === 'function') { onOk(payload); return; }
        form.reset();
        status(form, 'Заявка принята. Свяжемся в течение 30 минут.', 'ok');
        if (btn) { btn.disabled = false; btn.textContent = label; }
      }).catch(function () {
        form.dataset.sending = '';
        if (btn) { btn.disabled = false; btn.textContent = label; }
        status(form, 'Не удалось отправить. Позвоните: ' + P.brand.phone, 'error');
      });
    }

    function bind(form) {
      if (form.dataset.bound) return;
      form.dataset.bound = '1';
      bindPhone(form.querySelector('input[type="tel"]'));
      form.addEventListener('submit', function (e) { e.preventDefault(); submit(form); });
    }
    return { submit: submit, bind: bind, bindPhone: bindPhone, status: status };
  })();

  /* ══ 4. КОНФИГУРАТОР ════════════════════════════════════════════════════
     Поля описываются декларативно в data.js. Движок сам считает вилку:
        итог = (база + Σ ползунок×цена_за_единицу + Σ выбранные опции) × Π коэффициенты
     Вторая цена («под ключ») — итог × turnkeyFactor, если направление её имеет.
  ═══════════════════════════════════════════════════════════════════════ */
  var Calc = (function () {
    var root = $('[data-calc]');
    if (!root || !P.quiz) return null;
    var Q = P.quiz;
    var state = {};
    var modal = null, channel = 'whatsapp';
    // Какие раскрывашки человек открыл сам: при перерисовке они должны
    // остаться открытыми, а закрытые — закрытыми.
    var opened = {};

    Q.fields.forEach(function (f) {
      if (f.type === 'range') state[f.id] = f.def != null ? f.def : f.min;
      else if (f.type === 'checks') state[f.id] = new Set((f.options || []).filter(function (o) { return o.def; }).map(function (o) { return o.id; }));
      else state[f.id] = (f.options && f.options[0] && f.options[0].id) || '';
    });
    // стартовые значения можно задать адресом: ?<id>=<value>
    Q.fields.forEach(function (f) {
      var v = QS.get(f.id);
      if (!v) return;
      if (f.type === 'range') { var n = parseFloat(v); if (!isNaN(n)) state[f.id] = Math.min(f.max, Math.max(f.min, n)); }
      else if (f.type !== 'checks' && (f.options || []).some(function (o) { return o.id === v; })) state[f.id] = v;
    });

    function selected(f) {
      return (f.options || []).filter(function (o) {
        return f.type === 'checks' ? state[f.id].has(o.id) : state[f.id] === o.id;
      });
    }

    function compute() {
      var base = Q.base || 0, k = 1;
      Q.fields.forEach(function (f) {
        if (f.type === 'range') base += state[f.id] * (f.pricePerUnit || 0);
        else selected(f).forEach(function (o) { base += (o.add || 0); if (o.k) k *= o.k; });
      });
      var main = Math.max(0, base * k);
      return {
        main: Math.round(main / 1000) * 1000,
        mainMax: Math.round(main * (Q.spread || 1.2) / 1000) * 1000,
        turnkey: Q.turnkeyFactor ? Math.round(main * Q.turnkeyFactor / 1000) * 1000 : 0,
      };
    }

    function pick() {
      if (!Q.matchBy) return null;
      var val = state[Q.matchBy.field];
      var list = P.catalog.filter(function (c) { return (c[Q.matchBy.key] || '') === val; });
      return list[0] || null;
    }

    function rangeHtml(r) {
      return money(r.main) + '&#8201;–&#8201;' + money(r.mainMax);
    }

    function fieldHtml(f, idx) {
      var head = '<span class="calc__label">' + (f.step ? '<i>' + f.step + '</i>' : '') + esc(f.label) +
        (f.type === 'range' ? '<b class="calc__value" data-val="' + f.id + '">' + num(state[f.id], f.dec || 0) + ' ' + esc(f.unit || '') + '</b>' : '') +
        '</span>';

      if (f.type === 'range') {
        return '<div class="calc__field">' + head +
          '<div class="calc-range">' +
            '<input type="range" min="' + f.min + '" max="' + f.max + '" step="' + f.stepSize + '" value="' + state[f.id] + '" data-range="' + f.id + '" aria-label="' + esc(f.label) + '">' +
            '<div class="calc-range__scale"><span>' + num(f.min, f.dec || 0) + ' ' + esc(f.unit || '') + '</span><span>' + num(f.max, f.dec || 0) + ' ' + esc(f.unit || '') + '</span></div>' +
          '</div>' +
          (f.hint ? '<p class="calc__hint">' + esc(f.hint) + '</p>' : '') + '</div>';
      }

      // Компактный select вместо трёх строк радио: помещается в одну
      // строку и не растягивает калькулятор. Применяем там, где у
      // вариантов нет ни цен, ни длинных подсказок.
      var plain = f.type === 'radio' && (f.options || []).length > 2 &&
                  !(f.options || []).some(function (o) { return o.add; });
      if (plain) {
        return '<div class="calc__field">' + head +
          '<div class="calc-select">' +
            '<select data-select="' + f.id + '" aria-label="' + esc(f.label) + '">' +
              (f.options || []).map(function (o) {
                return '<option value="' + esc(o.id) + '"' + (state[f.id] === o.id ? ' selected' : '') + '>' +
                  esc(o.label) + (o.hint ? ' — ' + esc(o.hint) : '') + '</option>';
              }).join('') +
            '</select>' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</div>' +
          (f.hint ? '<p class="calc__hint">' + esc(f.hint) + '</p>' : '') + '</div>';
      }

      var opts = (f.options || []).map(function (o) {
        var on = f.type === 'checks' ? state[f.id].has(o.id) : state[f.id] === o.id;
        return '<button type="button" class="calc-opt' + (f.type === 'checks' ? '' : ' calc-opt--radio') + (on ? ' is-on' : '') +
          '" data-field="' + f.id + '" data-opt="' + o.id + '">' +
          '<span class="calc-opt__box" aria-hidden="true"></span>' +
          '<span class="calc-opt__body"><span class="calc-opt__name">' + esc(o.label) + '</span>' +
          (o.hint ? '<span class="calc-opt__hint">' + esc(o.hint) + '</span>' : '') + '</span>' +
          (o.add ? '<span class="calc-opt__price">+' + fmt(o.add) + ' ₽</span>' : '') +
          '</button>';
      }).join('');

      if (f.collapsed) {
        var n = f.type === 'checks' ? state[f.id].size : 0;
        // Пока ничего не выбрано, в скобках подсказка: свёрнутый блок
        // без неё выглядит как заголовок, а не как раскрывающийся список.
        return '<details class="calc__more" data-more-id="' + f.id + '"' +
          (opened[f.id] ? ' open' : '') + '><summary>' + esc(f.label) +
          ' <span>' + (n ? '(' + n + ')' : '(нажмите, чтобы увидеть список)') + '</span></summary>' +
          '<div class="calc-opts' + ((f.options || []).length > 3 ? ' calc-opts--grid' : '') + '">' + opts + '</div></details>';
      }
      var grid = f.type === 'checks' && (f.options || []).length > 3 ? ' calc-opts--grid' : '';
      return '<div class="calc__field">' + head + '<div class="calc-opts' + (f.row ? ' calc-opts--row' : '') + grid + '">' + opts + '</div>' +
        (f.hint ? '<p class="calc__hint">' + esc(f.hint) + '</p>' : '') + '</div>';
    }

    function render() {
      var r = compute(), p = pick();
      root.innerHTML =
        '<div class="calc">' +
          '<h2 class="calc__title">' + esc(Q.title) + '</h2>' +
          '<p class="calc__sub">' + esc(Q.sub) + '</p>' +
          Q.fields.map(fieldHtml).join('') +
          (p ? '<div class="calc-pick">' +
              '<span class="calc-pick__img">' + (p.img ? '<img src="' + esc(p.img) + '" alt="' + esc(p.title) + '" loading="lazy" decoding="async" width="200" height="150">' : '') + '</span>' +
              '<span class="calc-pick__body"><span class="calc-pick__label">Похожий реализованный проект</span>' +
              '<span class="calc-pick__name">' + esc(p.title.slice(0, 46)) + '</span>' +
              '<span class="calc-pick__meta">облицовка от ' + fmt(p.p1) + ' ₽</span></span>' +
            '</div>' : '') +
          // Цену в калькуляторе не показываем: расчёт уходит человеку
          // в мессенджер или по телефону — так делает референс, и так
          // разговор начинается с менеджером, а не с числом на экране.
          // Цены при этом открыты в каталоге: страница не прячет их.
          '<div class="calc__result">' +
            '<p class="calc__result-note">' + esc(Q.note) + '</p>' +
          '</div>' +
          '<div class="calc__cta">' +
            '<div class="calc-actions">' +
              '<button type="button" class="btn btn--primary" data-cta="whatsapp">Прислать расчёт</button>' +
              '<button type="button" class="btn btn--ghost" data-cta="call">Обсудить по телефону</button>' +
            '</div>' +
            '<div class="calc__social"><span class="calc__pulse"></span>Сегодня заказали расчёт: <b>' + orders() + '</b></div>' +
          '</div>' +
        '</div>';
      bind();
    }

    function orders() {
      var d = new Date();
      return 4 + ((d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate()) % 7) + Math.max(1, Math.round(d.getHours() / 2));
    }

    function syncFill(el) {
      var min = +el.min, max = +el.max;
      el.style.setProperty('--fill', (((+el.value - min) / (max - min)) * 100).toFixed(1) + '%');
    }

    function refresh() {
      var r = compute();
      var sum = $('[data-sum]', root); if (sum) sum.innerHTML = rangeHtml(r);
      var sec = $('[data-second]', root);
      if (sec && r.turnkey) sec.innerHTML = 'Под ключ с монтажом — <b>от ' + fmt(r.turnkey) + ' ₽</b>';
    }

    function bind() {
      $$('[data-range]', root).forEach(function (el) {
        syncFill(el);
        el.addEventListener('input', function () {
          var f = Q.fields.filter(function (x) { return x.id === el.dataset.range; })[0];
          state[el.dataset.range] = parseFloat(el.value);
          var lbl = $('[data-val="' + el.dataset.range + '"]', root);
          if (lbl) lbl.textContent = num(state[el.dataset.range], f.dec || 0) + ' ' + (f.unit || '');
          syncFill(el); refresh();
        });
      });
      $$('[data-more-id]', root).forEach(function (dt) {
        dt.addEventListener('toggle', function () { opened[dt.dataset.moreId] = dt.open; });
      });
      $$('[data-select]', root).forEach(function (sel) {
        sel.addEventListener('change', function () {
          state[sel.dataset.select] = sel.value;
          render();
        });
      });
      $$('[data-opt]', root).forEach(function (b) {
        b.addEventListener('click', function () {
          var f = Q.fields.filter(function (x) { return x.id === b.dataset.field; })[0];
          if (f.type === 'checks') {
            var s = state[f.id];
            if (s.has(b.dataset.opt)) s.delete(b.dataset.opt); else s.add(b.dataset.opt);
            b.classList.toggle('is-on');
            refresh();
          } else { state[f.id] = b.dataset.opt; render(); }
        });
      });
      $$('[data-cta]', root).forEach(function (b) {
        b.addEventListener('click', function () { channel = b.dataset.cta; goal('calc_cta_click', { channel: channel }); open(); });
      });
    }

    function summary() {
      var out = [];
      Q.fields.forEach(function (f) {
        if (f.type === 'range') out.push(f.label + ': ' + num(state[f.id], f.dec || 0) + ' ' + (f.unit || ''));
        else {
          var s = selected(f).map(function (o) { return o.label; });
          if (s.length) out.push(f.label + ': ' + s.join(', '));
        }
      });
      return out;
    }

    function quizPayload() {
      var r = compute(), o = { estimate_min: r.main, estimate_max: r.mainMax, estimate_turnkey: r.turnkey, channel: channel };
      Q.fields.forEach(function (f) {
        o[f.id] = f.type === 'checks' ? Array.from(state[f.id]).join(',') : state[f.id];
      });
      o.summary = summary().join('; ');
      return o;
    }

    /* ── Модалка захвата ─────────────────────────────────────────────────── */
    var TIMINGS = [{ id: 'now', l: 'Уже сейчас' }, { id: '1-3m', l: 'В ближайшие 1–3 мес.' }, { id: 'later', l: 'Позже, присматриваюсь' }];

    function build() {
      var w = document.createElement('div');
      w.className = 'modal'; w.hidden = true;
      w.innerHTML =
        '<div class="modal__frame" role="dialog" aria-modal="true">' +
          '<button type="button" class="modal__close" data-close aria-label="Закрыть">✕</button>' +
          '<h3 class="modal__title" data-mtitle></h3>' +
          '<p class="modal__sub" data-msub></p>' +

          '<div class="modal__channels">' +
            // Звонок первым: он не требует от человека ничего, кроме номера.
            // Дальше мессенджеры в порядке популярности в России.
            '<button type="button" class="modal__chan" data-chan="call">Звонок</button>' +
            '<button type="button" class="modal__chan" data-chan="max">MAX</button>' +
            '<button type="button" class="modal__chan" data-chan="telegram">Telegram</button>' +
            '<button type="button" class="modal__chan" data-chan="whatsapp">WhatsApp</button>' +
          '</div>' +
          '<form data-lead-source="calc" novalidate>' +
            '<input type="text" name="website" class="form-honey" tabindex="-1" autocomplete="off" aria-hidden="true">' +
            '<input type="hidden" name="channel" data-chan-input value="whatsapp">' +
            '<input type="hidden" name="timing" data-timing-input value="">' +
            '<label class="field"><span class="field__label">Имя</span><input class="input" type="text" name="name" placeholder="Как к вам обращаться" required></label>' +
            '<label class="field"><span class="field__label">Телефон</span><input class="input" type="tel" name="phone" placeholder="+7 (___) ___-__-__" required inputmode="tel"></label>' +
            '<div class="field"><span class="field__label">Когда планируете начать?</span><div class="chips-timing">' +
              TIMINGS.map(function (t) { return '<button type="button" class="chip" data-timing="' + t.id + '">' + t.l + '</button>'; }).join('') +
            '</div></div>' +
            '<button type="submit" class="btn btn--primary" style="width:100%">Получить расчёт</button>' +
            '<p class="policy">Нажимая кнопку, вы соглашаетесь с <a href="../policy.html" target="_blank" rel="noopener">политикой обработки персональных данных</a>. Спама не будет.</p>' +
            '<div class="form-status" role="status" aria-live="polite"></div>' +
          '</form>' +
        '</div>';
      document.body.appendChild(w);
      w.addEventListener('click', function (e) { if (e.target === w) close(); });
      $('[data-close]', w).addEventListener('click', close);
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !w.hidden) close(); });
      $$('[data-chan]', w).forEach(function (b) { b.addEventListener('click', function () { channel = b.dataset.chan; syncChan(); }); });
      $$('[data-timing]', w).forEach(function (b) {
        b.addEventListener('click', function () {
          $$('[data-timing]', w).forEach(function (x) { x.classList.remove('is-on'); });
          b.classList.add('is-on');
          $('[data-timing-input]', w).value = b.dataset.timing;
        });
      });
      var form = $('form', w);
      Lead.bindPhone(form.querySelector('input[type="tel"]'));
      form.dataset.bound = '1';
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        Lead.submit(form, { quiz: quizPayload() }, function () { success(w); });
      });
      return w;
    }

    function success(w) {
      $('.modal__frame', w).innerHTML =
        '<button type="button" class="modal__close" data-close aria-label="Закрыть">✕</button>' +
        '<div class="modal__success"><b>Заявка принята</b>' +
        '<p>Инженер свяжется в течение 30 минут в рабочее время, пришлёт расчёт и подборку похожих проектов.</p></div>';
      $('[data-close]', w).addEventListener('click', close);
      // Экран успеха затирает форму. Помечаем модалку отработавшей, чтобы
      // при следующем открытии её собрали заново: иначе человек, отправивший
      // заявку, больше не может открыть форму — syncChan падает на пустых
      // полях, и ни одна кнопка на странице не срабатывает.
      w.dataset.done = '1';
    }

    function syncChan() {
      if (!modal) return;
      $$('[data-chan]', modal).forEach(function (b) { b.classList.toggle('is-on', b.dataset.chan === channel); });
      $('[data-chan-input]', modal).value = channel;
      var call = channel === 'call';
      $('[data-mtitle]', modal).textContent = call ? 'Перезвоним с расчётом' : 'Пришлём расчёт в мессенджер';
      $('[data-msub]', modal).textContent = call
        ? 'Инженер позвонит в течение 30 минут в рабочее время и на словах даст вилку по вашей конфигурации.'
        : 'Пришлём смету, 3D-эскиз и подборку похожих реализованных проектов. Ответим за 30 минут.';
    }

    function open() {
      // Модалка после успешной отправки одноразовая: выбрасываем её и
      // собираем чистую, чтобы повторная заявка работала.
      if (modal && modal.dataset.done) { modal.remove(); modal = null; }
      if (!modal) modal = build();
      syncChan();
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      setTimeout(function () { var f = modal.querySelector('input[name="name"]'); if (f) f.focus({ preventScroll: true }); }, 60);
    }
    function close() { if (modal) modal.hidden = true; document.body.style.overflow = ''; }

    render();
    return { open: open, state: state };
  })();

  /* ══ 5. РЕНДЕР СЕКЦИЙ ═══════════════════════════════════════════════════ */

  // Каталог топ-моделей с фильтрами
  (function catalog() {
    var grid = $('[data-cards]');
    // Товарные снимки: карточки как на основном сайте — четыре в ряд,
    // кадр целиком на белом, без квадратной обрезки. Включается флагом
    // catalogStyle в data.js, остальные направления не задеты.
    if (grid && P.catalogStyle === 'product') grid.classList.add('cards--product');
    if (!grid || !P.catalog) return;
    var empty = $('[data-cards-empty]');
    var f = {};
    (P.filters || []).forEach(function (x) { f[x.key] = 'all'; });
    // Девять карточек ложатся ровно в три ряда по три. В товарном каталоге
    // ряд четвёрочный, и девятая висела бы одна в третьем ряду — берём восемь.
    // Девять карточек ложатся ровно в три ряда по три. В товарном каталоге
    // ряд четвёрочный и позиций сотня — показываем двенадцать, три полных ряда.
    var LIMIT = P.catalogStyle === 'product' ? 12 : 9, expanded = false;

    function match(c) {
      return (P.filters || []).every(function (x) {
        if (f[x.key] === 'all') return true;
        var o = x.options.filter(function (o) { return o.id === f[x.key]; })[0];
        if (!o) return true;
        if (o.max != null) return c.p1 <= o.max && c.p1 >= (o.min || 0);
        return (c[x.field] || '') === o.id;
      });
    }

    function card(c, idx) {
      var n = (c.photos || []).length;
      return '<article class="card" data-card="' + idx + '">' +
        '<button type="button" class="card__media" data-gal="' + idx + '"' +
          ' aria-label="' + (n > 1 ? 'Открыть галерею: ' : 'Открыть фото: ') + esc(c.title) + '">' +
          (c.img
            ? '<img class="card__bg" src="' + esc(thumb(c.img)) + '" alt="" aria-hidden="true" loading="lazy" decoding="async" width="600" height="600">' +
              '<img class="card__pic" src="' + esc(thumb(c.img)) + '" alt="' + esc(c.title) + '" loading="lazy" decoding="async" width="600" height="600">'
            : '') +
          (c.collection ? '<span class="card__tag">' + esc(c.collection) + '</span>' : '') +
          (n > 1 ? '<span class="card__count">' + n + ' фото</span>' : '') +
        '</button>' +
        '<div class="card__body">' +
          '<h3 class="card__name">' + esc(c.title) + '</h3>' +
          (c.desc ? '<p class="card__desc">' + esc(c.desc) + '</p>' : '') +
          // Размер и вес — проверяемые числа: они доказывают ручную работу
          // убедительнее любого прилагательного.
          // Плитки величин: килограммы и метры доказывают ручную работу
          // убедительнее прилагательных. Ширина тянется на auto-fit —
          // две плитки выглядят так же намеренно, как три.
          (c.tiles && c.tiles.length
            ? '<div class="card__tiles">' + c.tiles.map(function (t) {
                return '<div class="tile"><b>' + esc(t.v) + '</b><span>' + esc(t.l) + '</span></div>';
              }).join('') + '</div>'
            : '') +
          // Главная цена — та, за которую покупают. Обычно это «под ключ»,
          // но у направлений вроде изразцов монтажа нет и единственная
          // цена — за материал: тогда главной становится она, иначе цена
          // осталась бы набрана мелким серым и потерялась.
          '<div class="card__prices">' +
            (c.p2
              ? '<div class="card__p2"><span>' + esc(P.priceLabel1 || 'Облицовка') + '</span><b>от ' + fmt(c.p1) + ' ₽</b></div>' +
                '<div class="card__p1"><span>Под ключ с монтажом</span><b>от ' + fmt(c.p2) + ' ₽</b></div>'
              : '<div class="card__p1 card__p1--solo"><span>' + esc(P.priceLabel1 || 'Облицовка') + '</span><b>от ' + fmt(c.p1) + ' ₽</b></div>') +
          '</div>' +
        '</div>' +
        '<footer class="card__foot">' +
          '<button type="button" class="btn btn--primary" data-lead data-src="card">Рассчитать такой же</button>' +
          (c.url ? '<a class="btn btn--ghost" href="' + esc(c.url) + '" target="_blank" rel="noopener" aria-label="Подробнее об объекте">Подробнее</a>' : '') +
        '</footer>' +
      '</article>';
    }

    function draw() {
      var list = P.catalog.filter(match);
      var shown = expanded ? list : list.slice(0, LIMIT);
      // индекс в общем каталоге — чтобы галерея открыла кадры нужного объекта
      grid.innerHTML = shown.map(function (c) { return card(c, P.catalog.indexOf(c)); }).join('');
      if (empty) empty.hidden = list.length > 0;
      var more = $('[data-cards-more]');
      if (more) { more.hidden = expanded || list.length <= LIMIT; more.textContent = 'Показать ещё ' + (list.length - LIMIT); }
    }

    var box = $('[data-filters]');
    if (box) box.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      var group = b.closest('[data-filter-key]');
      $$('.chip', group).forEach(function (x) { x.classList.remove('is-on'); });
      b.classList.add('is-on');
      f[group.dataset.filterKey] = b.dataset.v;
      expanded = false; draw();
    });
    var more = $('[data-cards-more]');
    if (more) more.addEventListener('click', function () { expanded = true; draw(); });
    draw();
  })();

  // Фильтры
  (function filters() {
    var box = $('[data-filters]');
    if (!box || !P.filters) return;
    var VISIBLE_CHIPS = 4;
    box.innerHTML = P.filters.map(function (x) {
      var extra = x.options.length - VISIBLE_CHIPS;
      return '<div class="filters" data-filter-key="' + x.key + '">' +
        '<button type="button" class="chip is-on" data-v="all">' + esc(x.label) + ': все</button>' +
        x.options.map(function (o, i) {
          return '<button type="button" class="chip' + (i >= VISIBLE_CHIPS ? ' chip--extra' : '') + '"' +
            (i >= VISIBLE_CHIPS ? ' hidden' : '') + ' data-v="' + o.id + '">' + esc(o.label) + '</button>';
        }).join('') +
        (extra > 0 ? '<button type="button" class="chip chip--more" data-more>Ещё ' + extra + '</button>' : '') +
        '</div>';
    }).join('');

    // «Ещё N» раскрывает остальные коллекции: список из четырнадцати
    // чипов занимал на телефоне три строки и выглядел стеной.
    box.addEventListener('click', function (e) {
      var m = e.target.closest('[data-more]');
      if (!m) return;
      var row = m.closest('.filters');
      $$('.chip--extra', row).forEach(function (c) { c.hidden = false; });
      m.remove();
    });
  })();

  // Этапы, гарантии, FAQ, галерея
  (function sections() {
    var s = $('[data-steps]');
    if (s && P.steps) s.innerHTML = P.steps.map(function (x, i) {
      return '<div class="step"><span class="step__n">' + (i + 1) + '</span><h3>' + esc(x.title) + '</h3><p>' + esc(x.text) + '</p><span class="step__day">' + esc(x.day) + '</span></div>';
    }).join('');

    var g = $('[data-guarantees]');
    if (g && P.guarantees) g.innerHTML = P.guarantees.map(function (x) {
      // Иконка вместо буквенной заглушки: смысл считывается до чтения.
      return '<div class="gcard">' +
        (x.svg ? '<span class="gcard__icon">' + x.svg + '</span>' : '') +
        (x.b ? '<b>' + esc(x.b) + '</b>' : '') +
        '<h3>' + esc(x.title) + '</h3><p>' + esc(x.text) + '</p></div>';
    }).join('');

    var q = $('[data-faq]');
    if (q && P.faq) {
      q.innerHTML = P.faq.map(function (x, i) {
        // Длинная простыня вопросов режет конверсию: сразу видно шесть,
        // остальные открываются кнопкой. В микроразметке остаются все.
        return '<details class="qa' + (i >= 6 ? ' qa--extra' : '') + '"' +
          (i === 0 ? ' open' : '') + (i >= 6 ? ' hidden' : '') +
          '><summary><span>' + esc(x.q) + '</span><i aria-hidden="true"></i></summary><div class="qa__body"><p>' + esc(x.a) + '</p></div></details>';
      }).join('');
      q.addEventListener('toggle', function (e) {
        if (e.target.tagName !== 'DETAILS' || !e.target.open) return;
        $$('details.qa', q).forEach(function (d) { if (d !== e.target) d.open = false; });
      }, true);

      if (P.faq.length > 6) {
        var rest = P.faq.length - 6;
        var tail = rest % 10, tens = rest % 100;
        var word = (tail === 1 && tens !== 11) ? 'вопрос'
                 : (tail >= 2 && tail <= 4 && (tens < 12 || tens > 14)) ? 'вопроса' : 'вопросов';
        var more = document.createElement('button');
        more.type = 'button';
        more.className = 'btn btn--ghost';
        more.style.width = '100%';
        more.style.marginTop = '.6rem';
        more.textContent = 'Ещё ' + rest + ' ' + word;
        more.addEventListener('click', function () {
          $$('.qa--extra', q).forEach(function (d) { d.hidden = false; });
          more.remove();
        });
        q.appendChild(more);
      }
      var ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: P.faq.map(function (x) { return { '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } }; }) });
      document.head.appendChild(ld);
    }

    /* Русский текст роняет предлог на следующую строку: «и», «в», «по»
       повисают в конце. Один проход по DOM после отрисовки приклеивает
       короткие слова к следующему и не даёт разорвать число с единицей. */
    function typography() {
      var SHORT = /(^|[\s(«"])([А-Яа-яЁё]{1,2}|из|под|над|при|про|без|для|как|что|это|уже|или|его|её|их)\s+/g;
      var UNITS = /(\d)\s+(₽|м²|м³|мм|см|м|кг|шт|дней|дня|день|мес|лет|года|год|тыс|млн|°C|%)/g;
      var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, CODE: 1, PRE: 1 };
      function walk(node) {
        for (var n = node.firstChild; n; n = n.nextSibling) {
          if (n.nodeType === 3) {
            var t = n.nodeValue.replace(SHORT, '$1$2\u00A0').replace(UNITS, '$1\u00A0$2');
            if (t !== n.nodeValue) n.nodeValue = t;
          } else if (n.nodeType === 1 && !SKIP[n.tagName]) walk(n);
        }
      }
      ['.section__title', '.section__lead', '.hero__title', '.hero__sub', '.hero__badge',
       '.hero__usp li', '.card__desc', '.why', '.steps', '.guarantees', '.cta__list li',
       '.qa__body', '.contacts__list', '.calc__result-note', '.calc__sub'
      ].forEach(function (sel) { $$(sel).forEach(walk); });
    }

    var w = $('[data-why]');
    if (w && P.why) w.innerHTML =
      '<div class="why__card why__card--bad"><h3>' + esc(P.why.badTitle) + '</h3><ul>' +
        P.why.bad.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="why__card why__card--good"><h3>' + esc(P.why.goodTitle) + '</h3><ul>' +
        P.why.good.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
        (P.why.media ? '<div class="why__media"><img src="' + esc(P.why.media) + '" alt="" loading="lazy" decoding="async" width="800" height="600"></div>' : '') + '</div>';

    // Галерея с лайтбоксом
    var gal = $('[data-gallery]');
    // Товарный стиль галереи (кадр целиком на светлом) нужен там, где
    // в ней лежат снимки изделий на подставке. Если галерея собрана из
    // объектов соседних направлений — это обычные интерьерные кадры,
    // и они должны заполнять плитку, а не висеть в белых полях.
    var galExternal = P.gallery && P.gallery.length && /^\.\./.test(P.gallery[0]);
    if (gal && P.catalogStyle === 'product' && !galExternal) gal.classList.add('gallery--product');
    if (gal && P.gallery && P.gallery.length) {
      gal.innerHTML = P.gallery.map(function (src, i) {
        return '<button type="button" data-i="' + i + '" aria-label="Открыть фото ' + (i + 1) + '"><img src="' + esc(thumb(src)) + '" alt="Реализованный проект" loading="lazy" decoding="async" width="400" height="400"></button>';
      }).join('');
      var lb = null, cur = 0;
      // Набор кадров и подпись задаются при открытии: из общей галереи
      // раздела или из фотографий конкретного объекта.
      var set = P.gallery, caption = P.title + ' — реализованный проект';
      function show() {
        cur = (cur + set.length) % set.length;
        $('img', lb).src = set[cur];
        $('figcaption', lb).textContent = caption + ' · ' + (cur + 1) + '/' + set.length;
      }
      // Открыть галерею конкретного объекта — вызывается из карточки каталога
      window.LPGallery = function (photos, title, start) {
        if (!photos || !photos.length) return;
        set = photos; caption = title; cur = start || 0;
        if (!lb) lb = makeLb();
        show(); lb.hidden = false;
      };
      function makeLb() {
        var el = document.createElement('div');
        el.className = 'lightbox'; el.hidden = true;
        el.innerHTML = '<button class="lightbox__close" data-c aria-label="Закрыть">✕</button>' +
          '<button class="lightbox__nav lightbox__nav--prev" data-p aria-label="Предыдущее">‹</button>' +
          '<figure><img alt="" width="1200" height="900"><figcaption></figcaption></figure>' +
          '<button class="lightbox__nav lightbox__nav--next" data-n aria-label="Следующее">›</button>';
        document.body.appendChild(el);
        el.addEventListener('click', function (e) { if (e.target === el) el.hidden = true; });
        $('[data-c]', el).addEventListener('click', function () { el.hidden = true; });
        $('[data-p]', el).addEventListener('click', function () { cur--; show(); });
        $('[data-n]', el).addEventListener('click', function () { cur++; show(); });
        document.addEventListener('keydown', function (e) {
          if (el.hidden) return;
          if (e.key === 'Escape') el.hidden = true;
          if (e.key === 'ArrowLeft') { cur--; show(); }
          if (e.key === 'ArrowRight') { cur++; show(); }
        });
        var x0 = null;
        el.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
        el.addEventListener('touchend', function (e) {
          if (x0 === null) return;
          var dx = e.changedTouches[0].clientX - x0;
          if (Math.abs(dx) > 50) { cur += dx < 0 ? 1 : -1; show(); }
          x0 = null;
        }, { passive: true });
        return el;
      }
      gal.addEventListener('click', function (e) {
        var b = e.target.closest('[data-i]'); if (!b) return;
        if (!lb) lb = makeLb();
        set = P.gallery; caption = P.title + ' — реализованный проект';
        cur = +b.dataset.i; show(); lb.hidden = false;
      });
    }

    // Вызываем в самом конце: к этому моменту отрисованы все блоки,
    // включая те, что собираются из data.js.
    typography();
  })();

  /* ══ 6. КОНТАКТЫ, ШАПКА, CTA ════════════════════════════════════════════ */
  (function chrome() {
    var b = P.brand;
    function wire(sel, url) {
      $$(sel).forEach(function (a) {
        if (url) {
          a.href = url; a.hidden = false;
          a.rel = 'noopener noreferrer';
          if (!a.target) a.target = '_blank';
        } else {
          a.hidden = true; a.removeAttribute('href');
        }
      });
    }
    var txt = encodeURIComponent('Здравствуйте! Пишу с сайта по направлению «' + P.title + '», хочу расчёт.');
    wire('[data-wa]', b.whatsapp ? 'https://wa.me/' + b.whatsapp + '?text=' + txt : '');
    wire('[data-tg]', b.telegram ? 'https://t.me/' + b.telegram : '');
    wire('[data-max]', b.maxUrl || '');
    // Плавающие кружки в углу: показываем только если есть хоть одна
    // ссылка. Пустой кружок хуже, чем его отсутствие.
    (function msgDock() {
      var dock = $('[data-msgdock]');
      if (dock) dock.hidden = !(b.maxUrl || b.telegram || b.whatsapp);
    })();

    // В нижней панели один слот под мессенджер: MAX в приоритете,
    // WhatsApp — запасной. Обе сразу не помещаются рядом с телефоном
    // и кнопкой расчёта.
    (function barMessenger() {
      // Слот один: показываем первый заполненный по приоритету MAX →
      // Telegram → WhatsApp. Три кнопки подряд не помещаются рядом
      // с телефоном и расчётом.
      var slots = [['[data-max]', b.maxUrl], ['[data-tg]', b.telegram], ['[data-wa]', b.whatsapp]];
      var taken = false;
      slots.forEach(function (pair) {
        var el = document.querySelector('.mobilebar ' + pair[0]);
        if (!el) return;
        var show = !taken && !!pair[1];
        el.hidden = !show;
        if (show) taken = true;
      });
    })();

    $$('[data-tel]').forEach(function (a) { a.href = 'tel:' + b.phone.replace(/\D/g, ''); });
    $$('[data-phone-text]').forEach(function (el) { el.textContent = b.phone; });
    var y = $('[data-year]'); if (y) y.textContent = new Date().getFullYear();

    var header = $('[data-header]'), bar = $('[data-mobilebar]');
    function onScroll() {
      if (header) header.classList.toggle('is-stuck', window.scrollY > 20);
      if (bar) bar.classList.toggle('is-visible', window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    var burger = $('[data-burger]'), nav = $('[data-nav]');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        burger.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') { nav.classList.remove('is-open'); burger.classList.remove('is-open'); document.body.style.overflow = ''; }
      });
    }

    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (a && a.getAttribute('href').length > 1) {
        var t = document.querySelector(a.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
      // Клик по фото карточки открывает галерею объекта, а не форму
      var gal = e.target.closest('[data-gal]');
      if (gal && window.LPGallery && window.LP) {
        var it = window.LP.catalog[+gal.dataset.gal];
        // Одного кадра тоже достаточно: человек хочет рассмотреть плитку,
        // а не пролистать галерею.
        var shots = (it && it.photos && it.photos.length) ? it.photos : (it && it.img ? [it.img] : []);
        if (shots.length) {
          goal('gallery_open', { item: it.title });
          window.LPGallery(shots, it.title, 0);
          return;
        }
      }
      var lead = e.target.closest('[data-lead]');
      if (lead && Calc) { goal('cta_click', { source: lead.dataset.src || 'cta' }); Calc.open(); }
      var tel = e.target.closest('a[href^="tel:"]');
      if (tel) goal('phone_click');
      var msg = e.target.closest('a[href*="wa.me"], a[href*="t.me"]');
      if (msg) goal('messenger_click');
    });

    $$('form[data-lead-source]').forEach(Lead.bind);

    // микроконверсия: первое касание конфигуратора
    var calcBox = $('[data-calc]'), fired = false;
    if (calcBox) {
      ['input', 'click'].forEach(function (ev) {
        calcBox.addEventListener(ev, function () { if (!fired) { fired = true; goal('calc_started'); } }, { passive: true });
      });
    }
    var deep = false;
    window.addEventListener('scroll', function () {
      if (deep) return;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h >= .75) { deep = true; goal('scroll_75'); }
    }, { passive: true });
  })();
})();
