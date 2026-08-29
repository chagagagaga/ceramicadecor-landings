import { chromium } from 'playwright';
const SITES = [
  ['Первый Луч', 'http://localhost:8098/index.html'],
  ...['barbekyu-kompleksy','kaminy','izraztsy','pechi-kaminy','bannye-portaly','russkie-pechi','otopitelnye-pechi']
     .map(s => [s, `http://localhost:8099/${s}/`]),
];
const WIDTHS = [360, 390, 414];
const b = await chromium.launch({ channel: 'chrome' });
let bad = 0;

for (const [name, url] of SITES) {
  const problems = [];
  for (const w of WIDTHS) {
    const p = await b.newPage({ viewport: { width: w, height: 844 }, deviceScaleFactor: 2 });
    const js = [];
    p.on('pageerror', e => js.push(e.message));
    await p.goto(url, { waitUntil: 'networkidle' });
    await p.waitForTimeout(400);

    // раскрыть всё, что прячется
    for (const sel of ['[data-cards-more]','[data-works-more]','[data-stoves-more]','.faq__more','[data-more]']) {
      const el = await p.$(sel); if (el) await el.click().catch(()=>{});
    }
    await p.waitForTimeout(300);

    const r = await p.evaluate(() => {
      const out = { h: 0, over: [], cut: [], tiny: [], overlap: [] };
      out.h = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      const vw = document.documentElement.clientWidth;
      const lbl = e => e.tagName.toLowerCase() + (typeof e.className === 'string' && e.className ? '.' + e.className.trim().split(/\s+/)[0] : '')
        + ' «' + (e.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 26) + '»';
      for (const e of document.querySelectorAll('body *')) {
        const cs = getComputedStyle(e);
        if (cs.display === 'none' || cs.visibility === 'hidden') continue;
        if (!e.offsetParent && cs.position !== 'fixed') continue;
        const r = e.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        if (r.right > vw + 1) out.over.push(lbl(e) + ` +${Math.round(r.right - vw)}px`);
        if (!e.children.length && e.scrollWidth > e.clientWidth + 2 && cs.overflow !== 'visible' && cs.overflowX !== 'auto')
          out.cut.push(lbl(e));
        if ((e.tagName === 'BUTTON' || e.tagName === 'A') && (r.height < 32 || r.width < 32)) out.tiny.push(lbl(e) + ` ${Math.round(r.width)}×${Math.round(r.height)}`);
      }
      // нижняя панель не должна перекрывать последний блок контента
      const bar = document.querySelector('[data-mobilebar]');
      if (bar && bar.getBoundingClientRect().height > 0) {
        const pb = parseFloat(getComputedStyle(document.body).paddingBottom) || 0;
        if (pb < bar.getBoundingClientRect().height - 6) out.overlap.push('панель перекрывает контент');
      }
      return out;
    });

    if (r.h > 1) problems.push(`${w}: горизонтальный скролл ${r.h}px`);
    r.over.slice(0,2).forEach(x => problems.push(`${w}: за край — ${x}`));
    r.cut.slice(0,2).forEach(x => problems.push(`${w}: обрезано — ${x}`));
    r.tiny.slice(0,2).forEach(x => problems.push(`${w}: мелкая цель — ${x}`));
    r.overlap.forEach(x => problems.push(`${w}: ${x}`));
    js.slice(0,1).forEach(x => problems.push(`${w}: JS — ${x}`));
    await p.close();
  }
  if (problems.length) { bad++; console.log(`✗ ${name}`); problems.forEach(x => console.log('   ✗', x)); }
  else console.log(`✓ ${name}`);
}
await b.close();
console.log(bad ? `\n✗ проблемы в ${bad} из ${SITES.length}` : `\n✓ Все ${SITES.length} чисты на 360, 390 и 414`);
