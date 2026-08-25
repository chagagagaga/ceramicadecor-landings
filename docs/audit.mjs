/**
 * Аудит посадочных CeramicaDecor: все семь направлений разом.
 * Запуск: node docs/audit.mjs
 */
import { JSDOM, VirtualConsole } from 'jsdom';
import fs from 'fs'; import path from 'path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SLUGS = ['barbekyu-kompleksy','kaminy','izraztsy','pechi-kaminy','bannye-portaly','russkie-pechi','otopitelnye-pechi'];
let bad = 0;

for (const slug of SLUGS) {
  const errs = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => errs.push('JSDOM: ' + e.message));
  vc.on('error', (...a) => errs.push('console.error: ' + a.join(' ')));
  const dir = path.join(ROOT, slug);
  const dom = new JSDOM(fs.readFileSync(path.join(dir, 'index.html'), 'utf8'),
    { runScripts: 'dangerously', url: `http://localhost:8099/${slug}/`, virtualConsole: vc, pretendToBeVisual: true });
  const { window } = dom, d = window.document;
  for (const s of [...d.querySelectorAll('script[src]')]) {
    const rel = s.getAttribute('src').split('?')[0];
    const f = path.resolve(dir, rel);
    const el = d.createElement('script');
    try { el.textContent = fs.readFileSync(f, 'utf8'); } catch { errs.push('нет ' + rel); continue }
    s.replaceWith(el);
  }
  d.dispatchEvent(new window.Event('DOMContentLoaded', { bubbles: true }));
  await new Promise(r => setTimeout(r, 120));
  const click = s => d.querySelector(s)?.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

  const t = (c, m) => { if (!c) errs.push(m); };
  t(d.querySelectorAll('main > section').length >= 8, 'мало секций');
  const order = [...d.querySelectorAll('main > section[id]')].map(s => s.id);
  t(order.indexOf('works') < order.indexOf('catalog'), 'портфолио должно идти до каталога');
  t(!d.querySelector('[data-sum]'), 'цена должна быть скрыта до касания');
  t(!!d.querySelector('[data-reveal]'), 'нет кнопки «Показать стоимость»');
  click('[data-reveal]');
  t(!!d.querySelector('[data-sum]'), 'кнопка не раскрывает цену');
  click('[data-cards-more]'); click('.faq__inner .btn--ghost');
  const imgs = [...d.querySelectorAll('img[src]')];
  const miss = imgs.map(i => i.getAttribute('src')).filter(s => !s.startsWith('http') && !fs.existsSync(path.resolve(dir, s)));
  t(!miss.length, 'битые картинки: ' + miss.slice(0,3).join(', '));
  t(!imgs.filter(i => i.getAttribute('alt') === null).length, 'картинки без alt');
  t(!imgs.filter(i => !i.getAttribute('width')).length, 'картинки без размеров');
  const anchors = [...d.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href')).filter(h => h !== '#');
  const brokenA = anchors.filter(h => { try { return !d.querySelector(h) } catch { return true } });
  t(!brokenA.length, 'битые якоря: ' + brokenA.join(', '));
  const faq = d.querySelectorAll('details.qa');
  t(faq.length <= 6 || [...faq].filter(f => !f.hidden).length >= 6, 'FAQ не свёрнут');
  // открыть модалку
  d.querySelector('[data-cta]')?.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  const modal = d.querySelector('.modal');
  t(modal && !modal.hidden, 'модалка не открылась');
  t(modal && !modal.querySelector('[data-msum]'), 'в модалке остался блок «Ваш расчёт»');
  const txt = d.body.textContent.replace(/\s+/g, ' ');
  ['Заказать</button>', 'Здесь будет', 'бесплатный выезд'].forEach(w => { if (txt.includes(w)) errs.push('в тексте «' + w + '»'); });

  if (errs.length) { bad++; console.log(`✗ ${slug}`); errs.forEach(e => console.log('   ', e)); }
  else console.log(`✓ ${slug}`);
}
if (bad) { console.log(`\n✗ Проблемы в ${bad} из ${SLUGS.length}`); process.exitCode = 1; }
else console.log(`\n✓ Все ${SLUGS.length} чисты`);
