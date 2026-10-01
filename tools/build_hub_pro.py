#!/usr/bin/env python3
"""Главная ceramicadecor.pro (01.10.2026): общая страница с направлениями,
как на ceramicadecor.kz/.by. Ссылка из bio Instagram/Facebook ведёт сюда.
Метки utm_* из адреса переносятся во все ссылки на направления: атрибуция
живёт на посадочных, и без этого визит из bio терял бы источник.
Сборка: python3 tools/build_hub_pro.py → hub/index.html (заливается в корень .pro)."""
import json, os, html
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIRS = [  # папка, название, текст, картинка
    ('kaminy', 'Камины', 'Изразцовый камин под ваш проём и топку. Греет часами после протопки.', 'assets/img/hero/kaminy-1200.webp'),
    ('barbekyu-kompleksy', 'Барбекю комплексы', 'Мангал, казан, коптильня, тандыр — в изразцах ручной формовки.', 'barbekyu-kompleksy/img/m/03.webp'),
    ('pechi-kaminy', 'Печи-камины из наличия', 'Заводские модели Дорф, Ритм и Флора — цена известна сразу.', 'pechi-kaminy/img/m/01.webp'),
    ('izraztsy', 'Изразцы', 'Более 300 позиций: рельеф, роспись, однотонная глазурь.', 'izraztsy/img/m/002.webp'),
    ('russkie-pechi', 'Русские печи', 'Печь с лежанкой и плитой в изразцовой облицовке.', 'russkie-pechi/img/m/01.webp'),
    ('otopitelnye-pechi', 'Отопительные печи', 'Тёплая печь в изразцах для дома и дачи.', 'otopitelnye-pechi/img/m/01.webp'),
    ('bannye-portaly', 'Порталы для банных печей', 'Изразцовый портал для печи с выносной топкой.', 'bannye-portaly/img/m/01.webp'),
]
def data(slug):
    s = open(os.path.join(ROOT, slug, 'data.js'), encoding='utf-8').read()
    return json.loads(s[s.index('{'):s.rindex('}') + 1])
def money(v): return '{:,}'.format(int(v)).replace(',', ' ') + ' ₽'
B = data('kaminy')['brand']
tel = '8' + ''.join(ch for ch in B['phone'] if ch.isdigit())[1:]
cards = ''
for slug, name, text, img in DIRS:
    d = data(slug); ps = [c['p1'] for c in d['catalog'] if c.get('p1')]
    cards += ('<a class="dir" href="%s/" data-go><span class="dir__media"><img src="%s" alt="%s" loading="lazy" decoding="async" width="600" height="600"></span>'
              '<span class="dir__body"><span class="dir__name">%s</span><span class="dir__text">%s</span>'
              '<span class="dir__price">от %s</span><span class="dir__more">Смотреть каталог →</span></span></a>\n') % (
        slug, img, html.escape(name), html.escape(name), html.escape(text), money(min(ps)))
