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

WHITE = 248     # сплошное поле: ниже этого пиксель уже не считаем белым
SOFT = 232      # кромка: между полем и фото остаётся переходная полоса
MAX_SOFT = 6    # но снимаем её не больше чем на столько пикселей с каждой стороны
STEP = 7        # шаг выборки пикселей вдоль строки: полный проход не нужен
MIN_TRIM = 8    # поля тоньше этого игнорируем — это просто светлый край кадра


def border(im):
    """Сколько строк и столбцов по краям занимает белое поле.

    Проход в два шага. Первый снимает сплошное поле по жёсткому порогу.
    Второй добирает кромку: между полем и фотографией остаётся переходная
    полоса в один-два пикселя — она уже не чисто белая (246, 242), но
    заметно светлее кадра, и на тёмной странице читается тонкой линией.
    Второй проход ограничен шестью пикселями: снять кромку он успеет,
    а въесться в светлый кадр — нет.
    """
    w, h = im.size
    px = im.load()

    def row_at(y, lim):
        return all(min(px[x, y]) >= lim for x in range(0, w, STEP))

    def col_at(x, lim):
        return all(min(px[x, y]) >= lim for y in range(0, h, STEP))

    def run(fn, size, limit, cap=None):
        n = 0
        while n < size // 2 and (cap is None or n < cap) and fn(n, limit):
            n += 1
        return n

    top    = run(lambda n, l: row_at(n, l),         h, WHITE)
    bottom = run(lambda n, l: row_at(h - 1 - n, l), h, WHITE)
    left   = run(lambda n, l: col_at(n, l),         w, WHITE)
    right  = run(lambda n, l: col_at(w - 1 - n, l), w, WHITE)

    top    += run(lambda n, l: row_at(top + n, l),            h, SOFT, MAX_SOFT)
    bottom += run(lambda n, l: row_at(h - 1 - bottom - n, l), h, SOFT, MAX_SOFT)
    left   += run(lambda n, l: col_at(left + n, l),           w, SOFT, MAX_SOFT)
    right  += run(lambda n, l: col_at(w - 1 - right - n, l),  w, SOFT, MAX_SOFT)
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
                # Кромку снимаем даже когда сплошного поля не было:
                # один светлый пиксель по краю виден на тёмном фоне.
                if max(t, b, l, r) < 1:
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
