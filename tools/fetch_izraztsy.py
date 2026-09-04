#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
КАТАЛОГ ИЗРАЗЦОВ С ОСНОВНОГО САЙТА
--------------------------------------------------------------------------
Тянет вкладку «Образцы» (ceramicadecor.ru/izrazcy/?opt_125=225) в том же
порядке, в каком она показана на сайте, и складывает результат в
catalog.json → izraztsy.

Зачем отдельный скрипт, а не общий fetch_photos.py: у изразцов карточка
товарная, а не объектная. Нужны артикул, коллекция, типоразмер и цена за
штуку — по ним на посадочной работают фильтры, повторяющие фильтры сайта.

Про картинки. На сайте один и тот же кадр лежит в двух видах:
  · превью  /userdata/product/preview/XX/YY/hash_500_webp.webp
    уже квадратное и с белыми полями, но 394 px и с водяным знаком;
  · оригинал /userdata/product/XX/YY/hash.jpg
    чистый и крупный, но обрезан вплотную к плитке.
Берём оригинал и добиваем до квадрата сами. Фон канвы берём не белый, а
пиксель из угла самого снимка: студийный фон там светло-серый, и на чистом
белом был бы виден шов.

Запуск:  python3 tools/fetch_izraztsy.py [страниц]   (по умолчанию 5 ≈ 105 позиций)
"""
import io, json, os, re, sys, time
import urllib.request, urllib.error
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://ceramicadecor.ru'
LIST = SITE + '/izrazcy/?opt_125=225&order=sort_weight&page=%d'
OUT = os.path.join(ROOT, 'izraztsy', 'img')
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36'}

EXTRA_FRAMES = 2      # сколько дополнительных кадров тянуть на позицию
SIDE = 900            # сторона готового квадрата, px
MARGIN = 0.09         # поле вокруг плитки, доля от стороны

RE_CARD = re.compile(r'<div class="izrazcy-product"[^>]*data-detail-url="([^"]+)"([\s\S]*?)(?=<div class="izrazcy-product"|<nav class="paging)', re.I)
RE_PREVIEW = re.compile(r'/userdata/product/preview/([0-9a-z]{2})/([0-9a-z]{2})/([0-9a-z]{8,40})_\d+', re.I)
RE_NAME = re.compile(r'izrazcy-product__name">([^<]+)<')
RE_COLL = re.compile(r'izrazcy-product__collection">([^<]+)<')
RE_ART = re.compile(r'izrazcy-product__art">\s*Арт\.\s*([^<]+)<')
RE_PRICE = re.compile(r'izrazcy-product__price">\s*([\d\s ]+)')
RE_SIZE = re.compile(r'Типоразмер[\s\S]{0,120}?(\d{3}\s*[xх]\s*\d{3})', re.I)


def get(url, timeout=60):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout) as r:
        return r.read()


def text(url):
    return get(url).decode('utf-8', 'replace')


def listing(pages):
    """Позиции вкладки «Образцы» в порядке сайта."""
    out = []
    for p in range(1, pages + 1):
        try:
            h = text(LIST % p)
        except Exception as e:
            print('  ! страница %d недоступна: %s' % (p, e))
            continue
        found = 0
        for url, body in RE_CARD.findall(h):
            m = RE_PREVIEW.search(body)
            name = RE_NAME.search(body)
            if not m or not name:
                continue
            price = RE_PRICE.search(body)
            out.append({
                'url': SITE + url,
                'hash': (m.group(1), m.group(2), m.group(3)),
                'title': name.group(1).strip(),
                'collection': (RE_COLL.search(body).group(1).strip()
                               .replace('Коллекция ', '') if RE_COLL.search(body) else ''),
                'article': RE_ART.search(body).group(1).strip() if RE_ART.search(body) else '',
                'price': int(re.sub(r'\D', '', price.group(1))) if price else 0,
            })
            found += 1
        print('  страница %d — позиций %d' % (p, found))
        time.sleep(0.3)
    return out


def original(base):
    """Оригинал лежит без папки preview и без суффикса размера, расширение
    приходится подбирать: у части товаров .jpeg, у части .png."""
    for ext in ('.jpg', '.jpeg', '.png', '.webp'):
        try:
            return get(base + ext)
        except urllib.error.HTTPError as e:
            if e.code != 404:
                raise
    return None


def square(raw, dst):
    """Добивает кадр до квадрата фоном из его же угла и пишет webp."""
    im = Image.open(io.BytesIO(raw)).convert('RGB')
    w, h = im.size
    # Цвет подложки — усреднение четырёх углов: студийный фон светло-серый,
    # на чистом белом был бы виден стык.
    px = im.load()
    corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    bg = tuple(sum(c[i] for c in corners) // 4 for i in range(3))
    side = int(max(w, h) * (1 + MARGIN * 2))
    canvas = Image.new('RGB', (side, side), bg)
    canvas.paste(im, ((side - w) // 2, (side - h) // 2))
    canvas = canvas.resize((SIDE, SIDE), Image.LANCZOS)
    canvas.save(dst, 'WEBP', quality=86, method=5)


def frames(url):
    """Хеши кадров со страницы товара, в порядке появления."""
    try:
        h = text(url)
    except Exception:
        return [], ''
    seen, out = set(), []
    for m in RE_PREVIEW.finditer(h):
        k = m.group(3)
        if k not in seen:
            seen.add(k)
            out.append((m.group(1), m.group(2), k))
    size = RE_SIZE.search(h)
    return out, (size.group(1).replace(' ', '').replace('х', 'x') if size else '')


def last_page(html):
    nav = re.search(r'<nav class="paging[\s\S]{0,3000}?</nav>', html)
    if not nav:
        return 1
    nums = [int(x) for x in re.findall(r'page=(\d+)', nav.group(0))]
    return max(nums) if nums else 1


def articles_in(param, label):
    """Артикулы всех товаров под одним значением фильтра сайта.

    Принадлежность к «Типу» и «Поверхности» из выгрузки не вывести: в адресе
    товара лежит коллекция (голландия, прованс, ярославские), а не тип, а по
    названию рельеф угадывается через раз. Поэтому спрашиваем сам сайт —
    открываем каталог с этим фильтром и забираем артикулы. Так значения
    совпадают с сайтом ровно, без эвристик.
    """
    url = SITE + '/izrazcy/?opt_125=225&' + param + '&order=sort_weight&page=%d'
    try:
        first = text(url % 1)
    except Exception as e:
        print('  ! фильтр %s недоступен: %s' % (label, e))
        return set()
    pages = last_page(first)
    got = set(RE_ART.findall(first))
    for p in range(2, pages + 1):
        try:
            got |= set(RE_ART.findall(text(url % p)))
        except Exception:
            break
        time.sleep(0.2)
    print('  %-22s страниц %2d, артикулов %d' % (label, pages, len(got)))
    return {a.strip() for a in got}


def main(pages):
    print('▸ вкладка «Образцы», страниц %d' % pages)
    items = listing(pages)
    print('  собрано позиций: %d' % len(items))

    print('\n▸ принадлежность к фильтрам сайта')
    kinds = {}
    for param, code, label in (('opt_152=254', 'painted', 'Худож. роспись'),
                               ('opt_152=255', 'colored', 'Цветная роспись'),
                               ('opt_152=275', 'plain',   'Однотонные')):
        for a in articles_in(param, label):
            kinds[a] = code
    smooth = articles_in('opt_126=155', 'Гладкие')
    relief = articles_in('opt_126=156', 'Рельефные')
    print()

    os.makedirs(OUT, exist_ok=True)

    # Старые кадры убираем: нумерация меняется, иначе к новой позиции
    # прилипнет чужой снимок от прежнего каталога.
    for f in os.listdir(OUT):
        if re.fullmatch(r'\d{2,3}(-\d)?\.webp', f):
            os.unlink(os.path.join(OUT, f))

    out = []
    for i, it in enumerate(items, 1):
        shots, size = frames(it['url'])
        if not shots:
            shots = [it['hash']]
        saved = []
        for k, (a, b, hsh) in enumerate(shots[:1 + EXTRA_FRAMES], 1):
            name = '%03d.webp' % i if k == 1 else '%03d-%d.webp' % (i, k)
            raw = original('%s/userdata/product/%s/%s/%s' % (SITE, a, b, hsh))
            if not raw:
                continue
            try:
                square(raw, os.path.join(OUT, name))
                saved.append('img/' + name)
            except Exception as e:
                print('  %03d  кадр %d не обработался: %s' % (i, k, e))
            time.sleep(0.15)
        if not saved:
            print('  %03d  ✗ без фото — пропускаю' % i)
            continue
        out.append({
            'title': it['title'],
            'collection': it['collection'],
            'desc': ('Арт. ' + it['article']) if it['article'] else '',
            'price_ceramic': it['price'],
            'price_turnkey': None,
            'url': it['url'],
            'img': saved[0],
            'photos': saved,
            'size': size or '',
            'surface': ('smooth' if it['article'] in smooth
                        else 'relief' if it['article'] in relief else ''),
            'kind': kinds.get(it['article'], ''),
            'row': i,
        })
        print('  %03d  ✓ %s  %s  %s ₽  кадров %d'
              % (i, it['title'][:44], size or '—', it['price'], len(saved)))

    cat = json.load(io.open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))
    cat['izraztsy']['items'] = out
    io.open(os.path.join(ROOT, 'catalog.json'), 'w', encoding='utf-8').write(
        json.dumps(cat, ensure_ascii=False, indent=1))
    print('\n  записано в catalog.json: %d позиций' % len(out))
    for f, lab in (('size', 'типоразмер'), ('surface', 'поверхность'), ('kind', 'тип')):
        vals = {}
        for o in out:
            vals[o[f]] = vals.get(o[f], 0) + 1
        print('  %-13s %s' % (lab, vals))


if __name__ == '__main__':
    main(int(sys.argv[1]) if len(sys.argv) > 1 else 5)
