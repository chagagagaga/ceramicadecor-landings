/* Контент направления «Отопительные печи». Правится здесь — вёрстка и логика общие. */
window.LP = {
 "slug": "otopitelnye-pechi",
 "title": "Отопительные печи",
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
 "catalogStyle": "",
 "quiz": {
  "title": "Рассчитайте свою печь",
  "sub": "Соберите конфигурацию — пришлём смету в мессенджер. Без звонков и регистраций.",
  "note": "Пришлём смету и 3D-эскиз в мессенджер или расскажем по телефону — как удобнее.",
  "base": 0,
  "spread": 1.24,
  "turnkeyFactor": 1.8,
  "matchBy": null,
  "fields": [
   {
    "id": "height",
    "type": "range",
    "step": 1,
    "label": "Высота печи",
    "min": 1.2,
    "max": 2.8,
    "stepSize": 0.1,
    "dec": 1,
    "unit": "м",
    "pricePerUnit": 215000,
    "hint": "Чем выше печь, тем больше теплоотдающая поверхность и дольше держится тепло.",
    "def": 1.9
   },
   {
    "id": "type",
    "type": "radio",
    "step": 2,
    "label": "Тип печи",
    "options": [
     {
      "id": "heat",
      "label": "Только отопление",
      "k": 1
     },
     {
      "id": "cook",
      "label": "С варочной плитой",
      "hint": "Отапливает и готовит",
      "k": 1.18
     },
     {
      "id": "bench",
      "label": "С лежанкой",
      "hint": "Тёплая лежанка на массиве печи",
      "k": 1.45
     }
    ]
   },
   {
    "id": "extra",
    "type": "checks",
    "label": "Дополнить печь",
    "collapsed": true,
    "options": [
     {
      "id": "chimney",
      "label": "Дымоход с проходом кровли",
      "add": 72000
     },
     {
      "id": "niche",
      "label": "Ниши и печурки",
      "add": 88000
     },
     {
      "id": "wood",
      "label": "Дровница в облицовке",
      "add": 68000
     },
     {
      "id": "mount",
      "label": "Кладка ядра и монтаж",
      "add": 195000
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Отопительная печь Птицы",
   "collection": "Птицы",
   "desc": "Отопительная печь в облицовке «Птицы». Кладка ядра и облицовка под ключ.",
   "p1": 1370832,
   "p2": 0,
   "img": "img/01.webp",
   "photos": [
    "img/01.webp",
    "img/01-2.webp",
    "img/01-3.webp",
    "img/01-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_komplekt-izraztsovoj-plitki-ptitsy-dlya-otdelki-pechi-dekorativnaya-palitra-individualnaya/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Прованс",
   "collection": "Прованс",
   "desc": "Отопительная печь в облицовке «Прованс». Кладка ядра и облицовка под ключ.",
   "p1": 295243,
   "p2": 0,
   "img": "img/02.webp",
   "photos": [
    "img/02.webp",
    "img/02-2.webp",
    "img/02-3.webp",
    "img/02-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_oblitsovka-pechi-izraztsami-s-rospisyu-provans/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Арт Нуво, лазурная роспись",
   "collection": "Арт Нуво",
   "desc": "Отопительная печь в облицовке «Арт Нуво», лазурная роспись. Кладка ядра и облицовка под ключ.",
   "spec": {
    "weight": 218,
    "width": 1308,
    "height": 2768,
    "depth": 985
   },
   "p1": 876023,
   "p2": 0,
   "img": "img/03.webp",
   "photos": [
    "img/03.webp",
    "img/03-2.webp",
    "img/03-3.webp",
    "img/03-4.webp",
    "img/03-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_izraztsovaya-pech-art-nuvo-v-lvzurnoj-rospisi/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Усадьба",
   "collection": "Усадьба",
   "desc": "Отопительная печь в облицовке «Усадьба». Кладка ядра и облицовка под ключ.",
   "spec": {
    "width": 1283,
    "height": 2264,
    "depth": 868
   },
   "p1": 912750,
   "p2": 0,
   "img": "img/04.webp",
   "photos": [
    "img/04.webp",
    "img/04-2.webp",
    "img/04-3.webp",
    "img/04-4.webp",
    "img/04-5.webp",
    "img/04-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_oblitsovka-kamina-v-kollektsii-ptichki-s-pechnoj-dvertsej-5393/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Универсал",
   "collection": "Универсал",
   "desc": "Отопительная печь в облицовке «Универсал». Кладка ядра и облицовка под ключ.",
   "spec": {
    "width": 1390,
    "height": 2120,
    "depth": 930
   },
   "p1": 680401,
   "p2": 0,
   "img": "img/05.webp",
   "photos": [
    "img/05.webp",
    "img/05-2.webp",
    "img/05-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_oblitsovka-otopitelnoj-pechi-v-kollektsii-universal-i-topochnoj-dverkoj-vezuvij-9525/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Птички",
   "collection": "Птички",
   "desc": "Отопительная печь в облицовке «Птички». Кладка ядра и облицовка под ключ.",
   "spec": {
    "weight": 193,
    "width": 1425,
    "height": 2142,
    "depth": 565
   },
   "p1": 785852,
   "p2": 0,
   "img": "img/06.webp",
   "photos": [
    "img/06.webp",
    "img/06-2.webp",
    "img/06-3.webp",
    "img/06-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_izraztsovaya-kaminopech-v-izraztsah-ptichki-palitra-rospisi-lesnaya/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Арт Нуво",
   "collection": "Арт Нуво",
   "desc": "Отопительная печь в облицовке «Арт Нуво». Кладка ядра и облицовка под ключ.",
   "p1": 691369,
   "p2": 0,
   "img": "img/07.webp",
   "photos": [
    "img/07.webp",
    "img/07-2.webp",
    "img/07-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_izraztsovaya-pech-art-nuvo-v-krasnom-tsvete/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Модерн",
   "collection": "Модерн",
   "desc": "Отопительная печь в облицовке «Модерн». Кладка ядра и облицовка под ключ.",
   "spec": {
    "weight": 103,
    "width": 925,
    "height": 2650,
    "depth": 360
   },
   "p1": 375169,
   "p2": 0,
   "img": "img/08.webp",
   "photos": [
    "img/08.webp",
    "img/08-2.webp",
    "img/08-3.webp",
    "img/08-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_oblitsovka-pechi-izraztsami-modern/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Дорф",
   "collection": "Дорф",
   "desc": "Отопительная печь в облицовке «Дорф». Кладка ядра и облицовка под ключ.",
   "spec": {
    "weight": 349,
    "width": 1209,
    "height": 2202,
    "depth": 998
   },
   "p1": 1368434,
   "p2": 0,
   "img": "img/09.webp",
   "photos": [
    "img/09.webp",
    "img/09-2.webp",
    "img/09-3.webp",
    "img/09-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_oblitsovka-pechi-s-kaminnoj-dverkoj-svt-409-kollektsiya-dorf/",
   "size": "",
   "surface": "",
   "kind": ""
  },
  {
   "title": "Отопительная печь Неаполь",
   "collection": "Неаполь",
   "desc": "Отопительная печь в облицовке «Неаполь». Кладка ядра и облицовка под ключ.",
   "spec": {
    "width": 1352,
    "height": 3058,
    "depth": 572
   },
   "p1": 968320,
   "p2": 0,
   "img": "img/10.webp",
   "photos": [
    "img/10.webp",
    "img/10-2.webp",
    "img/10-3.webp",
    "img/10-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-pechi-v-interere/cd_otopitelnaya-pech-v-belom-tsvete-v-gladkoj-plitke-7500/",
   "size": "",
   "surface": "",
   "kind": ""
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
     "id": "Птицы",
     "label": "Птицы"
    },
    {
     "id": "Прованс",
     "label": "Прованс"
    },
    {
     "id": "Арт Нуво",
     "label": "Арт Нуво"
    },
    {
     "id": "Усадьба",
     "label": "Усадьба"
    },
    {
     "id": "Универсал",
     "label": "Универсал"
    },
    {
     "id": "Птички",
     "label": "Птички"
    },
    {
     "id": "Модерн",
     "label": "Модерн"
    },
    {
     "id": "Дорф",
     "label": "Дорф"
    },
    {
     "id": "Неаполь",
     "label": "Неаполь"
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Стальная печь из магазина",
  "goodTitle": "Изразцовая отопительная печь",
  "bad": [
   "Металл почти не запасает тепло: прогорели дрова — дом начинает остывать.",
   "Жёсткое инфракрасное тепло: рядом с печью жарко, в двух шагах уже прохладно.",
   "У стальной печи ограниченный ресурс: рано или поздно топка прогорает и меняется целиком.",
   "Выглядит как техника, а стоит в самой видной точке дома."
  ],
  "good": [
   "Массив печи набирает тепло и отдаёт его 8–12 часов после протопки.",
   "Керамика даёт мягкое ровное тепло — воздух не пересушивается.",
   "Печь на изразцах служит десятилетиями, отдельный элемент меняется точечно.",
   "Становится центром интерьера, а не бытовым прибором в углу."
  ],
  "media": "img/01.webp"
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
   "text": "Свои монтажные бригады в Москве и МО, отгрузка керамики в любой регион с упаковкой в жёсткий каркас.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.8 6.4h10.4v9.2H2.8zM13.2 9.6h4l3 3.2v2.8h-7z\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><circle cx=\"17.4\" cy=\"18\" r=\"2\"/></svg>"
  }
 ],
 "faq": [
  {
   "q": "Сколько стоит изразцовая отопительная печь?",
   "a": "Облицовка начинается от 295 243 ₽, сложные проекты с росписью — до 1 370 832 ₽. Под ключ с кладкой ядра и монтажом примерно в 1,8 раза дороже облицовки. Свою конфигурацию посчитайте в калькуляторе выше."
  },
  {
   "q": "Чем изразцовая печь лучше стальной?",
   "a": "Теплоёмкостью. Стальная печь греет, пока в ней горят дрова, и остывает за час. Изразцовая набирает тепло в массив и отдаёт его 8–12 часов — протопили утром и вечером, дом тёплый круглые сутки. Плюс керамика не пересушивает воздух."
  },
  {
   "q": "Какую площадь отапливает?",
   "a": "Печь высотой около двух метров держит 50–80 м² при нормальном утеплении. Если дом больше, ставят две печи или печь с системой воздуховодов — решение принимает печник на замере."
  },
  {
   "q": "Можно ли готовить на такой печи?",
   "a": "Да, если заложить варочную плиту. В калькуляторе это отдельный вариант. Плита ставится под чугунный настил, а сама печь при этом продолжает работать как отопительная."
  },
  {
   "q": "Нужен ли фундамент?",
   "a": "Да, печь с керамикой весит несколько тонн и требует собственного основания. По монолитной плите обычно ставим без доработок, по деревянному перекрытию нужно усиление — оценивает инженер на замере."
  },
  {
   "q": "Сколько времени занимает работа?",
   "a": "От заявки до сдачи — 3–4 месяца. Керамика изготавливается вручную, кладка ядра и монтаж на объекте — 1–3 недели, плюс первая неделя на замер и 3D-проект."
  },
  {
   "q": "Можно облицевать существующую печь?",
   "a": "Если ядро в хорошем состоянии и геометрия позволяет — да. Пришлите фото и размеры, печник даст честный ответ. Иногда дешевле переложить ядро, чем облицовывать печь с трещинами."
  },
  {
   "q": "Отправляете в регионы?",
   "a": "Да, керамику отгружаем по всей России с раскладкой и инструкцией. Кладку выполняет ваш печник — мы ведём его по проекту и консультируем."
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
  "img/08.webp",
  "img/09.webp",
  "img/10.webp"
 ]
};
