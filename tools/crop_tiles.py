#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ОБРЕЗКА ПОЛЕЙ У ТОВАРНЫХ ФОТО ИЗРАЗЦОВ
--------------------------------------------------------------------------
Каталожные снимки изразцов приходят с сайта с широкими белыми полями:
сам изразец занимает треть кадра. В плитке каталога он от этого мелкий —
«далековато», как сказал Алексей. Срезаем поля до содержимого с запасом
в 6 %, подставку оставляем: она часть кадра.

Работает только с главными кадрами (NNN.webp): дополнительные кадры
у изразцов — это соседние артикулы, и в каталог они больше не попадают.

Запуск:  python3 tools/crop_tiles.py
"""
import os, re
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'izraztsy', 'img')
# Фон у этих снимков — нейтральный светлый градиент: серый по углам,
# почти белый за плиткой. Поэтому фон узнаём не по цвету, а по свойству:
# он бесцветный и светлый. Всё, что имеет оттенок или темнее порога, —
# плитка либо подставка.
SAT = 18     # разброс каналов, выше — это цвет
DARK = 185   # яркость, ниже — это тень или металл подставки
PAD = 0.06


def bbox(im, bg):
    w, h = im.size
    px = im.load()
    step = max(1, w // 300)

    def ink(p):
        return (max(p) - min(p)) > SAT or max(p) < DARK

    def ink_row(y):
        return any(ink(px[x, y]) for x in range(0, w, step))

    def ink_col(x):
        return any(ink(px[x, y]) for y in range(0, h, step))

    top = next((y for y in range(h) if ink_row(y)), 0)
    bot = next((y for y in range(h - 1, -1, -1) if ink_row(y)), h - 1)
    left = next((x for x in range(w) if ink_col(x)), 0)
    right = next((x for x in range(w - 1, -1, -1) if ink_col(x)), w - 1)
    return left, top, right + 1, bot + 1


def main():
    n = 0
    for f in sorted(os.listdir(SRC)):
        if not re.match(r'^\d{3}\.webp$', f):
            continue
        p = os.path.join(SRC, f)
        im = Image.open(p).convert('RGB')
        w, h = im.size
        bg = im.getpixel((3, 3))
        l, t, r, b = bbox(im, bg)
        bw, bh = r - l, b - t
        # Узкие вертикальные изразцы (бордюры, угловые) занимают в кадре
        # 20–25 % ширины — это норма, а не сбой детектора.
        if bh < h * 0.3:
            continue
        # Квадратный срез вокруг содержимого: плитка каталога квадратная,
        # и квадрат ложится в неё без полей.
        side = int(max(bw, bh) * (1 + 2 * PAD))
        cx, cy = (l + r) // 2, (t + b) // 2
        x0, y0 = cx - side // 2, cy - side // 2
        canvas = Image.new('RGB', (side, side), bg)
        canvas.paste(im, (-x0, -y0))
        canvas.save(p, 'WEBP', quality=86, method=6)
        n += 1
    print('обрезано кадров:', n)


if __name__ == '__main__':
    main()
