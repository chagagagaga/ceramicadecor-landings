#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
РАСКЛАДКА КАДРОВ ПО КАЧЕСТВУ
--------------------------------------------------------------------------
Алгоритм из визуальной дирекции «Шамот»: каждому кадру считается score
по пяти метрикам, от него зависит размер модуля в сетке каталога.
Слабый снимок не выбрасывается — ему даётся меньше места, и он читается
как деталь, а не как плохая фотография.

    score = 40·min(K,60)/60 + 25·min(R,Rmax)/Rmax
          + 20·clamp(S,15,70)/70 + 15·fitA − 30·W

    K — контраст: разница 95-го и 5-го процентиля яркости, шкала 0–100
    R — короткая сторона в пикселях
    S — доля кадра, занятая объектом, в процентах
    A — пропорция ширина/высота
    W — флаг ватермарки (0/1), ставится вручную

ПОРОГИ ОТКАЛИБРОВАНЫ ПОД НАШ АРХИВ. Исходные значения дирекции
(R≥1400, A≥1.7) на нашем наборе недостижимы: короткая сторона у кадров
не превышает 1100 px, а панорамных снимков в архиве практически нет —
пропорция 1,79 встретилась ровно один раз из четырёхсот. С исходными
порогами 97% кадров попадали в один и тот же модуль, и сетка
превращалась в ровную плитку — ровно то, против чего приём и придуман.

Запуск:  python3 tools/score_photos.py        # пересчитать photo_scores.json
         python3 tools/score_photos.py --stat # показать распределение
"""
import glob, io, json, os, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

R_MAX   = 1100    # потолок разрешения в формуле: выше наши кадры не бывают
R_BIG   = 900     # короткая сторона, с которой кадр тянет крупный модуль
A_WIDE  = 1.35    # пропорция, с которой кадр читается как панорама


def metrics(path):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    L = im.convert('L')

    hist = L.histogram()
    tot = sum(hist) or 1
    acc = p05 = p95 = 0
    for i, c in enumerate(hist):
        acc += c
        if not p05 and acc >= tot * 0.05:
            p05 = i
        if acc >= tot * 0.95:
            p95 = i
            break
    K = (p95 - p05) * 100 / 255

    # Доля объекта: считаем на уменьшенной копии — точности хватает,
    # а полный кадр перебирать незачем.
    small = L.resize((64, 64))
    px = list(small.getdata())
    bg = max(set(px), key=px.count)
    S = sum(1 for v in px if abs(v - bg) > 8) * 100 / len(px)

    return K, min(w, h), S, w / h


def fit_a(a):
    if 1.2 <= a <= 1.9:
        return 1.0
    if 0.9 <= a < 1.2:
        return 0.5
    return 0.0


def score(K, R, S, A, W=0):
    return (40 * min(K, 60) / 60
            + 25 * min(R, R_MAX) / R_MAX
            + 20 * max(15, min(S, 70)) / 70
            + 15 * fit_a(A)
            - 30 * W)


def bucket(sc, K, R, A, W=0):
    """Размер модуля в сетке каталога."""
    if sc < 18:
        return 'skip'      # в сетку не идёт, но остаётся в лайтбоксе объекта
    if sc < 40 or K < 25 or W:
        return 'fragment'  # макро-фрагмент: виден рельеф, а не композиция
    if sc >= 70 and R >= R_BIG and K >= 45:
        return '2x2'
    if sc >= 60 and A >= A_WIDE:
        return '2x1'
    return '1x1'


def main():
    out = {}
    for f in sorted(glob.glob(os.path.join(ROOT, '*', 'img', '*.webp'))):
        rel = os.path.relpath(f, ROOT)
        try:
            K, R, S, A = metrics(f)
        except Exception as e:
            print('  ! %s: %s' % (rel, e))
            continue
        sc = score(K, R, S, A)
        out[rel] = {'score': round(sc, 1), 'k': round(K), 'r': R,
                    's': round(S), 'a': round(A, 2), 'size': bucket(sc, K, R, A)}

    path = os.path.join(ROOT, 'photo_scores.json')
    io.open(path, 'w', encoding='utf-8').write(
        json.dumps(out, ensure_ascii=False, indent=1))

    counts = {}
    for v in out.values():
        counts[v['size']] = counts.get(v['size'], 0) + 1
    print('кадров: %d → photo_scores.json' % len(out))
    for b in ['2x2', '2x1', '1x1', 'fragment', 'skip']:
        n = counts.get(b, 0)
        print('  %-9s %3d  (%4.1f%%)' % (b, n, n * 100 / max(1, len(out))))


if __name__ == '__main__':
    main()
