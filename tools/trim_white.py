#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ОБРЕЗКА СВЕТЛОЙ КРОМКИ ПО КРАЮ КАДРА

Часть снимков отдаётся с полоской в один-два пикселя по краю — след
белой подложки, на которой их добивали до квадрата. В карточке фото
лежит на затемнённой размытой копии себя, и эта полоска читается
как тонкая белая линия вдоль края.

Две прошлые версии промахивались:
  — первая искала идеально белые ряды (порог 248), а в кромке
    попадаются пиксели 243–247;
  — вторая сравнивала СРЕДНЮЮ яркость ряда, и кромка вдоль четверти
    ширины терялась в среднем по всей строке.

Здесь считается доля пикселей ряда, которые заметно светлее пикселя
на четыре точки внутрь. Кромка обычно идёт не по всей стороне,
а по её части — доли в восемь процентов достаточно, чтобы линия
бросалась в глаза на тёмной странице.

Запуск:  python3 tools/trim_white.py [slug ...]
"""
import os, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SLUGS = ['barbekyu-kompleksy', 'kaminy', 'pechi-kaminy', 'bannye-portaly',
         'russkie-pechi', 'otopitelnye-pechi', 'izraztsy']

JUMP = 15     # насколько пиксель края светлее СОСЕДНЕГО вглубь
SHARE = 0.08  # какой доли таких пикселей достаточно, чтобы срезать ряд
DEPTH = 1     # сравниваем с соседним пикселем: артефакт даёт резкий скачок,
              # а светлый пол или стена у края — плавный градиент, и он не ловится
MAX = 12      # больше этого не срезаем никогда: двенадцать точек из полутора
              # тысяч не видно, а кромка глубже этого уже не кромка
STEP = 2      # шаг выборки вдоль ряда


def trim(im):
    px = im.load()
    w, h = im.size

    def lum(x, y):
        r, g, b = px[x, y]
        return (r + g + b) / 3.0

    def edge_row(y, dy):
        hits = tot = 0
        for x in range(0, w, STEP):
            tot += 1
            if lum(x, y) > lum(x, y + dy * DEPTH) + JUMP:
                hits += 1
        return hits / float(tot) >= SHARE

    def edge_col(x, dx):
        hits = tot = 0
        for y in range(0, h, STEP):
            tot += 1
            if lum(x, y) > lum(x + dx * DEPTH, y) + JUMP:
                hits += 1
        return hits / float(tot) >= SHARE

    t = b = l = r = 0
    while t < MAX and edge_row(t, +1):
        t += 1
    while b < MAX and edge_row(h - 1 - b, -1):
        b += 1
    while l < MAX and edge_col(l, +1):
        l += 1
    while r < MAX and edge_col(w - 1 - r, -1):
        r += 1
    return t, b, l, r


def main(slugs):
    seen = cut = 0
    for slug in slugs:
        d = os.path.join(ROOT, slug, 'img')
        if not os.path.isdir(d):
            continue
        n = 0
        for f in sorted(os.listdir(d)):
            if not f.endswith('.webp'):
                continue
            p = os.path.join(d, f)
            seen += 1
            try:
                im = Image.open(p).convert('RGB')
                t, b, l, r = trim(im)
                if max(t, b, l, r) < 1:
                    continue
                w, h = im.size
                im.crop((l, t, w - r, h - b)).save(p, 'WEBP', quality=82, method=5)
                n += 1
                cut += 1
            except Exception as e:
                print('  ! %s: %s' % (f, e))
        if n:
            print('  %-22s обрезано %d' % (slug, n))
    print('\nпросмотрено %d, обрезано %d' % (seen, cut))


if __name__ == '__main__':
    main(sys.argv[1:] or SLUGS)
