#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
СБОРЩИК ХАРАКТЕРИСТИК С ОСНОВНОГО САЙТА
--------------------------------------------------------------------------
На странице объекта лежит строка вида:
    «Вес облицовки: 422.8 кг. Габаритные размеры: ширина – 3709 мм,
     высота – 2799 мм, глубина – 2100 мм»

В выгрузке этих чисел нет, а они — самый сильный аргумент в нише:
«514 кг» доказывает ручную работу лучше слова «эксклюзивный».

Скрипт обходит страницы объектов и складывает найденное в specs.json
рядом с catalog.json. build.py подхватывает файл, если он есть.

Запуск:  python3 tools/fetch_specs.py [slug ...]
"""
import io, json, os, re, sys, time
import urllib.request, urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36'}

RE_WEIGHT = re.compile(r'Вес\s+облицовки[:\s]*([\d]+[.,]?\d*)\s*кг', re.I)
# ширина/высота/глубина идут через тире-мнемонику &ndash; или обычное тире
RE_DIM = re.compile(r'ширина\s*(?:&ndash;|[–—-])\s*(\d+)\s*мм'
                    r'.*?высота\s*(?:&ndash;|[–—-])\s*(\d+)\s*мм'
                    r'(?:.*?глубина\s*(?:&ndash;|[–—-])\s*(\d+)\s*мм)?', re.I | re.S)


def get(url, timeout=45):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout).read()


def parse(html):
    """Вес в кг и габариты в мм. Чего нет — того нет, без выдумок."""
    out = {}
    w = RE_WEIGHT.search(html)
    if w:
        try:
            out['weight'] = round(float(w.group(1).replace(',', '.')))
        except ValueError:
            pass
    d = RE_DIM.search(html)
    if d:
        out['width'] = int(d.group(1))
        out['height'] = int(d.group(2))
        if d.group(3):
            out['depth'] = int(d.group(3))
    return out


def main(slugs):
    catalog = json.load(io.open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))
    path = os.path.join(ROOT, 'specs.json')
    specs = json.load(io.open(path, encoding='utf-8')) if os.path.exists(path) else {}

    for slug in slugs:
        items = catalog[slug]['items']
        specs.setdefault(slug, {})
        found = 0
        print('\n▸ %s — объектов %d' % (slug, len(items)))
        for i, it in enumerate(items, 1):
            url = it.get('url')
            if not url:
                continue
            try:
                html = get(url).decode('utf-8', 'replace')
            except Exception as e:
                print('  %02d  страница недоступна: %s' % (i, str(e)[:44]))
                continue
            s = parse(html)
            if s:
                specs[slug][str(i)] = s
                found += 1
                print('  %02d  %s' % (i, ' · '.join(
                    ('%d кг' % s['weight']) if k == 'weight' else '%d мм' % v
                    for k, v in s.items() for _ in [0])))
            time.sleep(0.25)
        print('  характеристики нашлись у %d из %d' % (found, len(items)))

    io.open(path, 'w', encoding='utf-8').write(
        json.dumps(specs, ensure_ascii=False, indent=1))
    print('\nсохранено в specs.json')


if __name__ == '__main__':
    catalog = json.load(io.open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))
    main(sys.argv[1:] or list(catalog.keys()))