page = '''<!DOCTYPE html>
<html lang="ru"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Ceramica Decor — изразцовые камины, барбекю и печи по России</title>
<meta name="description" content="Изразцовые камины, барбекю комплексы, печи-камины и изразцы ручной формовки. Бесплатный 3D-проект за 2–3 дня, доставка и монтаж по России.">
<link rel="canonical" href="https://ceramicadecor.pro/">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/oswald-cyrillic.woff2" crossorigin>
<link rel="stylesheet" href="assets/css/system.css?v=5">
<style>
body{margin:0;background:var(--bg);color:var(--white);font-family:var(--font-body,'Golos Text',system-ui,sans-serif)}
.w{max-width:1200px;margin:0 auto;padding:0 20px}
.top{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 0}
.logo{display:flex;align-items:center;gap:10px;color:var(--white);text-decoration:none;font-family:var(--font-heading,'Oswald',sans-serif);font-size:1.25rem;letter-spacing:.04em}.logo svg{height:36px;width:auto}
.top a.ph{color:var(--white);text-decoration:none;font-weight:600;white-space:nowrap}
.hero{position:relative;min-height:62vh;display:flex;align-items:flex-end;overflow:hidden}
.hero picture,.hero picture img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hero:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,16,13,.15),rgba(20,16,13,.92))}
.hero .w{position:relative;z-index:1;padding-bottom:40px}
.badge{display:inline-block;font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px}
h1{font-family:var(--font-heading,'Oswald',sans-serif);font-weight:500;text-transform:uppercase;font-size:clamp(2rem,1.2rem + 3.6vw,3.6rem);line-height:1.05;margin:0 0 14px}
h1 em{font-style:normal;color:var(--primary)}
.sub{color:var(--text-muted);font-size:1.08rem;max-width:620px;line-height:1.5;margin:0 0 22px}
.btns{display:flex;flex-wrap:wrap;gap:10px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:15px 22px;font-weight:600;text-decoration:none;border:0;cursor:pointer;font-size:1rem}
.btn--p{background:var(--primary);color:#fff}.btn--max{background:#25D366;color:#fff}.btn--g{background:var(--bg-accent);color:var(--white)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:var(--seam);margin:2px 0}
.stats div{background:var(--bg-lighter);padding:18px}.stats b{display:block;font-family:var(--font-heading,'Oswald',sans-serif);font-size:1.8rem;font-weight:500}.stats span{color:var(--text-muted);font-size:.9rem;line-height:1.3;display:block}
h2{font-family:var(--font-heading,'Oswald',sans-serif);font-weight:500;text-transform:uppercase;font-size:clamp(1.6rem,1.2rem + 1.6vw,2.4rem);margin:44px 0 18px}
.dirs{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2px;background:var(--seam)}
.dir{display:flex;flex-direction:column;background:var(--bg-lighter);color:var(--white);text-decoration:none}
.dir__media{aspect-ratio:1/1;overflow:hidden;display:block}.dir__media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s}
.dir:hover .dir__media img{transform:scale(1.03)}
.dir__body{display:flex;flex-direction:column;gap:8px;padding:18px 20px 22px}
.dir__name{font-family:var(--font-heading,'Oswald',sans-serif);font-size:1.5rem;text-transform:uppercase}
.dir__text{color:var(--text-muted);line-height:1.5}.dir__price{font-family:var(--font-heading,'Oswald',sans-serif);font-size:1.4rem;color:var(--primary)}
.dir__more{font-size:.85rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted)}
.foot{padding:40px 0 60px;color:var(--text-muted);font-size:.9rem;line-height:1.7}.foot a{color:var(--white)}
@media(max-width:600px){.stats b{font-size:1.35rem}.btn{flex:1 1 100%}}
</style></head><body>
<header class="w top"><a class="logo" href="./" aria-label="Ceramica Decor">@LOGO@<span>CERAMICA DECOR</span></a><a class="ph" href="tel:@TEL@">@PHONE@</a></header>
<section class="hero"><picture><source media="(max-width:700px)" srcset="assets/img/hero/kaminy-760.webp"><img src="assets/img/hero/kaminy-1600.webp" alt="" fetchpriority="high"></picture>
<div class="w"><span class="badge">По всей России · доставка и монтаж</span>
<h1>Изразцовые камины, барбекю и&nbsp;печи <em>ручной формовки</em></h1>
<p class="sub">Собственное производство изразцов. Бесплатный 3D-проект и смета за 2–3 дня — выберите направление и посмотрите модели с ценами.</p>
<div class="btns"><a class="btn btn--p" href="#directions">Выбрать направление</a><a class="btn btn--max" href="@MAX@" target="_blank" rel="noopener">Написать в MAX</a><a class="btn btn--g" href="tel:@TEL@">Позвонить</a></div></div></section>
<div class="w"><div class="stats"><div><b>14 лет</b><span>на рынке</span></div><div><b>3000+</b><span>проектов</span></div><div><b>50 лет</b><span>гарантия на керамику</span></div></div>
<h2 id="directions">Направления</h2><div class="dirs">
@CARDS@</div>
<div class="foot">Ceramica Decor · @ADDR@ · <a href="tel:@TEL@">@PHONE@</a> · @WT@<br><a href="policy.html">Политика конфиденциальности</a></div></div>
<script>
/* utm и клики-метки из адреса — во все ссылки на направления */
(function(){var q=location.search;if(!q)return;document.querySelectorAll('[data-go]').forEach(function(a){a.href=a.getAttribute('href')+q;});})();
</script>
</body></html>'''
page = (page.replace('@CARDS@', cards).replace('@TEL@', '+7' + tel[1:]).replace('@LOGO@', open(os.path.join(ROOT, 'assets', 'logo.svg'), encoding='utf-8').read().split('?>')[-1].strip()).replace('@PHONE@', html.escape(B['phone']))
        .replace('@MAX@', B['maxUrl']).replace('@ADDR@', html.escape(B['address'])).replace('@WT@', html.escape(B['worktime'])))
os.makedirs(os.path.join(ROOT, 'hub'), exist_ok=True)
open(os.path.join(ROOT, 'hub', 'index.html'), 'w', encoding='utf-8').write(page)
print('hub/index.html ok')
