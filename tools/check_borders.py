#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ПРОВЕРКА ФОТОГРАФИЙ НА СВЕТЛУЮ КАЙМУ
--------------------------------------------------------------------------
Кадры из выгрузки приходили добитыми белым до квадрата. После обрезки
оставалась полоса в один-два пикселя — на странице она читается как
белая линия по краю карточки.

Настоящую кайму отличаем от светлой части кадра по ровности: у потолка
или студийного фона разброс яркости большой, у артефакта обрезки его
почти нет.

Запуск:  python3 tools/check_borders.py        # проверить
         python3 tools/check_borders.py --fix  # проверить и срезать
"""
import glob, os, subprocess, sys, tempfile
from PIL import Image, ImageStat

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JUMP = 10     # насколько край светлее глубины
FLAT = 22     # предел разброса: выше — это часть кадра, а не кайма


def line(im, side, i):
    w, h = im.size
    box = {'t': (0, i, w, i + 1), 'b': (0, h - 1 - i, w, h - i),
           'l': (i, 0, i + 1, h), 'r': (w - 1 - i, 0, w - i, h)}[side]
    st = ImageStat.Stat(im.crop(box).convert('L'))
    return st.mean[0], st.stddev[0]


def border_depth(im, side, limit=14):
    n = 0
    while n < limit:
        m, sd = line(im, side, n)
        deep = min(line(im, side, j)[0] for j in (n + 5, n + 7, n + 9))
        if m - deep > JUMP and sd < FLAT:
            n += 1
        else:
            break
    return n


def main(fix=False):
    bad = []
    for f in sorted(glob.glob(os.path.join(ROOT, '*', 'img', '*.webp'))):
        im = Image.open(f).convert('RGB')
        w, h = im.size
        cuts = {s: border_depth(im, s) for s in 'tblr'}
        if not any(cuts.values()):
            continue
        rel = os.path.relpath(f, ROOT)
        if not fix:
            bad.append((rel, cuts))
            continue
        box = (cuts['l'] + (1 if cuts['l'] else 0), cuts['t'] + (1 if cuts['t'] else 0),
               w - cuts['r'] - (1 if cuts['r'] else 0), h - cuts['b'] - (1 if cuts['b'] else 0))
        crop = im.crop(box)
        if crop.size[0] < 200 or crop.size[1] < 200:
            continue
        tmp = tempfile.mktemp(suffix='.png')
        crop.save(tmp)
        if subprocess.run(['cwebp', '-quiet', '-q', '78', tmp, '-o', f],
                          capture_output=True).returncode == 0:
            bad.append((rel, cuts))
        os.unlink(tmp)

    if fix:
        print('срезано кадров:', len(bad))
    elif bad:
        print('кадров со светлой каймой:', len(bad))
        for rel, cuts in bad[:20]:
            print('  %-34s %s' % (rel, ' '.join('%s:%d' % (k, v) for k, v in cuts.items() if v)))
        sys.exit(1)
    else:
        print('✓ светлой каймы нет ни на одном кадре')


if __name__ == '__main__':
    main('--fix' in sys.argv)
