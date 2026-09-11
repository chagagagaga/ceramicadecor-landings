#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ТАБЛИЦА ХАРАКТЕРИСТИК СО СТРАНИЦ ОБЪЕКТОВ
--------------------------------------------------------------------------
У каминов и барбекю описания берутся из каталога ceramicadecor.kz — там
они написаны под конкретный объект. У печей, порталов и печей-каминов
такого каталога нет: ни kz, ни by их не содержат, а страница объекта на
основном сайте несёт только шаблонный текст про услугу «под ключ».

Зато там есть таблица характеристик: цветовое решение, тип топки, тип
расположения, роспись. Это проверяемые факты о конкретном объекте — из
них и собирается описание карточки, вместо одинаковой заглушки на все
позиции раздела.

Результат: object_specs.json — {slug: {позиция: {поле: значение}}}.

Запуск:  python3 tools/fetch_object_specs.py [slug ...]
"""
import io, json, os, re, subprocess, sys, time, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'object_specs.json')
PAUSE = 0.4

# Поля, которые что-то говорят покупателю. Остальное в таблице —
# «Бренд: CeramicaDecor», «Страна: Россия» — на всех позициях одно и то же.
WANTED = ('Цветовое решение', 'Тип топки', 'Тип расположения камина',
          'Тип печи/камина', 'Коллекция', 'Артикул росписи', 'Материал',
          'Камин по виду топлива', 'Фото',
          # Печи-камины из наличия — заводские модели, и у них на странице
          # есть то, чего нет у проектов: конкретная топка, габариты,
          # диаметр дымохода и объём обогрева.
          'Топка', 'Габаритные размеры (ШхВхГ)', 'Размер топочного окна (ШхВхГ)',
          'Диаметр дымохода', 'Вес')


def text_lines(url):
    raw = subprocess.run(['curl', '-sSL', '--max-time', '60', url],
                         capture_output=True).stdout.decode('utf-8', 'ignore')
    t = re.sub(r'(?is)<(script|style)[^>]*>.*?</\1>', '', raw)
    t = re.sub(r'(?s)<[^>]+>', '\n', t)
    t = html.unescape(t)
    return [x.strip() for x in t.split('\n') if x.strip()]


def parse(lines):
    """Таблица характеристик идёт парами строк: поле, значение."""
    out = {}
    try:
        start = lines.index('Характеристики')
    except ValueError:
        return out
    seg = lines[start + 1:start + 90]
    for i, key in enumerate(seg[:-1]):
        if key in WANTED and key not in out:
            out[key] = seg[i + 1]
    # У проектов вес и габариты идут одной фразой в теле страницы
    for x in lines:
        m = re.search(r'Вес облицовки:\s*([\d.,]+)\s*кг', x)
        if m:
            out.setdefault('Вес', m.group(1))
        m = re.search(r'обогрев\s+помещения\s+до\s+([\d\s–\-]+)\s*м', x, re.I)
        if m:
            out['Обогрев'] = re.sub(r'\s+', '', m.group(1))
    return out


def main(slugs):
    catalog = json.load(io.open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))
    data = json.load(io.open(OUT, encoding='utf-8')) if os.path.exists(OUT) else {}
    for slug in slugs or list(catalog):
        got = data.setdefault(slug, {})
        items = catalog[slug]['items']
        for pos, it in enumerate(items, 1):
            if str(pos) in got:
                continue
            url = it.get('url') or ''
            if not url.startswith('http'):
                continue
            got[str(pos)] = parse(text_lines(url))
            time.sleep(PAUSE)
        n = sum(1 for v in got.values() if v)
        print('  %-22s страниц %d, с характеристиками %d' % (slug, len(got), n))
        json.dump(data, io.open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main(sys.argv[1:])
