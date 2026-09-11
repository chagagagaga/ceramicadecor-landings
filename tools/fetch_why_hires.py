#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
КАДР БЛОКА «ПОЧЕМУ КЕРАМИКА» В ВЫСОКОМ РАЗРЕШЕНИИ
--------------------------------------------------------------------------
Полоса блока тянется во всю ширину контейнера — на широком мониторе это
под 1800 CSS-пикселей, а кадры объектов хранятся в 1600 px. Кадр
растягивался и мылил: это единственное место на странице, где картинка
крупнее собственного размера.

Скачиваем оригинал этого конкретного кадра с основного сайта (там лежат
файлы до 3500 px) и кладём в assets/img/why/<slug>.webp шириной 2400 px.
Остальные кадры трогать незачем: они нигде не показываются крупнее 1600.

Запуск:  python3 tools/fetch_why_hires.py
"""
import io, json, os, re, subprocess, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://ceramicadecor.ru'
WIDTH = 2000
QUALITY = 74
OUT = os.path.join(ROOT, 'assets', 'img', 'why')

RE_PREVIEW = re.compile(
    r'/userdata/product/preview/([0-9a-z]{2})/([0-9a-z]{2})/([0-9a-z]{8,40})_\d+\.(jpg|jpeg|png|webp)', re.I)


def get(url, dst=None):
    cmd = ['curl', '-sSL', '--max-time', '60', url]
    if dst:
        cmd += ['-o', dst]
    r = subprocess.run(cmd, capture_output=True)
    return r.stdout if not dst else (r.returncode == 0 and os.path.getsize(dst) > 0)


def originals(page_url):
    """Адреса оригиналов в порядке появления на странице объекта."""
    html = get(page_url).decode('utf-8', 'ignore')
    out = []
    for m in RE_PREVIEW.finditer(html):
        u = '%s/userdata/product/%s/%s/%s.%s' % (SITE, m.group(1), m.group(2), m.group(3), m.group(4))
        if u not in out:
            out.append(u)
    return out


def untrim(src, dst):
    """Снимаем белую подложку и уменьшаем до рабочей ширины.

    Оригиналы на сайте добиты белым до квадрата — у части кадров это
    сотни пикселей сверху и снизу. Локальные копии от неё уже очищены,
    и без этого шага полоса блока показывала бы белые поля.
    Порог 246, а не 255: подложка не идеально белая, в ней попадаются
    244–250. Дополнительный срез в два пикселя убирает кромку, которую
    оставляет ланцош при уменьшении.
    """
    im = Image.open(src).convert('RGB')
    w, h = im.size
    px = im.load()

    def ink_row(y):
        step = max(1, w // 400)
        return any(min(px[x, y]) < 246 for x in range(0, w, step))

    def ink_col(x):
        step = max(1, h // 400)
        return any(min(px[x, y]) < 246 for y in range(0, h, step))

    top = next((y for y in range(h) if ink_row(y)), 0)
    bot = next((y for y in range(h - 1, -1, -1) if ink_row(y)), h - 1)
    left = next((x for x in range(w) if ink_col(x)), 0)
    right = next((x for x in range(w - 1, -1, -1) if ink_col(x)), w - 1)
    im = im.crop((left, top, right + 1, bot + 1))

    im.thumbnail((WIDTH + 2, WIDTH + 2), Image.LANCZOS)
    w, h = im.size
    im = im.crop((2, 2, w - 2, h - 2))
    im.save(dst, 'WEBP', quality=QUALITY, method=6)


def main():
    catalog = json.load(io.open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))
    os.makedirs(OUT, exist_ok=True)
    for slug in sys.argv[1:] or list(catalog):
        data = io.open(os.path.join(ROOT, slug, 'data.js'), encoding='utf-8').read()
        m = re.search(r'"media":\s*"img/([0-9]+)\.webp"', data)
        if not m:
            print('  %-22s кадр блока не найден' % slug)
            continue
        pos = int(m.group(1))
        item = catalog[slug]['items'][pos - 1]
        urls = originals(item.get('url') or '')
        if not urls:
            print('  %-22s оригиналы не отдались: %s' % (slug, item.get('url')))
            continue
        tmp = os.path.join(OUT, '_tmp.jpg')
        if not get(urls[0], tmp):
            print('  %-22s не скачался %s' % (slug, urls[0]))
            continue
        dst = os.path.join(OUT, slug + '.webp')
        untrim(tmp, dst)
        os.remove(tmp)
        print('  %-22s %s  %d КБ' % (slug, os.path.basename(dst), os.path.getsize(dst) // 1024))


if __name__ == '__main__':
    main()
