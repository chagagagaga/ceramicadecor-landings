/* Контент направления «Камины». Правится здесь — вёрстка и логика общие. */
window.LP = {
 "slug": "kaminy",
 "title": "Камины",
 "brand": {
  "phone": "8 (800) 555-80-32",
  "worktime": "Ежедневно 10:00–19:00",
  "address": "Москва · производство в Королёве",
  "site": "https://ceramicadecor.ru",
  "telegram": "+79950004488",
  "whatsapp": "79950004488",
  "maxUrl": "",
  "endpoint": "https://cd-lead.chagagagaga.workers.dev/lead",
  "beacon": "https://cd-lead.chagagagaga.workers.dev/beacon",
  "metrikaId": 0
 },
 "priceLabel1": "Облицовка",
 "priceNote": "Цена ориентировочная: итоговая зависит от размеров проёма, топки и объёма работ. Смету считаем бесплатно за 2–3 дня.",
 "priceFrom": true,
 "catalogStyle": "",
 "quiz": {
  "title": "Рассчитайте свой камин",
  "sub": "Соберите конфигурацию — пришлём смету в мессенджер. Без звонков и регистраций.",
  "note": "Пришлём смету и 3D-эскиз в мессенджер или расскажем по телефону — как удобнее.",
  "base": 0,
  "spread": 1.22,
  "turnkeyFactor": 1.95,
  "matchBy": {
   "field": "collection",
   "key": "collection"
  },
  "fields": [
   {
    "id": "width",
    "type": "range",
    "step": 1,
    "label": "Ширина портала",
    "min": 0.9,
    "max": 2.6,
    "stepSize": 0.1,
    "dec": 1,
    "unit": "м",
    "pricePerUnit": 260000,
    "hint": "Ширина готовой облицовки по фасаду. Стандартный пристенный камин — около 1,5 метра.",
    "def": 1.5
   },
   {
    "id": "type",
    "type": "radio",
    "step": 2,
    "label": "Тип камина",
    "row": true,
    "options": [
     {
      "id": "wood",
      "label": "Дровяной",
      "hint": "Нужен дымоход",
      "k": 1
     },
     {
      "id": "electric",
      "label": "Электрический",
      "hint": "Без дымохода",
      "k": 0.9
     },
     {
      "id": "bio",
      "label": "Биокамин",
      "hint": "Без дымохода",
      "k": 0.85
     }
    ]
   },
   {
    "id": "extra",
    "type": "checks",
    "label": "Дополнить камин",
    "collapsed": true,
    "hidePrices": true,
    "options": [
     {
      "id": "firebox",
      "label": "Каминная топка в комплект",
      "hint": "Astov, Hoxter, Spartherm",
      "add": 185000
     },
     {
      "id": "wood",
      "label": "Дровница в облицовке",
      "add": 72000
     },
     {
      "id": "shelf",
      "label": "Каминная полка из камня",
      "add": 64000
     },
     {
      "id": "podium",
      "label": "Подиум под камин",
      "add": 58000
     },
     {
      "id": "panno",
      "label": "Изразцовое панно",
      "hint": "Ручная роспись по вашему сюжету",
      "add": 145000
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Камин Альбион",
   "collection": "Альбион",
   "desc": "Классический белый камин Альбион с топкой LISEO CASTIRON. Изразцовая облицовка ручной работы в белоснежной цветовой гамме создаёт элегантный и утончённый образ.",
   "spec": {
    "weight": 218,
    "width": 1325,
    "height": 2535,
    "depth": 700
   },
   "p1": 767994,
   "p2": 1350000,
   "img": "img/01.webp",
   "photos": [
    "img/01.webp",
    "img/01-2.webp",
    "img/01-3.webp",
    "img/01-4.webp",
    "img/01-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_klassicheskij-belyj-kamin-albion-s-topkoj-liseo-castiron/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "full": "Классический белый камин Альбион с топкой LISEO CASTIRON. Изразцовая облицовка ручной работы в белоснежной цветовой гамме создаёт элегантный и утончённый образ. Камин гармонично вписывается в классические и неоклассические интерьеры."
  },
  {
   "title": "Камин Альбион, майоликовая глазурь",
   "collection": "Альбион",
   "desc": "Каминная облицовка коллекции «Альбион», майоликовая глазурь. Изразец ручной формовки, обжиг свыше 1100 °C.",
   "spec": {
    "weight": 175,
    "width": 1273,
    "height": 2528,
    "depth": 562
   },
   "p1": 722464,
   "p2": 1355786,
   "img": "img/02.webp",
   "photos": [
    "img/02.webp",
    "img/02-2.webp",
    "img/02-3.webp",
    "img/02-4.webp",
    "img/02-5.webp",
    "img/02-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-biokamina-izraztsami-albion-v-majolikovoj-glazuri/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Тюльпан",
   "collection": "Тюльпан",
   "desc": "Камин в облицовке Тюльпан с Г-образной топкой Экокамин Альфа 1000 RB. Рельефные изразцы с цветочным орнаментом в зелёных тонах. Г-образная топка позволяет наслаждаться видом огня с двух сторон.",
   "spec": {
    "weight": 243,
    "width": 1377,
    "height": 2499,
    "depth": 789
   },
   "p1": 1095310,
   "p2": 1850000,
   "img": "img/03.webp",
   "photos": [
    "img/03.webp",
    "img/03-2.webp",
    "img/03-3.webp",
    "img/03-4.webp",
    "img/03-5.webp",
    "img/03-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-oblitsovke-tyulpan-s-g-obraznoj-topkoj-ekokamin-alfa-1000-rb/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Тюльпан, Арктика",
   "collection": "Тюльпан",
   "desc": "Комплект каминной облицовки Тюльпан в цвете Арктика. Белоснежные изразцы с рельефными тюльпанами создают нежный и воздушный образ камина. Идеально подходит для светлых интерьеров.",
   "p1": 793469,
   "p2": 1150000,
   "img": "img/04.webp",
   "photos": [
    "img/04.webp",
    "img/04-2.webp",
    "img/04-3.webp",
    "img/04-4.webp",
    "img/04-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_komplekt-kaminnoj-oblitsovki-tyulpan-tsvet-arktika/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Версаль",
   "collection": "Версаль",
   "desc": "Изразцовый камин Версаль в цвете Арктическая лагуна. Облицовка с детализированным орнаментом в насыщенных лазурных тонах. Вдохновлен интерьерами французских дворцов. Каждый изразец изготовлен вручную.",
   "p1": 1001758,
   "p2": 2084728,
   "img": "img/05.webp",
   "photos": [
    "img/05.webp",
    "img/05-2.webp",
    "img/05-3.webp",
    "img/05-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-versal-v-sinem-tsvete/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Бристоль",
   "collection": "Бристоль",
   "desc": "Камин с П-образной топкой в облицовке «Бристоль» в цвете Чёрная ночь. Тёмные изразцы с глубокой глазурью создают драматичный и стильный образ. П-образная топка обеспечивает обзор огня с трёх сторон.",
   "spec": {
    "weight": 236,
    "width": 1260,
    "height": 2745,
    "depth": 800
   },
   "p1": 969760,
   "p2": 1950000,
   "img": "img/06.webp",
   "photos": [
    "img/06.webp",
    "img/06-2.webp",
    "img/06-3.webp",
    "img/06-4.webp",
    "img/06-5.webp",
    "img/06-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-s-p-obraznoj-topkoj-v-oblitsovke-bristol-v-tsvete-chernaya-noch/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Дорф",
   "collection": "Дорф",
   "desc": "Декоративный камин с очагом Airtone Andalle 1000, облицован изразцами коллекции Дорф. Специально разработанный проект для ресторанного интерьера. Масштабная облицовка от пола до потолка создаёт величественный акцент.",
   "spec": {
    "weight": 432,
    "width": 1680,
    "height": 3691,
    "depth": 740
   },
   "p1": 1800849,
   "p2": 2650000,
   "img": "img/07.webp",
   "photos": [
    "img/07.webp",
    "img/07-2.webp",
    "img/07-3.webp",
    "img/07-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_dekorativnyj-kamin-s-ochagom-airtone-andalle-1000-oblitsovan-izraztsami-kollektsii-dorf-spetsialno-dlya-restorana-5013/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Арт Нуво",
   "collection": "Арт Нуво",
   "desc": "Комплект каминной облицовки Арт Нуво в фисташковой декоративной палитре. Изящные линии модерна в сочетании с нежными зелёными тонами. Вдохновлён стилем ар-нуво начала XX века.",
   "p1": 612738,
   "p2": 1433372,
   "img": "img/09.webp",
   "photos": [
    "img/09.webp",
    "img/09-2.webp",
    "img/09-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-art-nuvo-1/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Птицы",
   "collection": "Птицы",
   "desc": "Изразцовый камин с топкой Астов П2С в облицовке Птицы. Ручная роспись с изображением птиц в природном окружении. Каждый изразец — это маленькое произведение искусства.",
   "p1": 1464041,
   "p2": 2552550,
   "img": "img/10.webp",
   "photos": [
    "img/10.webp",
    "img/10-2.webp",
    "img/10-3.webp",
    "img/10-4.webp",
    "img/10-5.webp",
    "img/10-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-astov-p2s-v-oblitsovke-ptitsy/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Византия",
   "collection": "Византия",
   "desc": "Изразцовый камин Византия в росписи Олива. Богатый орнамент, вдохновлённый византийским искусством, выполнен в тёплых оливковых тонах. Сложная многослойная роспись с золотистыми акцентами.",
   "p1": 1426640,
   "p2": 2241366,
   "img": "img/11.webp",
   "photos": [
    "img/11.webp",
    "img/11-2.webp",
    "img/11-3.webp",
    "img/11-4.webp",
    "img/11-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-vizantiya-v-rospisi-oliva/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Луна",
   "collection": "Луна",
   "desc": "Камин в классическом стиле из коллекции Луна с топкой Spartherm Linear 4S Arte. Элегантные изразцы с лунным орнаментом в сочетании с немецкой топкой. Утончённый дизайн для изысканных интерьеров.",
   "spec": {
    "weight": 194,
    "width": 1122,
    "height": 2657,
    "depth": 864
   },
   "p1": 920251,
   "p2": 1850000,
   "img": "img/12.webp",
   "photos": [
    "img/12.webp",
    "img/12-2.webp",
    "img/12-3.webp",
    "img/12-4.webp",
    "img/12-5.webp",
    "img/12-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-klassicheskom-stile-iz-kollektsii-luna-i-topkoj-spartherm-linear-4s-arte-1672/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Универсал",
   "collection": "Универсал",
   "desc": "Каминная облицовка коллекции «Универсал». Изразец ручной формовки, обжиг свыше 1100 °C.",
   "spec": {
    "weight": 117,
    "width": 1658,
    "height": 1876,
    "depth": 295
   },
   "p1": 381912,
   "p2": 950000,
   "img": "img/13.webp",
   "photos": [
    "img/13.webp",
    "img/13-2.webp",
    "img/13-3.webp",
    "img/13-4.webp",
    "img/13-5.webp",
    "img/13-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kaminnyj-portal-universal-tsvet-arktika/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Универсал, угловой",
   "collection": "Универсал",
   "desc": "Облицовка углового камина изразцами Универсал. Топка с двумя стёклами обеспечивает широкий обзор огня. Минималистичные изразцы подчеркнуты глазурью благородного зелёного цвета с разнотоном.",
   "spec": {
    "weight": 108,
    "width": 1348,
    "height": 2022,
    "depth": 751
   },
   "p1": 356866,
   "p2": 950000,
   "img": "img/14.webp",
   "photos": [
    "img/14.webp",
    "img/14-2.webp",
    "img/14-3.webp",
    "img/14-4.webp",
    "img/14-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-uglovogo-kamina-izraztsami-universal/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Голландия",
   "collection": "Голландия",
   "desc": "Изразцовый камин коллекции «Голландия» с дровником и ручной росписью",
   "spec": {
    "weight": 136,
    "width": 1454,
    "height": 1418,
    "depth": 618
   },
   "p1": 734935,
   "p2": 1220000,
   "img": "img/15.webp",
   "photos": [
    "img/15.webp",
    "img/15-2.webp",
    "img/15-3.webp",
    "img/15-4.webp",
    "img/15-5.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izraztsovyj-kamin-kollektsii-gollandiya-s-drovnikom-i-ruchnoj-rospisyu/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Браво",
   "collection": "Браво",
   "desc": "Камин в облицовке изразцами коллекции Браво с росписью. Яркий и выразительный дизайн с авторской росписью. Каждый камин этой коллекции уникален благодаря ручной работе мастеров.",
   "spec": {
    "weight": 165,
    "width": 1310,
    "height": 1510,
    "depth": 760
   },
   "p1": 835350,
   "p2": 1580000,
   "img": "img/16.webp",
   "photos": [
    "img/16.webp",
    "img/16-2.webp",
    "img/16-3.webp",
    "img/16-4.webp",
    "img/16-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-oblitsovke-izraztsami-kollektsii-bravo-s-rospisyu/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Сохо",
   "collection": "Сохо",
   "desc": "Облицовка камина до полки с дровниками по бокам в коллекции Сохо. Современный и функциональный дизайн: облицовка доходит до каминной полки, а по бокам расположены дровники. Стильное решение для современных интерьеров.",
   "spec": {
    "weight": 309,
    "width": 2620,
    "height": 1820,
    "depth": 760
   },
   "p1": 1712668,
   "p2": 2830000,
   "img": "img/17.webp",
   "photos": [
    "img/17.webp",
    "img/17-2.webp",
    "img/17-3.webp",
    "img/17-4.webp",
    "img/17-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-kamina-do-polki-s-drovnikami-po-bokam-v-kollektsii-soho-6749/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Усадьба",
   "collection": "Усадьба",
   "desc": "Изразцовый камин Усадьба с призматической угловой топкой. Рельефные изразцы ручной формовки в традиционном стиле русской усадьбы. Призматическая топка и практичные полки создают объемную архитектурную композицию камина.",
   "spec": {
    "weight": 172,
    "width": 1390,
    "height": 2370,
    "depth": 336
   },
   "p1": 875523,
   "p2": 1470000,
   "img": "img/18.webp",
   "photos": [
    "img/18.webp",
    "img/18-3.webp",
    "img/18-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-usadba-s-podiumami-i-prizmatichnoj-uglovoj-topkoj/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Птички",
   "collection": "Птички",
   "desc": "Каминная облицовка Птички в декоративной палитре Лесная. Изразцы с миниатюрными птичками среди растительного орнамента в зелёных лесных тонах. Создаёт атмосферу природной гармонии.",
   "p1": 808246,
   "p2": 1450000,
   "img": "img/19.webp",
   "photos": [
    "img/19.webp",
    "img/19-2.webp",
    "img/19-3.webp",
    "img/19-4.webp",
    "img/19-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kaminnaya-oblitsovka-ptichki-dekorativnaya-palitra-lesnaya/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Элеганс",
   "collection": "Элеганс",
   "desc": "Комплект каминной облицовки Элеганс в цвете Лесной Туман. Изысканные изразцы с мягкими приглушёнными тонами, напоминающими утренний туман в лесу. Идеальный выбор для создания спокойной и расслабляющей атмосферы.",
   "p1": 949823,
   "p2": 1945720,
   "img": "img/20.webp",
   "photos": [
    "img/20.webp",
    "img/20-2.webp",
    "img/20-3.webp",
    "img/20-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-elegans-v-glazuri-lesnoj-tuman/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Минималист",
   "collection": "Минималист",
   "desc": "Каминная облицовка в стиле минимализм. Чистые линии и лаконичные формы без лишнего декора. Идеальный выбор для современных интерьеров, где ценится сдержанность и функциональность.",
   "p1": 907913,
   "p2": 1367144,
   "img": "img/21.webp",
   "photos": [
    "img/21.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Венская",
   "collection": "Венская",
   "desc": "Электрокамин белого цвета в изразцах коллекции Венская. Элегантная облицовка в венском стиле для электрокамина. Белоснежные изразцы с утончённым рельефом создают образ без необходимости дымохода.",
   "p1": 810963,
   "p2": 1380000,
   "img": "img/22.webp",
   "photos": [
    "img/22.webp",
    "img/22-2.webp",
    "img/22-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/portaly-dlya-elektrokamina-v-interere/cd_elektrokamin-belogo-tsveta-v-izraztsah-kollektsii-venskaya-99999/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Венская, классический",
   "collection": "Венская",
   "desc": "Каминная облицовка коллекции «Венская», классический. Изразец ручной формовки, обжиг свыше 1100 °C.",
   "spec": {
    "width": 1618,
    "height": 3566,
    "depth": 708
   },
   "p1": 2100676,
   "p2": 3130000,
   "img": "img/23.webp",
   "photos": [
    "img/23.webp",
    "img/23-2.webp",
    "img/23-3.webp",
    "img/23-4.webp",
    "img/23-5.webp",
    "img/23-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_klassicheskij-kamin-v-oblitsovke-iz-kollektsii-dorf-s-topkoj-brunner-stil-kamin-classic-6282/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
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
     "label": "до 0,7 млн",
     "min": 0,
     "max": 700000
    },
    {
     "id": "p1",
     "label": "0,7–1,5 млн",
     "min": 700000,
     "max": 1500000
    },
    {
     "id": "p2",
     "label": "1,5–3 млн",
     "min": 1500000,
     "max": 3000000
    },
    {
     "id": "p3",
     "label": "от 3 млн",
     "min": 3000000,
     "max": 1000000000
    }
   ]
  },
  {
   "key": "collection",
   "label": "Коллекция",
   "field": "collection",
   "options": [
    {
     "id": "Альбион",
     "label": "Альбион"
    },
    {
     "id": "Тюльпан",
     "label": "Тюльпан"
    },
    {
     "id": "Версаль",
     "label": "Версаль"
    },
    {
     "id": "Бристоль",
     "label": "Бристоль"
    },
    {
     "id": "Дорф",
     "label": "Дорф"
    },
    {
     "id": "Арт Нуво",
     "label": "Арт Нуво"
    },
    {
     "id": "Птицы",
     "label": "Птицы"
    },
    {
     "id": "Византия",
     "label": "Византия"
    },
    {
     "id": "Луна",
     "label": "Луна"
    },
    {
     "id": "Универсал",
     "label": "Универсал"
    },
    {
     "id": "Голландия",
     "label": "Голландия"
    },
    {
     "id": "Браво",
     "label": "Браво"
    },
    {
     "id": "Сохо",
     "label": "Сохо"
    },
    {
     "id": "Усадьба",
     "label": "Усадьба"
    },
    {
     "id": "Птички",
     "label": "Птички"
    },
    {
     "id": "Элеганс",
     "label": "Элеганс"
    },
    {
     "id": "Минималист",
     "label": "Минималист"
    },
    {
     "id": "Венская",
     "label": "Венская"
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Готовая облицовка из магазина",
  "goodTitle": "Изразцы Ceramica Decor",
  "bad": [
   "Мрамор и гипс почти не держат тепло: камин греет, пока горит, а дальше остывает вместе с комнатой.",
   "Типовой портал редко совпадает с проёмом — чаще подгоняют стену под камин, а не наоборот.",
   "Одинаковые облицовки стоят в тысячах квартир: выделиться таким камином не выйдет.",
   "Гипс легко скалывается, и след от скола обычно заметен даже после реставрации."
  ],
  "good": [
   "Изразец — это глиняный аккумулятор: печь отдаёт тепло часами после протопки.",
   "Облицовка делается под ваш проём и вашу топку, а не наоборот.",
   "Коллекция, цвет глазури и сюжет росписи подбираются под интерьер.",
   "Керамика с обжигом свыше 1100 °C, гарантия 50 лет, отдельный изразец заменяется точечно."
  ],
  "media": "img/20.webp",
  "mediaHi": "../assets/img/why/kaminy.webp 1596w"
 },
 "steps": [
  {
   "title": "Проектирование и дизайн",
   "img": "01-proekt",
   "text": "Всё начинается с проекта. Мы разрабатываем архитектуру камина, подбираем материалы, создаём 3D-визуализацию для утверждения."
  },
  {
   "title": "Изготовление изразцов",
   "img": "02-izrazcy",
   "text": "Каждый элемент формуется и расписывается вручную. Проходит несколько технологических операций и двукратный обжиг при температуре свыше 1100 °C."
  },
  {
   "title": "Монтаж конструктива",
   "img": "03-konstruktiv",
   "text": "Строительство печи или установка топки и дымохода камина."
  },
  {
   "title": "Монтаж облицовки",
   "img": "04-oblicovka",
   "text": "Финальный этап — облицовка изразцами. Каждый элемент подгоняется вручную, создавая единое полотно."
  }
 ],
 "guarantees": [
  {
   "icon": "shield",
   "b": "",
   "title": "Гарантия 50 лет на облицовку",
   "text": "Обжиг при температуре свыше 1100 °C. Глазурь не выцветает и не трескается от перепадов температуры.",
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
   "text": "Бесплатный 3D-проект за 2–3 дня. Покажем, как комплекс впишется в ваш интерьер, до оплаты.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.6 20.5 7v10L12 21.4 3.5 17V7z\"/><path d=\"M3.5 7 12 11.5 20.5 7M12 11.5V21.4\"/></svg>"
  },
  {
   "icon": "truck",
   "b": "",
   "title": "Доставка и монтаж по России",
   "text": "Свои монтажные бригады, отгрузка керамики в любой регион с упаковкой в жёсткий каркас.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.8 6.4h10.4v9.2H2.8zM13.2 9.6h4l3 3.2v2.8h-7z\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><circle cx=\"17.4\" cy=\"18\" r=\"2\"/></svg>"
  }
 ],
 "faq": [
  {
   "q": "Сколько стоит изразцовый камин?",
   "a": "Облицовка начинается от 356 000 ₽, комплект под ключ с топкой и монтажом — от 950 000 ₽. Разброс большой, потому что художественная роспись почти вдвое дороже однотонной глазури. Посчитайте свою конфигурацию в калькуляторе выше."
  },
  {
   "q": "Чем изразцовый камин лучше мраморного или гипсового?",
   "a": "Теплотехникой. Изразец — это полая глиняная керамика с румпой, она накапливает тепло и отдаёт его несколько часов после того, как огонь погас. Мрамор и гипс так не умеют: они только декор. Плюс керамика не боится перегрева у топки."
  },
  {
   "q": "Топку вы поставляете или её надо покупать отдельно?",
   "a": "Можем и так, и так. Работаем с Astov, Hoxter, Spartherm — подбираем топку под размер помещения и включаем в смету. Если топка уже куплена, делаем облицовку под неё: пришлите модель, посчитаем размеры."
  },
  {
   "q": "У меня электрокамин или биокамин — облицовка подойдёт?",
   "a": "Да, и это частый запрос в квартирах, где нет дымохода. Электро и био дешевле дровяного: не нужны дымоход, разделка и противопожарные отступы. В калькуляторе выше переключите тип и увидите разницу."
  },
  {
   "q": "Сколько ждать изготовления?",
   "a": "От заявки до сдачи — 3–4 месяца. Каждый изразец формуется вручную, сушится, обжигается, расписывается и обжигается повторно — ускорить обжиг нельзя, на этом ломается качество глазури. Монтаж на объекте занимает 3–7 дней."
  },
  {
   "q": "Можно поставить камин в готовый интерьер, не разрушая ремонт?",
   "a": "Обычно да. На замере инженер смотрит перекрытия, дымоход и возможность подвести воздух. Электрический и биокамин ставятся почти в любой готовый интерьер, дровяной требует дымохода и противопожарной разделки."
  },
  {
   "q": "Что с гарантией?",
   "a": "50 лет на керамику: глазурь не выцветает и не трескается. На монтажные работы — гарантия по договору. На топку действует гарантия производителя, мы официальный партнёр."
  },
  {
   "q": "Отправляете в регионы?",
   "a": "Да, отгружаем по всей России в жёстком каркасе с раскладкой и инструкцией. Монтаж в этом случае выполняет ваш печник — мы консультируем его по телефону на каждом этапе."
  }
 ],
 "gallery": [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
  "img/06.webp",
  "img/07.webp",
  "img/09.webp",
  "img/10.webp",
  "img/11.webp",
  "img/12.webp",
  "img/13.webp",
  "img/14.webp",
  "img/15.webp",
  "img/16.webp",
  "img/17.webp",
  "img/18.webp",
  "img/19.webp",
  "img/20.webp",
  "img/21.webp",
  "img/22.webp",
  "img/23.webp"
 ]
};
