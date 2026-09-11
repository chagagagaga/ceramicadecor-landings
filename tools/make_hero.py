#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
КАДР ПЕРВОГО ЭКРАНА
--------------------------------------------------------------------------
Кадр героя лежит под градиентом от 94 % до 20 % непрозрачности: большая
его часть залита почти чёрным, и деталей там не видно в принципе.
Отдавать туда файл в полном качестве незачем — у отопительных печей это
полмегабайта на самом важном для скорости месте, и они грузятся раньше
всего остального.

Вторая потеря — пропорция. Кадры объектов квадратные, а полоса героя на
десктопе почти два к одному: браузер обрезает кадр по высоте и выбрасывает
почти половину загруженных пикселей. Запекаем этот срез заранее — на
экране ровно то же самое, а весит вдвое меньше.

На телефоне полоса, наоборот, вытянута вертикально, поэтому для неё
остаётся кадр целиком, только мельче.

Полный кадр остаётся на месте — он нужен лайтбоксу и карточке объекта,
где его рассматривают без затемнения.

Запуск:  python3 tools/make_hero.py [slug ...]
"""
import io, os, re, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'img', 'hero')
# ширина, качество, пропорция среза (None — кадр целиком).
# Телефонный срез намеренно скромный: полоса там 390 CSS-пикселей и
# залита почти чёрным, разглядывать в ней нечего, а на медленном 4G
# каждые сто килобайт — это полсекунды до первой отрисовки.
TIERS = ((1600, 60, 2.0), (760, 54, None))

SLUGS = ['barbekyu-kompleksy', 'kaminy', 'izraztsy', 'pechi-kaminy',
         'bannye-portaly', 'russkie-pechi', 'otopitelnye-pechi']


def hero_of(slug):
    """Исходный кадр объекта.

    Берём из og:image, а не из preload: preload после первого же прогона
    указывает на срез, который сделал этот же скрипт, и повторный запуск
    начинал резать уже обрезанное.
    """
    html = io.open(os.path.join(ROOT, slug, 'index.html'), encoding='utf-8').read()
    m = re.search(r'og:image" content="[^"]*/%s/([^"]+)"' % re.escape(slug), html)
    return m.group(1) if m else ''


def main(slugs):
    os.makedirs(OUT, exist_ok=True)
    for slug in slugs:
        rel = hero_of(slug)
        src = os.path.join(ROOT, slug, rel)
        if not rel or not os.path.exists(src):
            print('  %-22s кадр не найден' % slug)
            continue
        was = os.path.getsize(src) // 1024
        made = []
        for side, quality, ratio in TIERS:
            im = Image.open(src).convert('RGB')
            if ratio:
                w, h = im.size
                need = int(round(w / ratio))
                if need < h:
                    # Срез по центру — ровно тот, что делает object-fit: cover.
                    top = (h - need) // 2
                    im = im.crop((0, top, w, top + need))
            # Плюс пиксель и срез: у края ланцош оставляет светлую строку.
            im.thumbnail((side + 2, side + 2), Image.LANCZOS)
            w, h = im.size
            im = im.crop((1, 1, w - 1, h - 1))
            dst = os.path.join(OUT, '%s-%d.webp' % (slug, side))
            im.save(dst, 'WEBP', quality=quality, method=6)
            made.append('%dx%d — %d КБ' % (im.size[0], im.size[1], os.path.getsize(dst) // 1024))
        print('  %-22s было %d КБ → %s' % (slug, was, ', '.join(made)))


if __name__ == '__main__':
    main(sys.argv[1:] or SLUGS)
