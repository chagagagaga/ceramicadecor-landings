#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ПРЕВЬЮ ДЛЯ КАРТОЧЕК
--------------------------------------------------------------------------
Кадры объектов хранятся в 1600 px: столько нужно лайтбоксу, который
показывает фото во всю высоту экрана. Карточке столько не нужно, и без
разделения первый экран каталога тянул 2,7 МБ на девять карточек — для
посадочной под платный трафик это прямой убыток.

Уровней три, потому что одним размером обе задачи не закрыть:

  s/  700 px  — карточка на обычном экране;
  m/ 1100 px  — она же на ретине. Плитка занимает до 426 CSS-пикселей,
                на DPR 2 это 852 точки, на телефоне с DPR 3 — 1065.
                Раньше и туда уходило превью в 700 px, и кадр заметно
                мылил: сильнее всего на горизонтальных снимках, они
                растягиваются на всю ширину плитки.
  g/  460 px  — плитка галереи реализованных работ. Её сторона 206 CSS,
                на ретине 412 точек. Восемнадцать таких плиток по 700 px
                тянули почти мегабайт на блок, который чаще пролистывают,
                чем рассматривают.
  b/  240 px  — подложка под кадром. Она размыта на 18 px, деталей там
                не видно в принципе, а весила столько же, сколько сам
                кадр. Этим же файлом живёт лента превью в карточке
                объекта: там плитка 84 px.

Браузер сам берёт нужный уровень по srcset, поэтому на обычном экране
страница не потяжелела, а на ретине кадр стал резким.

Путь получается из полного заменой /img/ на /img/<уровень>/ — движок
делает это на лету, никаких списков в данных держать не нужно.

Запуск:  python3 tools/make_thumbs.py [slug ...]
"""
import os, re, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# уровень → (длинная сторона px, качество webp)
TIERS = (('s', 700, 78), ('m', 1100, 72), ('g', 460, 76), ('b', 240, 70))

SLUGS = ['barbekyu-kompleksy', 'kaminy', 'izraztsy', 'pechi-kaminy',
         'bannye-portaly', 'russkie-pechi', 'otopitelnye-pechi']


def build(src, dst, side, quality):
    im = Image.open(src).convert('RGB')
    # Лишний пиксель по периметру и срез после уменьшения.
    # Иначе на границе кадра ланцош выбивает светлую строку:
    # у крайних точек нет соседей снаружи, ядро фильтра берёт
    # их «отражением», и по краю остаётся блик в один пиксель.
    # В карточке фото лежит на затемнённой подложке, и этот
    # блик читается как тонкая белая линия вдоль края.
    im.thumbnail((side + 2, side + 2), Image.LANCZOS)
    w, h = im.size
    im = im.crop((1, 1, w - 1, h - 1))
    im.save(dst, 'WEBP', quality=quality, method=5)


def main(slugs):
    total = saved = skipped = 0
    for slug in slugs:
        src_dir = os.path.join(ROOT, slug, 'img')
        if not os.path.isdir(src_dir):
            continue
        made = {}
        for tier, side, quality in TIERS:
            out_dir = os.path.join(src_dir, tier)
            os.makedirs(out_dir, exist_ok=True)
            for f in sorted(os.listdir(src_dir)):
                if not f.endswith('.webp'):
                    continue
                src = os.path.join(src_dir, f)
                dst = os.path.join(out_dir, f)
                total += 1
                # Не пересобираем то, что уже свежее исходника: повторный
                # запуск должен быть быстрым.
                if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
                    skipped += 1
                    continue
                try:
                    build(src, dst, side, quality)
                    saved += 1
                    made[tier] = made.get(tier, 0) + 1
                except Exception as e:
                    print('  ! %s/%s: %s' % (tier, f, e))
        if made:
            print('  %-22s %s' % (slug, ', '.join('%s: %d' % (t, n) for t, n in made.items())))
    print('\nвсего файлов %d, собрано %d, пропущено без изменений %d'
          % (total, saved, skipped))


if __name__ == '__main__':
    main(sys.argv[1:] or SLUGS)
