#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
СБОРЩИК ФОТОГРАФИЙ С ОСНОВНОГО САЙТА
--------------------------------------------------------------------------
В выгрузке лежали превью `/userdata/product/preview/XX/YY/hash_1200.jpg` —
на них стоит ватермарка «CERAMICA DECOR» и они добиты белым до квадрата.
Оригиналы на том же сайте лежат по адресу без `preview` и без суффикса
размера: `/userdata/product/XX/YY/hash.jpg` — чистые, до 3500×3500.

Скрипт обходит страницы объектов из catalog.json, вытаскивает хеши
изображений, качает оригиналы и кладёт их в <slug>/img/NN.webp.

Запуск:  python3 tools/fetch_photos.py [slug ...]
Без аргументов обходит все направления.
"""
import io, json, os, re, subprocess, sys, tempfile, time
import urllib.request, urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://ceramicadecor.ru'
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36'}
# hash в пути превью: /userdata/product/preview/48/bc/48bc…bc_1200.jpg
RE_PREVIEW = re.compile(r'/userdata/product/preview/([0-9a-f]{2})/([0-9a-f]{2})/([0-9a-f]{32})_\d+\.(jpg|jpeg|png)', re.I)


def get(url, timeout=60):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def page_photos(url):
    """Хеши всех фотографий объекта в порядке появления на странице."""
    try:
        html = get(url).decode('utf-8', 'replace')
    except Exception as e:
        print('    ! страница недоступна: %s' % e)
        return []
    seen, out = set(), []
    for m in RE_PREVIEW.finditer(html):
        h = m.group(3)
        if h in seen:
            continue
        seen.add(h)
        # расширение оригинала не всегда совпадает с расширением превью
        base = '%s/userdata/product/%s/%s/%s' % (SITE, m.group(1), m.group(2), h)
        out.append(base)
    return out


def fetch_original(base, timeout=120):
    """Оригинал лежит без папки preview и без суффикса размера, но
    расширение приходится подбирать: у части товаров .jpeg, у части .png."""
    for ext in ('.jpg', '.jpeg', '.png', '.webp'):
        try:
            return get(base + ext, timeout=timeout)
        except urllib.error.HTTPError as e:
            if e.code != 404:
                raise
        except Exception:
            raise
    raise urllib.error.HTTPError(base, 404, 'оригинал не найден ни в одном формате', None, None)


def to_webp(raw, dst, width=1400, quality=82):
    """Пережимает оригинал в webp, сохраняя пропорции кадра."""
    src = tempfile.mktemp(suffix='.jpg')
    io.open(src, 'wb').write(raw)
    try:
        cmd = ['cwebp', '-quiet', '-q', str(quality), '-resize', str(width), '0', src, '-o', dst]
        subprocess.run(cmd, check=True)
        return True
    except subprocess.CalledProcessError:
        return False
    finally:
        os.unlink(src)


def main(slugs):
    catalog = json.load(io.open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))
    for slug in slugs:
        items = catalog[slug]['items']
        outdir = os.path.join(ROOT, slug, 'img')
        os.makedirs(outdir, exist_ok=True)
        print('\n▸ %s — объектов %d' % (slug, len(items)))
        got = 0
        for i, it in enumerate(items, 1):
            url = it.get('url')
            dst = os.path.join(outdir, '%02d.webp' % i)
            if not url:
                print('  %02d  нет ссылки на объект — оставляю как было' % i)
                continue
            photos = page_photos(url)
            if not photos:
                print('  %02d  фото на странице не найдены' % i)
                continue
            # первый кадр страницы — главный, он и идёт в карточку
            try:
                raw = fetch_original(photos[0])
            except Exception as e:
                print('  %02d  не скачалось: %s' % (i, e))
                continue
            if to_webp(raw, dst):
                got += 1
                print('  %02d  ✓ %d КБ → %s' % (i, len(raw) // 1024, os.path.basename(dst)))
            time.sleep(0.3)   # не долбим чужой сайт
        print('  итого заменено: %d из %d' % (got, len(items)))


if __name__ == '__main__':
    catalog = json.load(io.open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))
    args = sys.argv[1:] or list(catalog.keys())
    main(args)
