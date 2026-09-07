#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ОБРЕЗКА БЕЛЫХ ПОЛЕЙ
--------------------------------------------------------------------------
Часть оригиналов на сайте добита белым до квадрата: у снимка 1600×1600
реальная картинка занимает середину, а сверху и снизу по 350 строк чистого
белого. В сетке работ это выглядит как белые полосы над и под каждым фото.

Скрипт срезает такие поля. Обрезаются только строки и столбцы, где ВСЕ
пиксели практически белые (255): настоящая фотография такой строки почти
никогда не даёт, даже если снята на белой стене. Порог намеренно жёсткий —
лучше не дообрезать, чем срезать край печи.

Изразцы намеренно не трогаем: там поля добиты нами специально, чтобы
плитка на подставке выглядела как в каталоге основного сайта.

Запуск:  python3 tools/trim_white.py [slug ...]
"""
import os, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SLUGS = ['barbekyu-kompleksy', 'kaminy', 'pechi-kaminy',
         'bannye-portaly', 'russkie-pechi', 'otopitelnye-pechi']

WHITE = 248     # ниже этого пиксель уже не считаем белым
STEP = 7        # шаг выборки пикселей вдоль строки: полный проход не нужен
MIN_TRIM = 8    # поля тоньше этого игнорируем — это просто светлый край кадра


def border(im):
    """Сколько строк и столбцов по краям — сплошное белое поле."""
    w, h = im.size
    px = im.load()

    def row_white(y):
        return all(min(px[x, y]) >= WHITE for x in range(0, w, STEP))

    def col_white(x):
        return all(min(px[x, y]) >= WHITE for y in range(0, h, STEP))

    top = 0
    while top < h // 2 and row_white(top):
        top += 1
    bottom = 0
    while bottom < h // 2 and row_white(h - 1 - bottom):
        bottom += 1
    left = 0
    while left < w // 2 and col_white(left):
        left += 1
    right = 0
    while right < w // 2 and col_white(w - 1 - right):
        right += 1
    return top, bottom, left, right


def main(slugs):
    touched = seen = 0
    for slug in slugs:
        d = os.path.join(ROOT, slug, 'img')
        if not os.path.isdir(d):
            continue
        n = 0
        for f in sorted(os.listdir(d)):
            if not f.endswith('.webp'):
                continue
            path = os.path.join(d, f)
            seen += 1
            try:
                im = Image.open(path).convert('RGB')
                t, b, l, r = border(im)
                if max(t, b, l, r) < MIN_TRIM:
                    continue
                w, h = im.size
                im.crop((l, t, w - r, h - b)).save(path, 'WEBP', quality=82, method=5)
                n += 1
                touched += 1
            except Exception as e:
                print('  ! %s: %s' % (f, e))
        if n:
            print('  %-22s обрезано %d' % (slug, n))
    print('\nпросмотрено %d, обрезано %d' % (seen, touched))


if __name__ == '__main__':
    main(sys.argv[1:] or SLUGS)
