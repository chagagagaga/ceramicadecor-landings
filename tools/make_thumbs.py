#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ПРЕВЬЮ ДЛЯ КАРТОЧЕК
--------------------------------------------------------------------------
Кадры объектов хранятся в 1600 px: столько нужно лайтбоксу, который
показывает фото во всю высоту экрана. Но карточке в сетке хватает 700 px,
а весит она при этом в шесть раз меньше.

Без разделения первый экран каталога тянул 2,7 МБ на девять карточек —
для посадочной под платный трафик это прямой убыток: человек уходит
раньше, чем увидит товар.

Кладём уменьшенные копии рядом, в подпапку s/. Путь получается из полного
заменой /img/ на /img/s/ — движок делает это на лету, никаких списков
в данных держать не нужно.

Запуск:  python3 tools/make_thumbs.py [slug ...]
"""
import os, re, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIDE = 700          # длинная сторона превью, px
QUALITY = 78

SLUGS = ['barbekyu-kompleksy', 'kaminy', 'izraztsy', 'pechi-kaminy',
         'bannye-portaly', 'russkie-pechi', 'otopitelnye-pechi']


def main(slugs):
    total = saved = skipped = 0
    for slug in slugs:
        src_dir = os.path.join(ROOT, slug, 'img')
        if not os.path.isdir(src_dir):
            continue
        out_dir = os.path.join(src_dir, 's')
        os.makedirs(out_dir, exist_ok=True)
        n = 0
        for f in sorted(os.listdir(src_dir)):
            if not f.endswith('.webp'):
                continue
            src = os.path.join(src_dir, f)
            dst = os.path.join(out_dir, f)
            total += 1
            # Не пересобираем то, что уже свежее исходника: повторный запуск
            # должен быть быстрым.
            if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
                skipped += 1
                continue
            try:
                im = Image.open(src).convert('RGB')
                im.thumbnail((SIDE, SIDE), Image.LANCZOS)
                im.save(dst, 'WEBP', quality=QUALITY, method=5)
                saved += 1
                n += 1
            except Exception as e:
                print('  ! %s: %s' % (f, e))
        if n:
            print('  %-22s превью: %d' % (slug, n))
    print('\nвсего кадров %d, собрано %d, пропущено без изменений %d'
          % (total, saved, skipped))


if __name__ == '__main__':
    main(sys.argv[1:] or SLUGS)
