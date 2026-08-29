/**
 * ЧЕК-ЛИСТ ТРЕБОВАНИЙ ЗАКАЗЧИКА
 * Каждая строка — конкретная правка, которую просили. Проверяется
 * фактом в живом браузере, а не памятью.
 */
import { chromium } from 'playwright';
const SLUGS = ['barbekyu-kompleksy','kaminy','izraztsy','pechi-kaminy','bannye-portaly','russkie-pechi','otopitelnye-pechi'];
const b = await chromium.launch({ channel: 'chrome' });
const fails = [];

for (const slug of SLUGS) {
  const bad = [];
  const check = (ok, name) => { if (!ok) bad.push(name); };

  // ── ДЕСКТОП ────────────────────────────────────────────────────────
  const d = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  const jsErr = [];
  d.on('pageerror', e => jsErr.push(e.message));
  await d.goto(`http://localhost:8099/${slug}/`, { waitUntil: 'networkidle' });
  await d.waitForTimeout(400);

  const r1 = await d.evaluate(() => {
    const q = s => document.querySelector(s);
    const qa = s => [...document.querySelectorAll(s)];
    const dockOrder = qa('.msgdock__btn').map(a => a.className.match(/--(\w+)/)?.[1]);
    const contactsOrder = qa('.contacts__msg a').map(a =>
      a.dataset.max !== undefined ? 'max' : a.dataset.tg !== undefined ? 'tg' : 'wa');
    const barOrder = qa('.mobilebar [data-bar-msg]').map(a =>
      a.dataset.max !== undefined ? 'max' : a.dataset.tg !== undefined ? 'tg' : 'wa');
    return {
      dockOrder, contactsOrder, barOrder,
      calcLight: getComputedStyle(q('.calc')).backgroundColor,
      calcHasSum: !!q('[data-sum]'),
      calcSteps: qa('.calc__field .calc__label i').length,
      cardCta: q('.card__foot .btn')?.textContent.trim(),
      brandSpaced: document.title.includes('Ceramica Decor'),
      maxLogoReal: !!q('.msgdock__btn--max svg linearGradient, .header__max svg linearGradient'),
      galleryUniq: new Set(qa('.gallery button img').map(i => i.src.split('/').pop().split('-')[0])).size,
      galleryTotal: qa('.gallery button').length,
      whyImgFull: getComputedStyle(q('.why__media img') || document.body).objectFit,
      heroSubWidth: q('.hero__sub') ? getComputedStyle(q('.hero__sub')).maxWidth : '',
      uspGrid: q('.hero__usp') ? getComputedStyle(q('.hero__usp')).display : '',
    };
  });

  check(JSON.stringify(r1.dockOrder) === '["max","tg","wa"]', 'док: порядок не MAX→TG→WA (' + r1.dockOrder + ')');
  check(JSON.stringify(r1.contactsOrder) === '["max","tg","wa"]', 'контакты: порядок не MAX→TG→WA (' + r1.contactsOrder + ')');
  check(JSON.stringify(r1.barOrder) === '["max","tg","wa"]', 'панель: порядок не MAX→TG→WA (' + r1.barOrder + ')');
  check(r1.calcLight === 'rgb(242, 238, 232)', 'калькулятор не светлый (' + r1.calcLight + ')');
  check(!r1.calcHasSum, 'в калькуляторе осталась сумма');
  check(r1.calcSteps <= 2, 'в калькуляторе больше двух нумерованных шагов: ' + r1.calcSteps);
  check(r1.cardCta === 'Рассчитать такой же', 'кнопка карточки: ' + r1.cardCta);
  check(r1.brandSpaced, 'в title нет пробела в «Ceramica Decor»');
  check(r1.maxLogoReal, 'знак MAX не настоящий (нет градиента)');
  check(r1.galleryUniq === r1.galleryTotal, `в галерее повторы объектов: ${r1.galleryUniq} из ${r1.galleryTotal}`);
  check(r1.uspGrid === 'grid', 'преимущества не сеткой');
  check(!jsErr.length, 'JS-ошибки: ' + jsErr.slice(0,2).join('; '));
  await d.close();

  // ── МОБИЛЬНЫЙ ──────────────────────────────────────────────────────
  const m = await b.newPage({ viewport: { width: 390, height: 844 } });
  await m.goto(`http://localhost:8099/${slug}/`, { waitUntil: 'networkidle' });
  await m.evaluate(() => {
    const mx = document.querySelector('.header__max');
    if (mx) { mx.hidden = false; mx.href = '#'; }
  });
  await m.waitForTimeout(400);

  const r2 = await m.evaluate(() => {
    const q = s => document.querySelector(s);
    const qa = s => [...document.querySelectorAll(s)];
    // порядок элементов в шапке слева направо
    const right = qa('.header__right > *').filter(e => getComputedStyle(e).display !== 'none')
      .map(e => e.className.includes('header__max') ? 'max'
        : e.className.includes('burger') ? 'burger'
        : e.className.includes('btn') ? 'cta' : 'other');
    // сколько строк занимает каждый ряд фильтров
    const rows = qa('.filters').map(f =>
      new Set(qa('.chip').filter(c => c.closest('.filters') === f && !c.hidden)
        .map(c => Math.round(c.getBoundingClientRect().top))).size);
    // переносы в калькуляторе: название модуля в одну строку?
    const names = qa('.calc-opt__name');
    const wrapped = names.filter(n => n.getBoundingClientRect().height > 26).length;
    return {
      headerRight: right,
      burgerBorder: q('.burger') ? getComputedStyle(q('.burger')).borderTopWidth : '',
      maxLabel: q('.header__max i')?.textContent.trim(),
      logoName: q('.logo__text b') ? getComputedStyle(q('.logo__text b')).fontSize : '',
      logoVisible: q('.logo__text') ? getComputedStyle(q('.logo__text')).display !== 'none' : false,
      filterRows: rows,
      calcCols: q('.calc-opts--grid') ? getComputedStyle(q('.calc-opts--grid')).gridTemplateColumns.split(' ').length : 1,
      wrappedNames: wrapped,
      barBorder: q('.mobilebar a') ? getComputedStyle(q('.mobilebar a')).borderTopWidth : '',
      barCount: qa('.mobilebar a, .mobilebar button').filter(e => !e.hidden).length,
    };
  });

  check(JSON.stringify(r2.headerRight) === '["max","cta","burger"]', 'шапка: порядок ' + r2.headerRight);
  check(r2.burgerBorder === '0px', 'у бургера осталась обводка');
  check(r2.maxLabel === 'MAX', 'нет подписи MAX под знаком');
  check(parseFloat(r2.logoName) >= 16, 'название бренда мелкое: ' + r2.logoName);
  check(r2.logoVisible, 'название бренда скрыто на телефоне');
  check(r2.filterRows.every(n => n <= 2), 'фильтры больше двух строк: ' + r2.filterRows);
  check(r2.calcCols === 1, 'в калькуляторе не одна колонка на телефоне');
  check(r2.wrappedNames === 0, 'названия модулей переносятся: ' + r2.wrappedNames);
  check(r2.barBorder !== '0px', 'у кнопок нижней панели нет обводки');
  check(r2.barCount === 3, 'в нижней панели не три кнопки: ' + r2.barCount);
  await m.close();

  if (bad.length) { fails.push([slug, bad]); console.log(`✗ ${slug}`); bad.forEach(x => console.log('   ✗', x)); }
  else console.log(`✓ ${slug}`);
}
await b.close();
console.log(fails.length ? `\n✗ проблемы в ${fails.length} из ${SLUGS.length}` : `\n✓ Все ${SLUGS.length} соответствуют требованиям`);
if (fails.length) process.exitCode = 1;
