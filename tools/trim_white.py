#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ОБРЕЗКА СВЕТЛОЙ КРОМКИ ПО КРАЮ КАДРА

Часть снимков на сайте отдаётся с полоской в один-два пикселя по краю:
след от белой подложки, на которой их добивали до квадрата. На тёмной
странице эта полоска читается как тонкая белая линия вокруг фотографии.

Прошлая версия искала идеально белые ряды (порог 248) и промахивалась:
в кромке попадаются пиксели 243–247, и ряд не проходил проверку.

Здесь порог не абсолютный, а относительный: ряд считается кромкой,
если он заметно светлее ряда на четыре пикселя внутрь. Настоящий кадр
такого скачка на самом краю почти никогда не даёт, а если и даст —
срезается максимум шесть пикселей из полутора тысяч, этого не видно.

Запуск:  python3 tools/trim_white.py [slug ...]
"""
import os, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SLUGS = ['barbekyu-kompleksy', 'kaminy', 'pechi-kaminy', 'bannye-portaly',
         'russkie-pechi', 'otopitelnye-pechi', 'izraztsy']

JUMP = 16    # насколько край должен быть светлее нутра, чтобы считаться кромкой
DEPTH = 4    # на сколько пикселей внутрь смотрим для сравнения
MAX = 6      # больше этого не срезаем ни при каких условиях
STEP = 7     # шаг выборки вдоль ряда


def trim(im):
    px = im.load()
    w, h = im.size

    def row(y):
        v = [min(px[x, y]) for x in range(0, w, STEP)]
        return sum(v) / len(v)

    def col(x):
        v = [min(px[x, y]) for y in range(0, h, STEP)]
        return sum(v) / len(v)

    def run(at, ref, size):
        n = 0
        while n < MAX and n < size // 4 and at(n) > ref(n) + JUMP:
            n += 1
        return n

    t = run(lambda n: row(n),         lambda n: row(n + DEPTH),         h)
    b = run(lambda n: row(h - 1 - n), lambda n: row(h - 1 - n - DEPTH), h)
    l = run(lambda n: col(n),         lambda n: col(n + DEPTH),         w)
    r = run(lambda n: col(w - 1 - n), lambda n: col(w - 1 - n - DEPTH), w)
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
