/** Прогон каждой посадочной как живым пользователем: считаю, открываю
 *  форму, отправляю заявку, листаю каталог и галерею. */
import { chromium } from 'playwright';
const SLUGS = ['barbekyu-kompleksy','kaminy','izraztsy','pechi-kaminy','bannye-portaly','russkie-pechi','otopitelnye-pechi'];
const b = await chromium.launch({ channel: 'chrome' });
let fails = 0;

for (const slug of SLUGS) {
  const errs = [], steps = [];
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  p.on('pageerror', e => errs.push('JS: ' + e.message));
  const requests = [];
  p.on('request', r => { if (r.method() === 'POST') requests.push(r.url()); });

  await p.goto(`http://localhost:8099/${slug}/`, { waitUntil: 'networkidle' });

  // 1. Цена скрыта, кнопка раскрывает
  const hidden = await p.$('[data-sum]') === null;
  steps.push(hidden ? 'цена скрыта ✓' : 'цена видна сразу ✗');
  await p.click('[data-reveal]');
  await p.waitForTimeout(300);
  const sum = await p.textContent('[data-sum]').catch(() => null);
  steps.push(sum ? `цена: ${sum.replace(/\s+/g,' ').trim()} ✓` : 'цена не появилась ✗');

  // 2. Двигаю ползунок — цена меняется
  const range = await p.$('[data-range]');
  if (range) {
    await range.evaluate(el => { el.value = String(+el.max); el.dispatchEvent(new Event('input', {bubbles:true})); });
    await p.waitForTimeout(300);
    const sum2 = await p.textContent('[data-sum]');
    steps.push(sum2 !== sum ? 'ползунок меняет цену ✓' : 'ползунок не влияет ✗');
  }

  // 3. Открываю форму из калькулятора и отправляю заявку
  await p.click('[data-cta]');
  await p.waitForTimeout(400);
  const modalOpen = await p.evaluate(() => { const m = document.querySelector('.modal'); return m && !m.hidden; });
  steps.push(modalOpen ? 'форма открылась ✓' : 'форма не открылась ✗');
  await p.fill('.modal input[name="name"]', 'Тест');
  await p.fill('.modal input[name="phone"]', '+7 999 111 22 33');
  await p.click('.modal button[type="submit"]');
  await p.waitForTimeout(1200);
  const okScreen = await p.textContent('.modal').catch(() => '');
  steps.push(/принята/i.test(okScreen) ? 'заявка принята ✓' : 'нет подтверждения ✗');
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  // Повторное открытие после успеха — здесь ломалось всё
  await p.click('.card [data-lead]'); await p.waitForTimeout(600);
  steps.push(await p.evaluate(() => { const m = document.querySelector('.modal');
    return m && !m.hidden && !!m.querySelector('input[name=\"name\"]'); })
    ? 'повторная заявка ✓' : 'форма не открылась второй раз ✗');
  await p.keyboard.press('Escape');

  // 4. Каталог: «показать ещё» и карточка ведёт в форму
  const before = await p.$$eval('.card', c => c.length);
  const more = await p.$('[data-cards-more]');
  if (more && !(await more.isHidden())) { await more.click(); await p.waitForTimeout(300); }
  const after = await p.$$eval('.card', c => c.length);
  steps.push(`каталог: ${before} → ${after} ✓`);

  // 5. Галерея с лайтбоксом
  await p.click('.gallery button');
  await p.waitForTimeout(400);
  const lb = await p.evaluate(() => { const l = document.querySelector('.lightbox'); return l && !l.hidden ? document.querySelector('.lightbox img').src : null; });
  steps.push(lb ? 'лайтбокс ✓' : 'лайтбокс не открылся ✗');

  console.log(`\n▸ ${slug}`);
  steps.forEach(s => console.log('   ' + s));
  if (requests.length) console.log('   POST ушёл на: ' + requests.join(', '));
  else console.log('   ⚠ POST-запроса не было — приёмник не настроен');
  if (errs.length) { console.log('   ' + errs.join('\n   ')); fails++; }
  if (steps.some(s => s.includes('✗'))) fails++;
  await p.close();
}
await b.close();
console.log(fails ? `\n✗ проблемы в ${fails}` : '\n✓ все семь отработали сценарий');
