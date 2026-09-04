/* Контент направления «Изразцы». Правится здесь — вёрстка и логика общие. */
window.LP = {
 "slug": "izraztsy",
 "title": "Изразцы",
 "brand": {
  "phone": "8 (800) 555-80-32",
  "worktime": "Ежедневно 9:00–21:00",
  "address": "Москва · производство в Королёве",
  "site": "https://ceramicadecor.ru",
  "telegram": "+79950004488",
  "whatsapp": "79950004488",
  "maxUrl": "https://max.ru/ceramicadecor",
  "endpoint": "https://cd-lead.chagagagaga.workers.dev/lead",
  "beacon": "https://cd-lead.chagagagaga.workers.dev/beacon",
  "metrikaId": 0
 },
 "priceLabel1": "Цена за штуку",
 "catalogStyle": "product",
 "quiz": {
  "title": "Рассчитайте комплект изразцов",
  "sub": "Минута — и смета у вас в мессенджере. Без звонков и регистраций.",
  "note": "Пришлём смету и 3D-эскиз в мессенджер или расскажем по телефону — как удобнее.",
  "base": 0,
  "spread": 1.28,
  "turnkeyFactor": 0,
  "matchBy": null,
  "fields": [
   {
    "id": "area",
    "type": "range",
    "step": 1,
    "label": "Площадь облицовки",
    "min": 1,
    "max": 30,
    "stepSize": 0.5,
    "dec": 1,
    "unit": "м²",
    "pricePerUnit": 98000,
    "hint": "Фартук на кухне — обычно 3–5 м², облицовка камина — 4–8 м², акцентная стена — от 10 м².",
    "def": 6
   },
   {
    "id": "object",
    "type": "radio",
    "step": 2,
    "label": "Что облицовываем",
    "options": [
     {
      "id": "kitchen",
      "label": "Кухонный фартук",
      "k": 1
     },
     {
      "id": "fireplace",
      "label": "Камин или печь",
      "hint": "Нужна жаростойкая румпа",
      "k": 1.15
     },
     {
      "id": "wall",
      "label": "Стена или ниша в интерьере",
      "k": 1
     },
     {
      "id": "facade",
      "label": "Фасад или уличный объект",
      "hint": "Морозостойкая серия",
      "k": 1.2
     }
    ]
   },
   {
    "id": "extra",
    "type": "checks",
    "label": "Добавить к комплекту",
    "collapsed": true,
    "options": [
     {
      "id": "corner",
      "label": "Угловые элементы",
      "hint": "Для внешних углов и торцов",
      "add": 19000
     },
     {
      "id": "border",
      "label": "Карниз и плинтус",
      "add": 24000
     },
     {
      "id": "panno",
      "label": "Панно на заказ",
      "hint": "Индивидуальный сюжет по вашему эскизу",
      "add": 88000
     },
     {
      "id": "layout",
      "label": "Раскладка и подбор мастера",
      "add": 0
     },
     {
      "id": "delivery",
      "label": "Доставка в регион",
      "hint": "Жёсткий каркас, страховка груза",
      "add": 14000
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Изразец с медальоном под сюжетную роспись (кабан)",
   "collection": "",
   "desc": "Арт. 77133/52089/11647",
   "p1": 8545,
   "p2": 0,
   "img": "img/001.webp",
   "photos": [
    "img/001.webp",
    "img/001-2.webp",
    "img/001-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-dekorativnoj-rospisyu-kaban-kollektsii-kameya-art-77133-52089-11647/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "painted",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом 200х200 Русская Этника",
   "collection": "",
   "desc": "Арт. 77880/50555/11841",
   "p1": 10112,
   "p2": 0,
   "img": "img/002.webp",
   "photos": [
    "img/002.webp",
    "img/002-2.webp",
    "img/002-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-ptitsa-s-krasnym-fonom-20h20-kollektsii-russkaya-etnika-art-77880-50555-11841/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец в окантовке Тюльпан с росписью Прованс",
   "collection": "",
   "desc": "Арт. 77079/51259/11828",
   "p1": 7777,
   "p2": 0,
   "img": "img/003.webp",
   "photos": [
    "img/003.webp",
    "img/003-2.webp",
    "img/003-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-s-rospisyu-provans-v-kvadratnoj-okantovke-s-risunkom-tsvetka-kollektsii-tyulpan-art-77079-51259-11828/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "painted",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71060/53537",
   "p1": 1476,
   "p2": 0,
   "img": "img/004.webp",
   "photos": [
    "img/004.webp",
    "img/004-2.webp",
    "img/004-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relfom-ptitsy-v-zelenom-tsvete-art71060-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с синей сюжетной росписью (в лес по дрова)",
   "collection": "",
   "desc": "Арт. 77133/52136/11737-28",
   "p1": 10745,
   "p2": 0,
   "img": "img/005.webp",
   "photos": [
    "img/005.webp",
    "img/005-2.webp",
    "img/005-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-russkie/cd_russkij-izrazets-s-syuzhetnoj-rospisyu-les-kollektsii-kameya-art-77133-52136-11737-28/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с рельефными тюльпанами Тюльпан",
   "collection": "",
   "desc": "Арт. 77073/50565",
   "p1": 3313,
   "p2": 0,
   "img": "img/006.webp",
   "photos": [
    "img/006.webp",
    "img/006-2.webp",
    "img/006-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-relefnym-uzorom-v-vide-tyulpanov-kollektsii-tyulpan-art-77073-50565/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец с румпой и лепным рельефом 100х100х15 мм",
   "collection": "",
   "desc": "Арт. 75097/53500/11968-1/r",
   "p1": 1899,
   "p2": 0,
   "img": "img/007.webp",
   "photos": [
    "img/007.webp",
    "img/007-2.webp",
    "img/007-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-s-rumpoj/cd_izrazets-s-lepnym-relefom-i-rumpoj-v-zelenom-tsvete-i-krasnoj-rospisyu-s-okantovkoj-kollektsii-pechvork-4779-4788-art-75097r-53500-11968-1/",
   "size": "100x100",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с рельефными птичками и ягодами Птички",
   "collection": "",
   "desc": "Арт. 77012/50555/11831",
   "p1": 6772,
   "p2": 0,
   "img": "img/008.webp",
   "photos": [
    "img/008.webp",
    "img/008-2.webp",
    "img/008-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefnymi-ptitsami-v-temno-sinej-rospisi-kollektsii-ptitsy-200h200-art-77012-50555-11831/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец гладкий Универсальный",
   "collection": "",
   "desc": "Арт. 70012/52089/11507-1",
   "p1": 1485,
   "p2": 0,
   "img": "img/009.webp",
   "photos": [
    "img/009.webp",
    "img/009-2.webp",
    "img/009-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_belyj-gladkij-izrazets-v-lazurnoj-rospisi-uzor-kollektsii-universal-art-70012-52089-11507-1/",
   "size": "150x150",
   "surface": "smooth",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Сувенир",
   "collection": "",
   "desc": "Арт. 78032/52200/12006",
   "p1": 4949,
   "p2": 0,
   "img": "img/010.webp",
   "photos": [
    "img/010.webp",
    "img/010-2.webp",
    "img/010-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/yaroslavskie-izraztsy/cd_izrazets-s-lepnoj-ptitsej-zelenogo-tsveta-kollektsii-suvenir-art-78032-52200-12006/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец в окантовке Универсал",
   "collection": "",
   "desc": "Арт. 76117/50485",
   "p1": 1334,
   "p2": 0,
   "img": "img/011.webp",
   "photos": [
    "img/011.webp",
    "img/011-2.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_izrazets-gladkij-v-korichnevom-tsvete-s-okantovkoj-kollektsii-universal-art-76117-50485/",
   "size": "150x150",
   "surface": "smooth",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Современный изразец коллекции Сохо",
   "collection": "",
   "desc": "Арт. 77150/50567",
   "p1": 2864,
   "p2": 0,
   "img": "img/012.webp",
   "photos": [
    "img/012.webp",
    "img/012-2.webp",
    "img/012-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/soho/izraztsy-soho-v-hvojnom-tsvete/cd_sovremennyj-odnotonnyj-relefnyj-izrazets-soho-v-zelenom-tsvete-kollektsii-soho-art-77150-50567/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец рельефный",
   "collection": "",
   "desc": "Арт. 71048/53537",
   "p1": 1476,
   "p2": 0,
   "img": "img/013.webp",
   "photos": [
    "img/013.webp",
    "img/013-2.webp",
    "img/013-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-v-vide-rozetki-v-zelenom-tsvete-art71048-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец гладкий 20х30 с росписью 1/2 (деревья на обрыве)",
   "collection": "",
   "desc": "Арт. 77404/52089/11823-30/p",
   "p1": 7807,
   "p2": 0,
   "img": "img/014.webp",
   "photos": [
    "img/014.webp",
    "img/014-2.webp",
    "img/014-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-10x30-s-sinej-rospisyu-s-syuzhetom-derevya-kollektsii-pechnye-200h300-art-77404-52089-11823-30/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец гладкий 20х20 с росписью (летний отдых)",
   "collection": "",
   "desc": "Арт. 77002/52089/11823-6",
   "p1": 8396,
   "p2": 0,
   "img": "img/015.webp",
   "photos": [
    "img/015.webp",
    "img/015-2.webp",
    "img/015-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-s-rospisyu-v-sinem-tsvete-letnij-otdyx-20x20-kollektsii-kameya-art-77002-52089-11823-6/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец гладкий 20х30 с росписью 1/2 (дерево на краю)",
   "collection": "",
   "desc": "Арт. 77404/52089/11823-29/p",
   "p1": 7807,
   "p2": 0,
   "img": "img/016.webp",
   "photos": [
    "img/016.webp",
    "img/016-2.webp",
    "img/016-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-10h30-s-sinej-gollandskoj-rospisyu-s-syuzhetom-derevo-kollektsii-pechnye-200h300-art-77404-52089-11823-29/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71057/53537",
   "p1": 1476,
   "p2": 0,
   "img": "img/017.webp",
   "photos": [
    "img/017.webp",
    "img/017-2.webp",
    "img/017-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-ptichki-v-zelenom-tsvete-art71057-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с художественной росписью (Свиристель)",
   "collection": "",
   "desc": "Арт. 77133/52150/11817-3",
   "p1": 8545,
   "p2": 0,
   "img": "img/018.webp",
   "photos": [
    "img/018.webp",
    "img/018-2.webp",
    "img/018-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-syuzhetnoj-rospisyu-sviristel-kollektsii-kameya-art-77133-52150-11817-3/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец цветной с лепным рельефом",
   "collection": "",
   "desc": "Арт. 71034/50555/12264",
   "p1": 3891,
   "p2": 0,
   "img": "img/019.webp",
   "photos": [
    "img/019.webp",
    "img/019-2.webp",
    "img/019-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-relefnyj-v-zhelto-sinej-rospisi-art71034-50555-11934/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец гладкий 20х20 с росписью 1/2 (дорога)",
   "collection": "",
   "desc": "Арт. 77002/52089/11823-18/p",
   "p1": 4922,
   "p2": 0,
   "img": "img/020.webp",
   "photos": [
    "img/020.webp",
    "img/020-2.webp",
    "img/020-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-10x20-s-sinej-rospisyu-s-syuzhetom-doroga-kollektsii-pechnye-200h300-art-77404-52089-11823-18/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец для фасада с лепным рельефом 300х300х20",
   "collection": "",
   "desc": "Арт. 77871/50555/11924",
   "p1": 31128,
   "p2": 0,
   "img": "img/021.webp",
   "photos": [
    "img/021.webp",
    "img/021-2.webp",
    "img/021-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-serogo-tsveta-i-sinej-rospisyu-art77871-50555-11924/",
   "size": "300x300",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепной лилией Арт Нуво в Лазурной росписи",
   "collection": "",
   "desc": "Арт. 71023/52097/11507",
   "p1": 4230,
   "p2": 0,
   "img": "img/022.webp",
   "photos": [
    "img/022.webp",
    "img/022-2.webp",
    "img/022-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnoj-liliej-v-goluboj-rospisi-kollektsii-art-nuvo-art-71023-52097-11507/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Угол гладкий с 3-х сторонним кантом Тюльпан",
   "collection": "",
   "desc": "Арт. 77064/52151/12020",
   "p1": 12925,
   "p2": 0,
   "img": "img/023.webp",
   "photos": [
    "img/023.webp",
    "img/023-2.webp",
    "img/023-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-gladkij-s-3-h-storonnim-kantom-kollektsii-tyulpan-art-77064-52151-12020/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец Прованс с роспись (На базар)",
   "collection": "",
   "desc": "Арт. 77133/52089/11736",
   "p1": 10745,
   "p2": 0,
   "img": "img/024.webp",
   "photos": [
    "img/024.webp",
    "img/024-2.webp",
    "img/024-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-s-goluboj-rospisyu-s-syuzhetom-na-bazar-kollektsii-kameya-art-77133-52089-11736/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "painted",
   "tiles": []
  },
  {
   "title": "Изразец Пэчворк с лепным рельефом",
   "collection": "",
   "desc": "Арт. 71037/50555/12145",
   "p1": 4222,
   "p2": 0,
   "img": "img/025.webp",
   "photos": [
    "img/025.webp",
    "img/025-2.webp",
    "img/025-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_relefnyj-izrazets-s-hudozhestvennoj-rospisyu-s-sinim-fonom-kollektsii-pechvork-art-71037-50555-12145/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец угловой с лепным рельефом Венская",
   "collection": "",
   "desc": "Арт. 77920/51261",
   "p1": 10558,
   "p2": 0,
   "img": "img/026.webp",
   "photos": [
    "img/026.webp",
    "img/026-2.webp",
    "img/026-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-lepnym-relefom-kollektsii-venskaya-art-77920-51261/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец цветной Пэчворк",
   "collection": "",
   "desc": "Арт. 71017/50555/12264",
   "p1": 4341,
   "p2": 0,
   "img": "img/027.webp",
   "photos": [
    "img/027.webp",
    "img/027-2.webp",
    "img/027-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-v-rospisi-zheltogo-tsvete-kollektsii-pechvork-art-71017-50555-11934/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец рельефный",
   "collection": "",
   "desc": "Арт. 71044/53537",
   "p1": 1428,
   "p2": 0,
   "img": "img/028.webp",
   "photos": [
    "img/028.webp",
    "img/028-2.webp",
    "img/028-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-uzornym-relefom-v-zelenom-tsvete-art71044-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 77392/52089/11743",
   "p1": 4928,
   "p2": 0,
   "img": "img/029.webp",
   "photos": [
    "img/029.webp",
    "img/029-2.webp",
    "img/029-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefom-s-sinej-rospisyu-kollektsii-ptitsy-200h200-art-77392-52089-11743/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец цветной Сувенир (грифон). Палитра: Зеленая",
   "collection": "",
   "desc": "Арт. 71146/50555/11940-2",
   "p1": 3891,
   "p2": 0,
   "img": "img/030.webp",
   "photos": [
    "img/030.webp",
    "img/030-2.webp",
    "img/030-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-s-risunkom-v-zelenom-tsvete-15h15-kollektsii-suvenir-art-71146-50555-11940-2/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с сюжетной росписью Прованс (Полевые Гвоздики)",
   "collection": "",
   "desc": "Арт. 77133/52150/11828-11",
   "p1": 8545,
   "p2": 0,
   "img": "img/031.webp",
   "photos": [
    "img/031.webp",
    "img/031-2.webp",
    "img/031-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-provans-s-risunkom-gvozdik-v-okantovke-kollektsii-kameya-art-77133-52150-11828-11/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Угол в окантовке Универсал",
   "collection": "",
   "desc": "Арт. 76150/50485",
   "p1": 3303,
   "p2": 0,
   "img": "img/032.webp",
   "photos": [
    "img/032.webp",
    "img/032-2.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-v-relefnoj-okantovke-korichnevogo-tsveta-kollektsii-universal-art-76150-50485/",
   "size": "150x150",
   "surface": "smooth",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец с рельефными птичками и ягодами Птички",
   "collection": "",
   "desc": "Арт. 71012/52090/11734",
   "p1": 4227,
   "p2": 0,
   "img": "img/033.webp",
   "photos": [
    "img/033.webp",
    "img/033-2.webp",
    "img/033-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-ptitsa-yarkogo-zheltogo-tsveta-kollektsii-ptichki-150h150-art-71012-52090-11734/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с сюжетной росписью Прованс (Букет Лаванды)",
   "collection": "",
   "desc": "Арт. 77133/52150/11828-3",
   "p1": 8545,
   "p2": 0,
   "img": "img/034.webp",
   "photos": [
    "img/034.webp",
    "img/034-2.webp",
    "img/034-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-provans-s-okantovkoj-s-risunkom-buketa-lovandy-kollektsii-kameya-art-77133-52150-11828-3/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец h300 мм с синей росписью (хорошая погода)",
   "collection": "",
   "desc": "Арт. 77404/52136/12119-7",
   "p1": 12609,
   "p2": 0,
   "img": "img/035.webp",
   "photos": [
    "img/035.webp",
    "img/035-2.webp",
    "img/035-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-gladkij-v-syuzhetnoj-gollandskoj-rospisi-sinego-tsveta-kollektsii-pechnye-200h300-art-77404-52136-12119-7/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец гладкий 20х20 с росписью (водопой)",
   "collection": "",
   "desc": "Арт. 77002/52089/11823-5",
   "p1": 8396,
   "p2": 0,
   "img": "img/036.webp",
   "photos": [
    "img/036.webp",
    "img/036-2.webp",
    "img/036-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-s-rospisyu-v-sinem-tsvete-vodopoj-20x20-kollektsii-kameya-art-77002-52089-11823-5/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Пэчворк",
   "collection": "",
   "desc": "Арт. 71036/52089/11443",
   "p1": 4024,
   "p2": 0,
   "img": "img/037.webp",
   "photos": [
    "img/037.webp",
    "img/037-2.webp",
    "img/037-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefnym-uzorom-golubogo-tsveta-kollektsii-pechvork-art-71036-52089-11443/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Плитка изразцовая рельефная Азулежу 200х200х12 мм",
   "collection": "",
   "desc": "Арт. 77641/52136/11976-1",
   "p1": 4468,
   "p2": 0,
   "img": "img/038.webp",
   "photos": [
    "img/038.webp",
    "img/038-2.webp",
    "img/038-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/azulezhu/izraztsovaya-plitka-azulezhu-s-relefom/cd_plitka-izraztsovaya-relefnaya-azulezhu-200h200h12-mm-77641-52136-11976-1/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Византия",
   "collection": "",
   "desc": "Арт. 77457/52111",
   "p1": 2800,
   "p2": 0,
   "img": "img/039.webp",
   "photos": [
    "img/039.webp",
    "img/039-2.webp",
    "img/039-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_izrazets-s-dekorativnym-relefom-vizantiya-belogo-tsveta-20x20-kollektsii-vizantiya-art-77457-52111/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец угловой гладкий 20х30 с росписью (охотники с добычей)",
   "collection": "",
   "desc": "Арт. 77405/52089/11823-9",
   "p1": 21996,
   "p2": 0,
   "img": "img/040.webp",
   "photos": [
    "img/040.webp",
    "img/040-2.webp",
    "img/040-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-gladkij-v-gollandskom-stile-s-sinej-rospisyu-ohotniki-s-sinej-dobychej-kollektsii-pechnye-200h300-art-77405-52089-11823-9/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Дорф",
   "collection": "",
   "desc": "Арт. 77275/50893",
   "p1": 5445,
   "p2": 0,
   "img": "img/041.webp",
   "photos": [
    "img/041.webp",
    "img/041-2.webp",
    "img/041-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_krasnyj-relefnyj-izrazets-kollektsii-dorf-art-77275-50893/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец с румпой Арт Нуво",
   "collection": "",
   "desc": "Арт. 71023/52092/11505/r",
   "p1": 4230,
   "p2": 0,
   "img": "img/042.webp",
   "photos": [
    "img/042.webp",
    "img/042-2.webp",
    "img/042-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-s-rumpoj/cd_izrazets-s-s-rumpoj-v-zelenoj-rospisi-s-tsvetkom-kollektsii-art-nuvo-art-71023r-52092-11505/",
   "size": "",
   "surface": "",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 71033/52089/11673",
   "p1": 3190,
   "p2": 0,
   "img": "img/043.webp",
   "photos": [
    "img/043.webp",
    "img/043-2.webp",
    "img/043-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-relefnyj-v-krasno-sinej-rospisi-kollektsii-ptichki-150h150-art-71033-52089-11673/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец цветной Сувенир. Палитра: Коричневая",
   "collection": "",
   "desc": "Арт. 71144/50555/11940",
   "p1": 3891,
   "p2": 0,
   "img": "img/044.webp",
   "photos": [
    "img/044.webp",
    "img/044-2.webp",
    "img/044-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-relefnyj-s-obemnym-risunkom-korichnevogo-tsveta-kollektsii-suvenir-art-71144-50555-11940/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец цветной Сувенир (двуглавый орел). Палитра: Коричневая",
   "collection": "",
   "desc": "Арт. 71142/50555/11940",
   "p1": 3891,
   "p2": 0,
   "img": "img/045.webp",
   "photos": [
    "img/045.webp",
    "img/045-2.webp",
    "img/045-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-korichnevogo-tsveta-relefnyj-s-zheltoj-rospisyu-kollektsii-suvenir-art-71142-50555-11940/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Элеганс",
   "collection": "",
   "desc": "Арт. 71013/50571",
   "p1": 2208,
   "p2": 0,
   "img": "img/046.webp",
   "photos": [
    "img/046.webp",
    "img/046-2.webp",
    "img/046-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-tsvete-sapfir-kollektsii-elegans-150h150-art-71013-50571/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец с медальоном и росписью в коричневой окантовке (воробьи)",
   "collection": "",
   "desc": "Арт. 77133/52136/11953-2",
   "p1": 10745,
   "p2": 0,
   "img": "img/047.webp",
   "photos": [
    "img/047.webp",
    "img/047-2.webp",
    "img/047-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-provans-s-risunkom-ptits-v-okantovke-kollektsii-kameya-art-77133-52136-11953-2/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец гладкий 20х30 с росписью 1/2 (деревенский пёс)",
   "collection": "",
   "desc": "Арт. 77404/52089/11823-26/p",
   "p1": 7807,
   "p2": 0,
   "img": "img/048.webp",
   "photos": [
    "img/048.webp",
    "img/048-2.webp",
    "img/048-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-10x30-s-sinej-gollandskoj-rospisyu-s-syuzhetom-sobaka-kollektsii-pechnye-200h300-art-77404-52089-11823-26/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Белый изразец с лепным рельефом Русская Этника",
   "collection": "",
   "desc": "Арт. 77881/51200",
   "p1": 3196,
   "p2": 0,
   "img": "img/049.webp",
   "photos": [
    "img/049.webp",
    "img/049-2.webp",
    "img/049-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_drevnerusskij-izrazets-s-hudozhestvennym-dekorom-v-belom-tsvete-kollektsii-russkaya-etnika-art-77881-51200/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец рельефный",
   "collection": "",
   "desc": "Арт. 71054/53537",
   "p1": 1476,
   "p2": 0,
   "img": "img/050.webp",
   "photos": [
    "img/050.webp",
    "img/050-2.webp",
    "img/050-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-tsvetok-v-zelenom-tsvete-art71054-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с румпой и лепным рельефом 100х100х15 мм",
   "collection": "",
   "desc": "Арт. 75097/53500/11968/r",
   "p1": 1899,
   "p2": 0,
   "img": "img/051.webp",
   "photos": [
    "img/051.webp",
    "img/051-2.webp",
    "img/051-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-s-rumpoj/cd_izrazets-s-lepnym-relefom-i-rumpoj-v-zheltom-tsvete-i-korichnevoj-rospisyu-s-okantovkoj-kollektsii-pechvork-4779-4788-art-75097r-53500-11968/",
   "size": "100x100",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Угол изразцовый с лепным рельефом \"Ярославская майолика\"",
   "collection": "",
   "desc": "Арт. 76014/52089/11816",
   "p1": 5843,
   "p2": 0,
   "img": "img/052.webp",
   "photos": [
    "img/052.webp",
    "img/052-2.webp",
    "img/052-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-dekorotivnym-relefom-v-tsvetnoj-rospisi-kollektsii-albion-art-76014-52089-11816/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразцовый угол с лепным рельефом Альбион",
   "collection": "",
   "desc": "Арт. 76014/53050",
   "p1": 3802,
   "p2": 0,
   "img": "img/053.webp",
   "photos": [
    "img/053.webp",
    "img/053-2.webp",
    "img/053-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-lepnym-relefom-zelenogo-tsveta-kollektsii-albion-art-76014-53050/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец с сюжетной росписью Прованс (Птички Чечетки с гнездом)",
   "collection": "",
   "desc": "Арт. 77133/52150/11828-9",
   "p1": 8545,
   "p2": 0,
   "img": "img/054.webp",
   "photos": [
    "img/054.webp",
    "img/054-2.webp",
    "img/054-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-v-stile-provans-s-risunkom-ptich-v-tsvetnoj-okantovke-kollektsii-kameya-art-77133-52150-11828-9/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом \"Ярославская майолика\"",
   "collection": "",
   "desc": "Арт. 78024/52089/11816",
   "p1": 4949,
   "p2": 0,
   "img": "img/055.webp",
   "photos": [
    "img/055.webp",
    "img/055-2.webp",
    "img/055-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/yaroslavskie-izraztsy/cd_izrazets-relefnyj-s-lepninoj-ptitsej-v-zheltoj-rospisi-kollektsii-suvenir-art-78024-52089-11816/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец рельефный с росписью",
   "collection": "",
   "desc": "Арт. 71029/50555/12264",
   "p1": 3891,
   "p2": 0,
   "img": "img/056.webp",
   "photos": [
    "img/056.webp",
    "img/056-2.webp",
    "img/056-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-relefnyj-v-korichnevo-sinej-rospisi-art71029-50555-11934/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Элеганс",
   "collection": "",
   "desc": "Арт. 71010/50555/11727",
   "p1": 4351,
   "p2": 0,
   "img": "img/057.webp",
   "photos": [
    "img/057.webp",
    "img/057-2.webp",
    "img/057-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-tsvetok-zheltogo-tsveta-v-korichnevoj-ramke-kollektsii-elegans-150h150-art-71010-50555-11727/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с росписью Прованс (колибри)",
   "collection": "",
   "desc": "Арт. 77133/52089/11829-3",
   "p1": 8545,
   "p2": 0,
   "img": "img/058.webp",
   "photos": [
    "img/058.webp",
    "img/058-2.webp",
    "img/058-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-s-rospisyu-provans-v-zelenoj-okantovke-s-risunkom-ptichki-kollektsii-kameya-art-77133-52089-11829-3/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с синей сюжетной росписью (посевной день)",
   "collection": "",
   "desc": "Арт. 77133/52136/11737-27",
   "p1": 10745,
   "p2": 0,
   "img": "img/059.webp",
   "photos": [
    "img/059.webp",
    "img/059-2.webp",
    "img/059-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-russkie/cd_russkij-izrazets-s-syuzhetnoj-rospisyu-den-kollektsii-kameya-art-77133-52136-11737-27/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец цветной Сувенир (жарптица). Палитра: Зеленая",
   "collection": "",
   "desc": "Арт. 71139/50555/11940",
   "p1": 3891,
   "p2": 0,
   "img": "img/060.webp",
   "photos": [
    "img/060.webp",
    "img/060-2.webp",
    "img/060-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-zelenogo-tsveta-s-zheltoj-rospisyu-relefnyj-kollektsii-suvenir-art-71139-50555-11940/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71051/53537",
   "p1": 1476,
   "p2": 0,
   "img": "img/061.webp",
   "photos": [
    "img/061.webp",
    "img/061-2.webp",
    "img/061-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-uzor-v-zelenom-tsvete-art71051-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Византия",
   "collection": "",
   "desc": "Арт. 77459/52111/11725",
   "p1": 3615,
   "p2": 0,
   "img": "img/062.webp",
   "photos": [
    "img/062.webp",
    "img/062-2.webp",
    "img/062-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-v-krasnoj-okantovke-s-rospisyu-tsvetok-kollektsii-vizantiya-art-77459-52111-11725/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Плитка изразцовая рельефная Азулежу 200х200х12 мм",
   "collection": "",
   "desc": "Арт. 77643/52136/11976-1",
   "p1": 4468,
   "p2": 0,
   "img": "img/063.webp",
   "photos": [
    "img/063.webp",
    "img/063-2.webp",
    "img/063-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/azulezhu/izraztsovaya-plitka-azulezhu-s-relefom/cd_plitka-izraztsovaya-relefnaya-azulezhu-200h200h12-mm-77643-52136-11976-1/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с синей сюжетной росписью (разговор с конём)",
   "collection": "",
   "desc": "Арт. 77133/52136/11737-34",
   "p1": 10745,
   "p2": 0,
   "img": "img/064.webp",
   "photos": [
    "img/064.webp",
    "img/064-2.webp",
    "img/064-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-russkie/cd_russkij-izrazets-s-syuzhetnoj-rospisyu-razgovor-kollektsii-kameya-art-77133-52136-11737-34/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Плитка рельефная Азулежу 200х200х12 мм",
   "collection": "",
   "desc": "Арт. 77643/52136/11976",
   "p1": 4468,
   "p2": 0,
   "img": "img/065.webp",
   "photos": [
    "img/065.webp",
    "img/065-2.webp",
    "img/065-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/azulezhu/izraztsovaya-plitka-azulezhu-s-relefom/cd_plitka-relefnaya-azulezhu-200h200h12-mm-77643-52136-11976/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71152/53537",
   "p1": 1399,
   "p2": 0,
   "img": "img/066.webp",
   "photos": [
    "img/066.webp",
    "img/066-2.webp",
    "img/066-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-v-zelenom-tsvete-art71152-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 77392/52046/12139",
   "p1": 4928,
   "p2": 0,
   "img": "img/067.webp",
   "photos": [
    "img/067.webp",
    "img/067-2.webp",
    "img/067-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefom-s-oranzhevoj-rospisyu-na-zelenom-fone-kollektsii-ptitsy-200h200-art-77392-52046-12139/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с медальоном под сюжетную роспись Прованс(ветряная мельница)",
   "collection": "",
   "desc": "Арт. 77133/52089/11735-7",
   "p1": 8545,
   "p2": 0,
   "img": "img/068.webp",
   "photos": [
    "img/068.webp",
    "img/068-2.webp",
    "img/068-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-v-sine-goluboj-rospisi-s-syuzhetom-vetryanaya-melnitsa-kollektsii-kameya-art-77133-52089-11735-7/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Угол левый к плитке в форме треугольника Маджестик",
   "collection": "",
   "desc": "Арт. 77231/51241",
   "p1": 1799,
   "p2": 0,
   "img": "img/069.webp",
   "photos": [
    "img/069.webp",
    "img/069-2.webp",
    "img/069-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-treugolnyj-v-rospisi-zolotom-kollektsii-madzhestik-art-77231-51241/",
   "size": "",
   "surface": "",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец цветной Пэчворк",
   "collection": "",
   "desc": "Арт. 71019/50555/12264",
   "p1": 4341,
   "p2": 0,
   "img": "img/070.webp",
   "photos": [
    "img/070.webp",
    "img/070-2.webp",
    "img/070-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-zelenogo-tsveta-kollektsii-pechvork-art-71019-50555-11934/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Дорф",
   "collection": "",
   "desc": "Арт. 77275/56113",
   "p1": 5445,
   "p2": 0,
   "img": "img/071.webp",
   "photos": [
    "img/071.webp",
    "img/071-2.webp",
    "img/071-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_korichnevyj-izrazets-s-relefom-kollektsii-dorf-art-77275-50557/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец гладкий с художественной синей росписью (водная тишь)",
   "collection": "",
   "desc": "Арт. 77002/52136/12119-4",
   "p1": 8396,
   "p2": 0,
   "img": "img/072.webp",
   "photos": [
    "img/072.webp",
    "img/072-2.webp",
    "img/072-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-gladkij-v-ramke-i-sinej-rospisyu-s-syuzhetom-vodnaya-tish-kollektsii-kameya-art-77002-52136-12119-4/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец рельефный 200х250 Неаполь",
   "collection": "",
   "desc": "Арт. 77853/52089/11824",
   "p1": 7095,
   "p2": 0,
   "img": "img/073.webp",
   "photos": [
    "img/073.webp",
    "img/073-2.webp",
    "img/073-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-zheltoj-ramke-kollektsii-neapol-art-77853-52089-11824/",
   "size": "",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с синей сюжетной росписью (русские гулянья)",
   "collection": "",
   "desc": "Арт. 77133/52136/11737-35",
   "p1": 10745,
   "p2": 0,
   "img": "img/074.webp",
   "photos": [
    "img/074.webp",
    "img/074-2.webp",
    "img/074-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-russkie/cd_russkij-izrazets-s-syuzhetnoj-rospisyu-gulyaniya-kollektsii-kameya-art-77133-52136-11737-35/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Муравленный изразец 20х20 Русская Этника",
   "collection": "",
   "desc": "Арт. 77878/53050",
   "p1": 3814,
   "p2": 0,
   "img": "img/075.webp",
   "photos": [
    "img/075.webp",
    "img/075-2.webp",
    "img/075-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-relefnyj-lepnoj-syuzhetnyj-20h20-kollektsii-russkaya-etnika-art-77878-53050/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец с росписью Прованс (Лаванда душистая)",
   "collection": "",
   "desc": "Арт. 77133/52150/12005-7",
   "p1": 8545,
   "p2": 0,
   "img": "img/076.webp",
   "photos": [
    "img/076.webp",
    "img/076-2.webp",
    "img/076-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-v-stile-provans-s-risunkom-v-okantovke-lavandy-kollektsii-kameya-art-77133-52150-12005-7/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец цветной с лепным рельефом 200х200 Русская Этника",
   "collection": "",
   "desc": "Арт. 77875/50555/11841",
   "p1": 10208,
   "p2": 0,
   "img": "img/077.webp",
   "photos": [
    "img/077.webp",
    "img/077-2.webp",
    "img/077-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_raznotsvetnyj-izrazets-s-lepnym-relefom-ptitsa-i-krasnym-fonom-kollektsii-russkaya-etnika-art-77875-50555-11841/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец белый с рельефной розеткой Бристоль",
   "collection": "",
   "desc": "Арт. 77181/51200",
   "p1": 3152,
   "p2": 0,
   "img": "img/078.webp",
   "photos": [
    "img/078.webp",
    "img/078-2.webp",
    "img/078-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_izrazets-belyj-s-relefnoj-rozetkoj-kollektsii-bristol-art-77181-51200/",
   "size": "180x180",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец гладкий 20х30 с росписью 1/2 (водяная мельница)",
   "collection": "",
   "desc": "Арт. 77404/52089/11823-28/p",
   "p1": 7807,
   "p2": 0,
   "img": "img/079.webp",
   "photos": [
    "img/079.webp",
    "img/079-2.webp",
    "img/079-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-10x30-s-sinej-rospisyu-s-syuzhetom-vodyanaya-melnitsa-kollektsii-pechnye-200h300-art-77404-52089-11823-28/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Угол с рельефной косичкой Птички",
   "collection": "",
   "desc": "Арт. 76012/50555/12141",
   "p1": 4793,
   "p2": 0,
   "img": "img/080.webp",
   "photos": [
    "img/080.webp",
    "img/080-2.webp",
    "img/080-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-relefom-kosichka-zelenogo-tsveta-s-krasnoj-rospisyu-kollektsii-ptichki-150h150-art-76012-50555-12141/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Арт Нуво в росписи Фисташковая",
   "collection": "",
   "desc": "Арт. 71014/52091/11505",
   "p1": 4012,
   "p2": 0,
   "img": "img/081.webp",
   "photos": [
    "img/081.webp",
    "img/081-2.webp",
    "img/081-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-v-zelenoj-rospisi-kollektsii-art-nuvo-art-71014-52091-11505/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом \"Ярославская майолика\"",
   "collection": "",
   "desc": "Арт. 78037/52089/11816-1",
   "p1": 4949,
   "p2": 0,
   "img": "img/082.webp",
   "photos": [
    "img/082.webp",
    "img/082-2.webp",
    "img/082-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/yaroslavskie-izraztsy/cd_izrazets-s-lepnoj-ptitsej-sinego-tsveta-kollektsii-suvenir-art-78037-52089-11816-1/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец для фасада 230х230х30 мм с рельефом",
   "collection": "",
   "desc": "Арт. 78278/52144/12010",
   "p1": 11466,
   "p2": 0,
   "img": "img/083.webp",
   "photos": [
    "img/083.webp",
    "img/083-2.webp",
    "img/083-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-tsvetkom-v-zelenom-tsvete-230h230h30-mm-art78278-52144-12010/",
   "size": "",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с современным рельефом",
   "collection": "",
   "desc": "Арт. 74077/50509",
   "p1": 2024,
   "p2": 0,
   "img": "img/084.webp",
   "photos": [
    "img/084.webp",
    "img/084-2.webp",
    "img/084-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-lepnoj-geometriej-v-zelenom-tsvete-art74077-50509/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом 10х10 Нарцысс желтый",
   "collection": "",
   "desc": "Арт. 75088/52105/11795",
   "p1": 2968,
   "p2": 0,
   "img": "img/085.webp",
   "photos": [
    "img/085.webp",
    "img/085-2.webp",
    "img/085-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-10x10-s-rospisyu-i-lepnym-relefom-nartsiss-art75088-52105-11795/",
   "size": "100x100",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом 10х10 Лавр",
   "collection": "",
   "desc": "Арт. 75074/52105/11781",
   "p1": 2756,
   "p2": 0,
   "img": "img/086.webp",
   "photos": [
    "img/086.webp",
    "img/086-2.webp",
    "img/086-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-10x10-s-rospisyu-i-lepnym-relefom-lavr-art75074-52105-11781/",
   "size": "100x100",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с художественной росписью (Птицы с птенчиками)",
   "collection": "",
   "desc": "Арт. 77133/52150/11817-5",
   "p1": 8545,
   "p2": 0,
   "img": "img/087.webp",
   "photos": [
    "img/087.webp",
    "img/087-2.webp",
    "img/087-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-syuzhetnoj-rospisyu-ptitsy-v-korichnevom-tsvete-kollektsii-kameya-art-77133-52150-11817-5/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71026/53537",
   "p1": 1476,
   "p2": 0,
   "img": "img/088.webp",
   "photos": [
    "img/088.webp",
    "img/088-2.webp",
    "img/088-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-uzorom-zelenogo-tsveta-art71026-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Византия",
   "collection": "",
   "desc": "Арт. 77457/52111/11725",
   "p1": 3625,
   "p2": 0,
   "img": "img/089.webp",
   "photos": [
    "img/089.webp",
    "img/089-2.webp",
    "img/089-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-v-sinej-ramke-s-uzorom-rozovogo-tsveta-kollektsii-vizantiya-art-77457-52111-11725/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом Византия",
   "collection": "",
   "desc": "Арт. 77456/56000/12021",
   "p1": 3506,
   "p2": 0,
   "img": "img/090.webp",
   "photos": [
    "img/090.webp",
    "img/090-2.webp",
    "img/090-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-temno-sinej-okantovke-na-rozovom-fone-kollektsii-vizantiya-art-77456-56000-12021/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Русский изразец с рельефным Грифоном",
   "collection": "",
   "desc": "Арт. 78031/53045/11284",
   "p1": 10010,
   "p2": 0,
   "img": "img/091.webp",
   "photos": [
    "img/091.webp",
    "img/091-2.webp",
    "img/091-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_drevnerusskij-izrazets-s-risunkom-grifon-kollektsii-suvenir-art-78008-53045-11284/",
   "size": "",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 77392/50496/12132",
   "p1": 4928,
   "p2": 0,
   "img": "img/092.webp",
   "photos": [
    "img/092.webp",
    "img/092-2.webp",
    "img/092-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefom-s-tsvetnoj-rospisyu-kollektsii-ptitsy-200h200-art-77392-50496-12132/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Усадьба",
   "collection": "",
   "desc": "Арт. 71008/52136/11954",
   "p1": 3707,
   "p2": 0,
   "img": "img/093.webp",
   "photos": [
    "img/093.webp",
    "img/093-2.webp",
    "img/093-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-tsvetok-zheltogo-tsveta-na-zelenom-fone-kollektsii-usadba-art-71008-52136-11954/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Элеганс",
   "collection": "",
   "desc": "Арт. 71010/50512",
   "p1": 2248,
   "p2": 0,
   "img": "img/094.webp",
   "photos": [
    "img/094.webp",
    "img/094-2.webp",
    "img/094-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-hudozhestvennym-relefnym-dekorom-zelenogo-tsveta-kollektsii-elegans-150h150-art-71010-50512/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  },
  {
   "title": "Русский изразец с мифологической сценкой",
   "collection": "",
   "desc": "Арт. 78020/53045/11284",
   "p1": 5021,
   "p2": 0,
   "img": "img/095.webp",
   "photos": [
    "img/095.webp",
    "img/095-2.webp",
    "img/095-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-s-hudozhestvennym-uzorom-kollektsii-suvenir-art-78020-53045-11284/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец цветной Сувенир (двуглавый орел). Палитра: Зеленая",
   "collection": "",
   "desc": "Арт. 71142/50555/11940-2",
   "p1": 3891,
   "p2": 0,
   "img": "img/096.webp",
   "photos": [
    "img/096.webp",
    "img/096-2.webp",
    "img/096-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_drevnerusskij-izrazets-zelenogo-tsveta-s-krasnoj-rospisyu-relefnyj-kollektsii-suvenir-art-71142-50555-11940-2/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с художественной росписью (Птицы на ветке)",
   "collection": "",
   "desc": "Арт. 77133/52150/11817",
   "p1": 8545,
   "p2": 0,
   "img": "img/097.webp",
   "photos": [
    "img/097.webp",
    "img/097-2.webp",
    "img/097-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-syuzhetnoj-rospisyu-ptitsy-na-vetke-kollektsii-kameya-art-77133-52150-11817/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец гладкий 20х20 с росписью (заброшенный замок)",
   "collection": "",
   "desc": "Арт. 77002/52089/11823-8",
   "p1": 8396,
   "p2": 0,
   "img": "img/098.webp",
   "photos": [
    "img/098.webp",
    "img/098-2.webp",
    "img/098-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-s-rospisyu-v-sinem-tsvete-zabroshennyj-zamok-20x20-kollektsii-kameya-art-77002-52089-11823-8/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 71033/52090/11734",
   "p1": 3190,
   "p2": 0,
   "img": "img/099.webp",
   "photos": [
    "img/099.webp",
    "img/099-2.webp",
    "img/099-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-relefnyj-v-krasno-zheltoj-rospisi-kollektsii-ptichki-150h150-art-71033-52090-11734/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с декоративным рельефом 10х10 Астры",
   "collection": "",
   "desc": "Арт. 75075/52105/11782",
   "p1": 2862,
   "p2": 0,
   "img": "img/100.webp",
   "photos": [
    "img/100.webp",
    "img/100-2.webp",
    "img/100-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-10x10-s-rospisyu-i-lepnym-relefom-astry-art75075-52105-11782/",
   "size": "100x100",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с лепным рельефом 200х200 мм Русская Этника (Зеленая окантовка)",
   "collection": "",
   "desc": "Арт. 77874/52151/12020-2",
   "p1": 6858,
   "p2": 0,
   "img": "img/101.webp",
   "photos": [
    "img/101.webp",
    "img/101-2.webp",
    "img/101-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-tsvetok-v-zelenoj-okantovke-kollektsii-russkaya-etnika-art-77874-52151-12020-2/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец Охота с сюжетной росписью (медведь)",
   "collection": "",
   "desc": "Арт. 77133/52089/11660-4",
   "p1": 10745,
   "p2": 0,
   "img": "img/102.webp",
   "photos": [
    "img/102.webp",
    "img/102-2.webp",
    "img/102-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-dekorativnoj-sinej-rospisyu-medved-kollektsii-kameya-art-77133-52089-11660-4/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Изразец с насечкой Альбион",
   "collection": "",
   "desc": "Арт. 74036/53517",
   "p1": 1312,
   "p2": 0,
   "img": "img/103.webp",
   "photos": [
    "img/103.webp",
    "img/103-2.webp",
    "img/103-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-tsvete-baklazhan-kollektsii-albion-art-74036-53517/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "tiles": []
  },
  {
   "title": "Угол с насечкой Альбион",
   "collection": "",
   "desc": "Арт. 76069/52123/11745",
   "p1": 4322,
   "p2": 0,
   "img": "img/104.webp",
   "photos": [
    "img/104.webp",
    "img/104-2.webp",
    "img/104-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-nasechkoj-v-belom-tsvete-s-zheltoj-rospisyu-kollektsii-albion-art-76069-52123-11745/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "tiles": []
  },
  {
   "title": "Изразец с рельефными полосами и завитками Ар Деко",
   "collection": "",
   "desc": "Арт. 71100/51201",
   "p1": 1328,
   "p2": 0,
   "img": "img/105.webp",
   "photos": [
    "img/105.webp",
    "img/105-2.webp",
    "img/105-3.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_izrazets-s-dekorativnym-relefom-polosy-v-belom-tsvete-kollektsii-ar-deko-art-71100-51201/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "tiles": []
  }
 ],
 "filters": [
  {
   "key": "price",
   "label": "Бюджет",
   "field": "p1",
   "options": [
    {
     "id": "p0",
     "label": "до 3 000 ₽",
     "min": 0,
     "max": 3000
    },
    {
     "id": "p1",
     "label": "3–6 тыс ₽",
     "min": 3000,
     "max": 6000
    },
    {
     "id": "p2",
     "label": "от 6 000 ₽",
     "min": 6000,
     "max": 1000000000
    }
   ]
  },
  {
   "key": "kind",
   "label": "Тип",
   "field": "kind",
   "options": [
    {
     "id": "painted",
     "label": "Художественная роспись"
    },
    {
     "id": "colored",
     "label": "Цветная роспись"
    },
    {
     "id": "plain",
     "label": "Однотонные"
    }
   ]
  },
  {
   "key": "size",
   "label": "Типоразмер",
   "field": "size",
   "options": [
    {
     "id": "100x100",
     "label": "100x100"
    },
    {
     "id": "150x150",
     "label": "150x150"
    },
    {
     "id": "200x200",
     "label": "200x200"
    }
   ]
  },
  {
   "key": "surface",
   "label": "Поверхность",
   "field": "surface",
   "options": [
    {
     "id": "smooth",
     "label": "Гладкие"
    },
    {
     "id": "relief",
     "label": "Рельефные"
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Заводская плитка",
  "goodTitle": "Изразцы ручной формовки",
  "bad": [
   "Печатный рисунок повторяется через каждые пять плиток — глаз это ловит сразу.",
   "Плоская поверхность без глубины: свет по ней не играет.",
   "Ровно тот же артикул стоит у половины соседей по посёлку.",
   "У печи и камина обычная плитка трескается от перегрева."
  ],
  "good": [
   "Каждый изразец формуется и расписывается вручную — двух одинаковых не бывает.",
   "Рельеф и объёмная глазурь дают светотень, стена перестаёт быть плоской.",
   "Коллекцию, цвет и сюжет собираем под ваш интерьер, а не под склад.",
   "Обжиг 1000 °C: изразец штатно работает на камине и печи, гарантия 50 лет."
  ],
  "media": "img/002.webp"
 },
 "steps": [
  {
   "title": "Заявка и замер",
   "text": "Обсуждаем задачу, снимаем размеры. По Москве и МО выезд замерщика бесплатный.",
   "day": "День 1–2"
  },
  {
   "title": "3D-проект и смета",
   "text": "Показываем объект в вашем интерьере и фиксируем стоимость. Правки — до согласования.",
   "day": "День 3–5"
  },
  {
   "title": "Производство",
   "text": "Формуем, обжигаем и расписываем в собственном цехе. Каждый изразец проходит контроль.",
   "day": "4–8 недель"
  },
  {
   "title": "Монтаж и сдача",
   "text": "Привозим, собираем, сдаём объект. Выдаём паспорт изделия и гарантию.",
   "day": "3–10 дней"
  }
 ],
 "guarantees": [
  {
   "icon": "shield",
   "b": "",
   "title": "Гарантия 50 лет на керамику",
   "text": "Обжиг при 1000 °C. Глазурь не выцветает и не трескается от перепадов температуры.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.8 19.2 6v6.2c0 4.2-3 7-7.2 8.9-4.2-1.9-7.2-4.7-7.2-8.9V6z\"/><path d=\"M8.8 12.1l2.3 2.3 4-4.4\"/></svg>"
  },
  {
   "icon": "doc",
   "b": "",
   "title": "Смета фиксируется в договоре",
   "text": "Цена в договоре окончательная. Дополнительные работы — только по вашему письменному согласию.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4.6\" y=\"2.8\" width=\"14.8\" height=\"18.4\" rx=\"1.4\"/><path d=\"M8.4 8h7.2M8.4 12h7.2M8.4 16h4.2\"/></svg>"
  },
  {
   "icon": "cube",
   "b": "",
   "title": "3D-проект до оплаты",
   "text": "Бесплатный 3D-проект за 2–3 дня. Видите объект в своём интерьере до того, как платите.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.6 20.5 7v10L12 21.4 3.5 17V7z\"/><path d=\"M3.5 7 12 11.5 20.5 7M12 11.5V21.4\"/></svg>"
  },
  {
   "icon": "truck",
   "b": "",
   "title": "Доставка и монтаж по России",
   "text": "Свои монтажные бригады в Москве и МО, отгрузка керамики в любой регион с упаковкой в жёсткий каркас.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.8 6.4h10.4v9.2H2.8zM13.2 9.6h4l3 3.2v2.8h-7z\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><circle cx=\"17.4\" cy=\"18\" r=\"2\"/></svg>"
  }
 ],
 "faq": [
  {
   "q": "Сколько стоит изразец?",
   "a": "От 1 424 ₽ за штуку за однотонную глазурь до 10 745 ₽ за изразец с ручной росписью. На квадратный метр обычно выходит от 60 000 до 200 000 ₽ в зависимости от типоразмера и декора. В калькуляторе выше можно прикинуть комплект под свою площадь."
  },
  {
   "q": "Сколько изразцов нужно на квадратный метр?",
   "a": "Зависит от типоразмера: 150×150 — около 44 штук, 200×200 — 25 штук, 200×250 — 20 штук, 100×100 — около 100. Точное количество считаем по раскладке с учётом углов и подрезки — раскладку делаем бесплатно."
  },
  {
   "q": "Чем изразец отличается от плитки?",
   "a": "Изразец — это керамика с румпой, коробчатым выступом на тыльной стороне. Румпа заполняется раствором и работает как теплоаккумулятор, поэтому изразцом облицовывают печи и камины. Обычная плитка плоская и от перегрева трескается."
  },
  {
   "q": "Можно ли класть изразцы на кухонный фартук?",
   "a": "Да, это один из самых частых заказов. Для фартука подходит любая коллекция, включая роспись: глазурь моется обычным средством, жир и копоть в неё не въедаются."
  },
  {
   "q": "Как долго изготавливают комплект?",
   "a": "4–8 недель. Формовка, сушка, первый обжиг, глазурь или роспись, второй обжиг — цикл ручной и его нельзя сжать без потери качества. Небольшие комплекты из складских коллекций отгружаем быстрее."
  },
  {
   "q": "Вы кладёте изразцы или только продаёте?",
   "a": "И то, и другое. По Москве и области монтируем сами. В регионы отгружаем комплект с раскладкой и инструкцией, консультируем вашего мастера по телефону. Плитку такой цены лучше не отдавать случайной бригаде — попросите нас проверить мастера."
  },
  {
   "q": "Что если что-то разобьётся при монтаже?",
   "a": "Мы всегда закладываем запас в комплект. Если элемента не хватит, доизготовим: формы и рецептура глазури хранятся, партия повторяется без расхождения по цвету."
  },
  {
   "q": "Отправляете в регионы?",
   "a": "Да, по всей России. Упаковываем в жёсткий каркас, груз страхуется. Стоимость доставки зависит от объёма и региона, обычно 12 000–25 000 ₽."
  }
 ],
 "gallery": [
  "img/001.webp",
  "img/002.webp",
  "img/003.webp",
  "img/004.webp",
  "img/005.webp",
  "img/006.webp",
  "img/007.webp",
  "img/008.webp",
  "img/009.webp",
  "img/010.webp",
  "img/011.webp",
  "img/012.webp",
  "img/013.webp",
  "img/014.webp",
  "img/015.webp",
  "img/016.webp",
  "img/017.webp",
  "img/018.webp",
  "img/019.webp",
  "img/020.webp",
  "img/021.webp",
  "img/022.webp",
  "img/023.webp",
  "img/024.webp"
 ]
};
