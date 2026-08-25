/**
 * Вёрстка всех семи посадочных в настоящем Chrome на пяти ширинах.
 * Нужен локальный сервер: python3 -m http.server 8099 в корне репозитория.
 */
import { chromium } from 'playwright';
const SLUGS = ['barbekyu-kompleksy','kaminy','izraztsy','pechi-kaminy','bannye-portaly','russkie-pechi','otopitelnye-pechi'];
const WIDTHS = [360, 390, 768, 1280, 1440];
const problems = [];
const browser = await chromium.launch({ channel: 'chrome' });

for (const slug of SLUGS) {
  let worst = { hScroll: 0, over: 0, cut: 0, tiny: 0, js: 0 };
  for (const w of WIDTHS) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    const jsErrors = [];
    page.on('pageerror', e => jsErrors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') jsErrors.push(m.text()); });
    await page.goto(`http://localhost:8099/${slug}/`, { waitUntil: 'networkidle' });
    for (const sel of ['[data-reveal]', '[data-cards-more]']) {
      const el = await page.$(sel); if (el) await el.click().catch(() => {});
    }
    await page.waitForTimeout(300);
    const res = await page.evaluate(() => {
      const out = { hScroll: document.documentElement.scrollWidth - document.documentElement.clientWidth, over: [], cut: [], tiny: [] };
      const vw = document.documentElement.clientWidth;
      const label = el => el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/)[0] : '') + ' «' + (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 30) + '»';
      for (const el of document.querySelectorAll('body *')) {
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden') continue;
        if (!el.offsetParent && cs.position !== 'fixed') continue;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        if (r.right > vw + 1) out.over.push(label(el) + ` (+${Math.round(r.right - vw)}px)`);
        if (!el.children.length && el.scrollWidth > el.clientWidth + 2 && cs.overflow !== 'visible' && cs.overflowX !== 'auto') out.cut.push(label(el));
        if ((el.tagName === 'BUTTON' || el.tagName === 'A') && (r.height < 32 || r.width < 32)) out.tiny.push(label(el) + ` ${Math.round(r.width)}×${Math.round(r.height)}`);
      }
      return out;
    });
    if (res.hScroll > 1) problems.push(`${slug} @${w}: горизонтальный скролл ${res.hScroll}px`);
    res.over.slice(0, 3).forEach(m => problems.push(`${slug} @${w}: за край — ${m}`));
    res.cut.slice(0, 3).forEach(m => problems.push(`${slug} @${w}: обрезано — ${m}`));
    res.tiny.slice(0, 3).forEach(m => problems.push(`${slug} @${w}: мелкая цель — ${m}`));
    jsErrors.slice(0, 2).forEach(m => problems.push(`${slug} @${w}: JS — ${m}`));
    worst = { hScroll: Math.max(worst.hScroll, res.hScroll), over: worst.over + res.over.length, cut: worst.cut + res.cut.length, tiny: worst.tiny + res.tiny.length, js: worst.js + jsErrors.length };
    await page.close();
  }
  console.log(`${worst.hScroll || worst.over || worst.cut || worst.tiny || worst.js ? '✗' : '✓'} ${slug}: скролл ${worst.hScroll}, за край ${worst.over}, обрезано ${worst.cut}, мелких ${worst.tiny}, JS ${worst.js}`);
}
await browser.close();
if (problems.length) { console.log('\nДЕТАЛИ:'); problems.slice(0, 40).forEach(p => console.log('  ✗', p)); process.exitCode = 1; }
else console.log('\n✓ Вёрстка чистая везде');
