/**
 * Финальная сквозная проверка всех семи посадочных.
 * Проверяет то, что не ловят остальные аудиты: тексты, ссылки, цвета,
 * отображение картинок, заглушки, консистентность контактов.
 */
import { JSDOM, VirtualConsole } from 'jsdom';
import fs from 'fs'; import path from 'path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SLUGS = ['barbekyu-kompleksy','kaminy','izraztsy','pechi-kaminy','bannye-portaly','russkie-pechi','otopitelnye-pechi'];
let bad = 0;

for (const slug of SLUGS) {
  const errs = [], warns = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => errs.push('JSDOM: ' + e.message));
  const dir = path.join(ROOT, slug);
  const dom = new JSDOM(fs.readFileSync(path.join(dir,'index.html'),'utf8'),
    { runScripts:'dangerously', url:`http://localhost:8099/${slug}/`, virtualConsole:vc, pretendToBeVisual:true });
  const { window } = dom, d = window.document;
  for (const s of [...d.querySelectorAll('script[src]')]) {
    const f = path.resolve(dir, s.getAttribute('src').split('?')[0]);
    const el = d.createElement('script');
    try { el.textContent = fs.readFileSync(f,'utf8'); } catch { errs.push('нет '+s.getAttribute('src')); continue }
    s.replaceWith(el);
  }
  d.dispatchEvent(new window.Event('DOMContentLoaded',{bubbles:true}));
  await new Promise(r=>setTimeout(r,150));
  const click = s => d.querySelector(s)?.dispatchEvent(new window.MouseEvent('click',{bubbles:true}));
  click('[data-cards-more]'); click('.faq__inner .btn--ghost');
  const t = (c,m) => { if(!c) errs.push(m) };
  const w = (c,m) => { if(!c) warns.push(m) };

  // ── картинки ──
  const imgs = [...d.querySelectorAll('img[src]')];
  const miss = imgs.map(i=>i.getAttribute('src')).filter(s=>!s.startsWith('http') && !fs.existsSync(path.resolve(dir,s)));
  t(!miss.length, 'битые картинки: '+miss.slice(0,3).join(', '));
  t(!imgs.filter(i=>i.getAttribute('alt')===null).length, 'картинки без alt');
  t(!imgs.filter(i=>!i.getAttribute('width')).length, 'картинки без размеров');

  // ── ссылки ──
  const anchors = [...d.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h!=='#');
  const brokenA = anchors.filter(h=>{try{return !d.querySelector(h)}catch{return true}});
  t(!brokenA.length, 'битые якоря: '+brokenA.join(', '));
  const empty = [...d.querySelectorAll('a')].filter(a=>!a.hidden && !a.getAttribute('href') && !a.dataset.tel);
  t(!empty.length, 'ссылки без адреса: '+empty.length);
  const ext = [...d.querySelectorAll('a[href^="http"]')].filter(a=>!a.getAttribute('rel')?.includes('noopener'));
  w(!ext.length, 'внешние ссылки без rel=noopener: '+ext.length);

  // ── контакты ──
  const tel = d.querySelector('[data-tel]')?.getAttribute('href') || '';
  t(/^tel:\d{10,}$/.test(tel), 'телефон не проставлен: '+tel);
  const phoneTexts = new Set([...d.querySelectorAll('[data-phone-text]')].map(e=>e.textContent.trim()));
  t(phoneTexts.size <= 1, 'разные номера на странице: '+[...phoneTexts].join(' / '));
  t([...d.querySelectorAll('.mobilebar a:not([hidden])')].length >= 2, 'в мобильной панели меньше двух кнопок');

  // ── калькулятор и цены ──
  t(!d.querySelector('[data-sum]'), 'в калькуляторе не должно быть суммы');
  t(!!d.querySelector('[data-cta]'), 'нет кнопок отправки расчёта');
  const p1 = [...d.querySelectorAll('.card__p1 b')];
  t(p1.length > 0, 'в каталоге нет главной цены');
  t(!p1.some(b=>/NaN|undefined|^от 0/.test(b.textContent)), 'битая цена в каталоге');

  // ── карточки ──
  const cards = [...d.querySelectorAll('.card')];
  t(cards.length > 0, 'каталог пуст');
  t(!cards.some(c=>!c.querySelector('.card__name')?.textContent.trim()), 'карточка без названия');
  const tiles = cards.map(c=>c.querySelectorAll('.tile').length);
  t(!tiles.some(n=>n===1), 'карточка с одной плиткой величин');
  t(!d.querySelector('.card__foot .btn')?.textContent.includes('Узнать цену'), 'осталась кнопка «Узнать цену»');

  // ── тексты ──
  // Текст без содержимого script/style: иначе в проверку попадают
  // комментарии в коде, а не то, что видит человек.
  const clone = d.body.cloneNode(true);
  clone.querySelectorAll('script,style').forEach(n => n.remove());
  const txt = clone.textContent.replace(/\s+/g,' ');
  ['Здесь будет','undefined','NaN','[object','ЗАГЛУШКА','Lorem'].forEach(x=>{
    if (txt.includes(x)) errs.push('в тексте «'+x+'»');
  });
  ['эксклюзив','премиальн','уникальн'].forEach(x=>{
    if (txt.toLowerCase().includes(x)) warns.push('прилагательное «'+x+'» — дирекция их запрещает');
  });
  const headings = [...d.querySelectorAll('h1,h2,h3')].map(h=>h.textContent.trim());
  t(!headings.some(h=>!h), 'пустой заголовок');
  t(!!d.querySelector('h1'), 'нет H1');
  t(d.querySelectorAll('h1').length === 1, 'H1 больше одного: '+d.querySelectorAll('h1').length);

  // ── формы ──
  t(d.querySelectorAll('form[data-lead-source]').length >= 1, 'нет формы заявки');
  t(!!d.querySelector('input[name="website"]'), 'нет honeypot');
  t(!!d.querySelector('script[type="application/ld+json"]'), 'нет микроразметки FAQ');

  if (errs.length) { bad++; console.log(`✗ ${slug}`); errs.forEach(e=>console.log('   ✗',e)); }
  else console.log(`✓ ${slug}`);
  warns.forEach(x=>console.log('   ⚠',x));
}
console.log(bad ? `\n✗ проблемы в ${bad} из ${SLUGS.length}` : `\n✓ Все ${SLUGS.length} чисты`);
if (bad) process.exitCode = 1;
