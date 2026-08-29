/* Контент направления «Барбекю-комплексы». Правится здесь — вёрстка и логика общие. */
window.LP = {
 "slug": "barbekyu-kompleksy",
 "title": "Барбекю-комплексы",
 "brand": {
  "phone": "+7 (495) 229-30-46",
  "worktime": "Ежедневно 9:00–21:00",
  "address": "Москва · производство в Королёве",
  "site": "https://ceramicadecor.ru",
  "whatsapp": "",
  "telegram": "",
  "maxUrl": "",
  "endpoint": "",
  "metrikaId": 0
 },
 "priceLabel1": "Облицовка",
 "quiz": {
  "title": "Рассчитайте свой комплекс",
  "sub": "Минута — и вы знаете вилку цены. Без звонков и регистраций.",
  "note": "Вилка, а не финальная цена: точную смету считаем после замера и согласования 3D-проекта.",
  "base": 0,
  "spread": 1.25,
  "turnkeyFactor": 2.0,
  "matchBy": {
   "field": "collection",
   "key": "collection"
  },
  "fields": [
   {
    "id": "front",
    "type": "range",
    "step": 1,
    "label": "Длина по фронту",
    "min": 2,
    "max": 8,
    "stepSize": 0.5,
    "dec": 1,
    "unit": "м",
    "pricePerUnit": 180000,
    "hint": "Суммарная ширина всех модулей. Если сомневаетесь — 4 метра это стандартный комплекс с мангалом и казаном.",
    "def": 4
   },
   {
    "id": "place",
    "type": "radio",
    "step": 2,
    "label": "Где стоит комплекс",
    "row": true,
    "options": [
     {
      "id": "terrace",
      "label": "Открытая терраса",
      "k": 1
     },
     {
      "id": "pavilion",
      "label": "Беседка с крышей",
      "k": 1.1
     },
     {
      "id": "outdoor",
      "label": "Отдельно на участке",
      "k": 1.2
     }
    ]
   },
   {
    "id": "collection",
    "type": "radio",
    "step": 3,
    "label": "Коллекция облицовки",
    "options": [
     {
      "id": "Альбион",
      "label": "Классическая глазурь",
      "hint": "Альбион, Тюльпан, Азулежу",
      "k": 1
     },
     {
      "id": "Версаль",
      "label": "Рельеф и майолика",
      "hint": "Версаль, Элеганс, Дорф",
      "k": 1.5
     },
     {
      "id": "Птицы",
      "label": "Художественная роспись",
      "hint": "Птицы, Византия, Сценки",
      "k": 2.2
     }
    ]
   },
   {
    "id": "modules",
    "type": "checks",
    "label": "Модули комплекса",
    "collapsed": true,
    "options": [
     {
      "id": "mangal",
      "label": "Мангал",
      "hint": "Основа комплекса",
      "add": 180000,
      "def": true
     },
     {
      "id": "kazan",
      "label": "Печь под казан",
      "add": 120000
     },
     {
      "id": "smoker",
      "label": "Коптильня",
      "add": 140000
     },
     {
      "id": "tandoor",
      "label": "Тандыр",
      "add": 190000
     },
     {
      "id": "sink",
      "label": "Мойка с тумбой",
      "add": 95000
     },
     {
      "id": "top",
      "label": "Каменная столешница",
      "add": 110000
     },
     {
      "id": "wood",
      "label": "Дровница",
      "add": 60000
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Альбион",
   "collection": "Альбион",
   "desc": "Зона барбекю с мангалом и казаном в загородном доме коллекции \"Альбион\" арт.6127",
   "p1": 1368000,
   "p2": 3020000,
   "img": "img/01.webp",
   "photos": [
    "img/01.webp",
    "img/01-2.webp",
    "img/01-3.webp",
    "img/01-4.webp",
    "img/01-5.webp",
    "img/01-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_zona-barbekyu-s-mangalom-i-kazanom-v-zagorodnom-dome-kollektsii-albion-6127/",
   "spec": "3,7 × 2,8 м · 423 кг"
  },
  {
   "title": "Облицовка маленького печного комплекса с мангалом. 6261",
   "collection": "Альбион",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 1194000,
   "p2": 2890000,
   "img": "img/02.webp",
   "photos": [
    "img/02.webp",
    "img/02-2.webp",
    "img/02-3.webp",
    "img/02-4.webp",
    "img/02-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_oblitsovka-malenkogo-pechnogo-kompleksa-s-mangalom-6261/",
   "spec": "3,2 × 2,9 м · 386 кг"
  },
  {
   "title": "Версаль",
   "collection": "Версаль",
   "desc": "Барбекю комплекс в изразцовой облицовке Версаль",
   "p1": 3434000,
   "p2": 6355000,
   "img": "img/03.webp",
   "photos": [
    "img/03.webp",
    "img/03-2.webp",
    "img/03-3.webp",
    "img/03-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_letnyaya-kuhnya-barbekyu-v-oblitsovke-versal/",
   "spec": ""
  },
  {
   "title": "Летняя кухня \"Версаль\", цвет: Болотный 1311",
   "collection": "Версаль",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 1628000,
   "p2": 2190000,
   "img": "img/04.webp",
   "photos": [
    "img/04.webp",
    "img/04-2.webp",
    "img/04-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_letnyaya-kuhnya-versal-tsvet-bolotnyj-1311/",
   "spec": "2,1 × 2,1 м · 382 кг"
  },
  {
   "title": "Летняя кухня в облицовке изразцами коллекции Версаль, цвет: Синий",
   "collection": "Версаль",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 4243000,
   "p2": 7893000,
   "img": "img/05.webp",
   "photos": [
    "img/05.webp",
    "img/05-2.webp",
    "img/05-3.webp",
    "img/05-4.webp",
    "img/05-5.webp",
    "img/05-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_letnyaya-kuhnya-v-oblitsovke-izraztsami-kollektsii-versal-tsvet-sinij/",
   "spec": "4,9 × 3,0 м · 981 кг"
  },
  {
   "title": "Тюльпан",
   "collection": "Тюльпан",
   "desc": "Белый мангал в облицовке изразцами коллекции Тюльпан.",
   "p1": 1172000,
   "p2": 2610000,
   "img": "img/06.webp",
   "photos": [
    "img/06.webp",
    "img/06-2.webp",
    "img/06-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_belyj-mangal-v-oblitsovke-izraztsami-kollektsii-tyulpan-7757/",
   "spec": "1,8 × 2,5 м"
  },
  {
   "title": "Дорф",
   "collection": "Дорф",
   "desc": "Эксклюзивная кухня с мангалом в изразцовой облицовке",
   "p1": 4629000,
   "p2": 8184000,
   "img": "img/07.webp",
   "photos": [
    "img/07.webp",
    "img/07-2.webp",
    "img/07-3.webp",
    "img/07-4.webp",
    "img/07-5.webp",
    "img/07-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_eksklyuzivnaya-kuhnya-s-mangalom-v-izraztsovoj-oblitsovke-5268/",
   "spec": ""
  },
  {
   "title": "Барбекю комплекс в коллекции Дорф с мангалом и дровником. 5397",
   "collection": "Дорф",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 1658000,
   "p2": 2820000,
   "img": "img/08.webp",
   "photos": [
    "img/08.webp",
    "img/08-2.webp",
    "img/08-3.webp",
    "img/08-4.webp",
    "img/08-5.webp",
    "img/08-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_barbekyu-kompleks-v-kollektsii-dorf-s-mangalom-i-drovnikom-5397/",
   "spec": "3,3 × 2,7 м · 378 кг"
  },
  {
   "title": "Птички",
   "collection": "Птички",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 1159000,
   "p2": 2140000,
   "img": "img/09.webp",
   "photos": [
    "img/09.webp",
    "img/09-2.webp",
    "img/09-3.webp",
    "img/09-4.webp",
    "img/09-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_barbekyu-kompleks-v-yarkoj-oblitsovke-ptichki-3548/",
   "spec": "3,1 × 2,0 м · 253 кг"
  },
  {
   "title": "Печной комплекс с мангалом и печью под казан в облицовке изразцами кол",
   "collection": "Птички",
   "desc": "Печной комплекс с мангалом и печью под казан в облицовке изразцами коллекции Элеганс и Птички.",
   "p1": 1778000,
   "p2": 2940000,
   "img": "img/10.webp",
   "photos": [
    "img/10.webp",
    "img/10-2.webp",
    "img/10-3.webp",
    "img/10-4.webp",
    "img/10-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_pechnoj-kompleks-s-mangalom-i-pechyu-pod-kazan-v-oblitsovke-izraztsami-kollektsii--8075/",
   "spec": "4,0 × 2,5 м"
  },
  {
   "title": "Птицы",
   "collection": "Птицы",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 3748000,
   "p2": 5750000,
   "img": "img/11.webp",
   "photos": [
    "img/11.webp",
    "img/11-2.webp",
    "img/11-3.webp",
    "img/11-4.webp",
    "img/11-5.webp",
    "img/11-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_pechnoj-kompleks-iz-kirpicha-v-kollektsii-ptichki-7676/",
   "spec": "3,0 × 2,9 м · 673 кг"
  },
  {
   "title": "Византия",
   "collection": "Византия",
   "desc": "Летняя кухня в изразцовой облицовке Византия от CeramicaDecor",
   "p1": 830000,
   "p2": 2497000,
   "img": "img/12.webp",
   "photos": [
    "img/12.webp",
    "img/12-2.webp",
    "img/12-3.webp",
    "img/12-4.webp",
    "img/12-5.webp"
   ],
   "url": "https://ceramicadecor.ru/izraztsovye-pechi/cd_letnyaya-kuhnya-v-izraztsovoj-oblitsovke-vizantiya/",
   "spec": ""
  },
  {
   "title": "Облицовка «Византия»",
   "collection": "Византия",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 7302000,
   "p2": 9430000,
   "img": "img/13.webp",
   "photos": [
    "img/13.webp",
    "img/13-2.webp",
    "img/13-3.webp",
    "img/13-4.webp",
    "img/13-5.webp",
    "img/13-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_oblitsovka-pechnogo-kompleksa-s-vysokim-otkrytym-kaminom-izraztsami-vizantiya-7268/",
   "spec": ""
  },
  {
   "title": "Изразцовая облицовка Византия для печного комплекса",
   "collection": "Византия",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 5066000,
   "p2": 9814000,
   "img": "img/14.webp",
   "photos": [
    "img/14.webp",
    "img/14-2.webp",
    "img/14-3.webp",
    "img/14-4.webp",
    "img/14-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_izraztsovaya-oblitsovka-vizantiya-dlya-pechnogo-kompleksa/",
   "spec": ""
  },
  {
   "title": "Азулежу",
   "collection": "Азулежу",
   "desc": "Мангал на кухне в изразцах из коллекции Азулежу.",
   "p1": 649000,
   "p2": 1320000,
   "img": "img/15.webp",
   "photos": [
    "img/15.webp",
    "img/15-2.webp",
    "img/15-3.webp",
    "img/15-4.webp",
    "img/15-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_mangal-na-kuhne-v-izraztsah-iz-kollektsii-azulezhu-7094/",
   "spec": "2,1 × 2,2 м"
  },
  {
   "title": "Элеганс",
   "collection": "Элеганс",
   "desc": "Барбекю-комплекс в изразцовой облицовке: керамика своего производства, монтаж под ключ.",
   "p1": 3014000,
   "p2": 7560000,
   "img": "img/16.webp",
   "photos": [
    "img/16.webp",
    "img/16-2.webp",
    "img/16-3.webp",
    "img/16-4.webp",
    "img/16-5.webp",
    "img/16-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_oblitsovka-gotovogo-pechnogo-kompleksa-s-mangalom-pechyu-i-plitoj-6514/",
   "spec": "4,4 × 2,8 м · 653 кг"
  },
  {
   "title": "Летняя кухня в изразцовой облицовке «Элеганс» со столешницей из гранит",
   "collection": "Элеганс",
   "desc": "Летняя кухня в изразцовой облицовке «Элеганс» со столешницей из гранита. 4100",
   "p1": 863000,
   "p2": 1880000,
   "img": "img/17.webp",
   "photos": [
    "img/17.webp",
    "img/17-2.webp",
    "img/17-3.webp",
    "img/17-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_letnyaya-kuhnya-v-izraztsovoj-oblitsovke-elegans-so-stoleshnitsej-iz-granita-4100/",
   "spec": "2,2 × 2,7 м · 211 кг"
  },
  {
   "title": "Сценки",
   "collection": "Сценки",
   "desc": "Барбекю комплекс в изразцовой облицовке с художественной росписью \"Птицы\"",
   "p1": 1759000,
   "p2": 2560000,
   "img": "img/18.webp",
   "photos": [
    "img/18.webp",
    "img/18-2.webp",
    "img/18-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_barbekyu-kompleks-v-izraztsovoj-oblitsovke-s-hudozhestvennoj-rospisyu-ptitsy/",
   "spec": ""
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
     "label": "До 700 тыс",
     "min": 0,
     "max": 700000
    },
    {
     "id": "p1",
     "label": "700 тыс – 1,5 млн",
     "min": 700000,
     "max": 1500000
    },
    {
     "id": "p2",
     "label": "1,5 – 3 млн",
     "min": 1500000,
     "max": 3000000
    },
    {
     "id": "p3",
     "label": "От 3 млн",
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
     "id": "Версаль",
     "label": "Версаль"
    },
    {
     "id": "Тюльпан",
     "label": "Тюльпан"
    },
    {
     "id": "Дорф",
     "label": "Дорф"
    },
    {
     "id": "Птички",
     "label": "Птички"
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
     "id": "Азулежу",
     "label": "Азулежу"
    },
    {
     "id": "Элеганс",
     "label": "Элеганс"
    },
    {
     "id": "Сценки",
     "label": "Сценки"
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Кирпич и штукатурка",
  "goodTitle": "Керамика CeramicaDecor",
  "bad": [
   "Через две зимы штукатурка идёт трещинами: улица, перепад от −30 до +400 °C.",
   "Кирпич впитывает жир и копоть, отмыть нельзя — комплекс темнеет за сезон.",
   "Каждый комплекс уникален только на словах: у соседа будет такой же.",
   "Гарантию на кладку под открытым небом никто не даёт."
  ],
  "good": [
   "Обжиг при 1000 °C: керамика не боится ни мороза, ни жара от углей.",
   "Глазурь моется тряпкой — жир и копоть не въедаются в поверхность.",
   "Своя формовка и роспись: коллекцию и цвет подбираем под ваш дом.",
   "Гарантия 50 лет на керамику, смета зафиксирована в договоре."
  ],
  "media": "img/02.webp"
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
   "q": "Сколько стоит барбекю-комплекс под ключ?",
   "a": "Облицовка начинается от 649 000 ₽, под ключ с основанием и монтажом — от 1 320 000 ₽. Итог зависит от длины комплекса, набора модулей и коллекции: художественная роспись дороже классической глазури примерно вдвое. Точную смету считаем после замера, 3D-проект бесплатный."
  },
  {
   "q": "Керамика переживёт зиму на улице?",
   "a": "Да, для этого её и обжигают при 1000 °C. Мы работаем с морозостойкой керамикой, которая держит цикл от −30 до +400 °C. Штукатурка и обычная плитка в таком режиме отваливаются за пару сезонов, изразец — нет."
  },
  {
   "q": "Что входит в цену «под ключ»?",
   "a": "Фундамент или подготовка основания, кладка ядра комплекса, дымоход, вся керамическая облицовка, монтаж модулей и пусковая топка. Не входит: навес или беседка, подведение воды и электрики, ландшафт вокруг."
  },
  {
   "q": "Сколько времени занимает изготовление?",
   "a": "Керамика делается вручную: формовка, сушка, обжиг, роспись, повторный обжиг — 4–8 недель в зависимости от коллекции и объёма. Монтаж на объекте — 3–10 дней. Замер и 3D-проект — первая неделя."
  },
  {
   "q": "Можно заказать только облицовку без монтажа?",
   "a": "Да, керамику отгружаем в любой регион России в жёстком каркасе. К комплекту прикладываем раскладку и инструкцию — местный печник соберёт по ней. Гарантия на керамику сохраняется, на монтаж в этом случае отвечает ваш подрядчик."
  },
  {
   "q": "Я не знаю, какие модули мне нужны",
   "a": "Это нормально: большинство приходят с запросом «мангал и что-нибудь ещё». В калькуляторе выше можно поиграть с набором и увидеть, как меняется цена. На замере инженер подскажет, что реально используется, а что стоит денег и стоит без дела."
  },
  {
   "q": "Есть ли готовые проекты, чтобы не придумывать с нуля?",
   "a": "Да, ниже подборка реализованных комплексов с ценами — можно взять любой за основу и адаптировать под ваш участок. Это быстрее и дешевле, чем проектировать с чистого листа."
  },
  {
   "q": "Как оплачивается работа?",
   "a": "Аванс на запуск производства, затем оплата по этапам: готовность керамики, отгрузка, завершение монтажа. Полная предоплата не требуется."
  }
 ],
 "gallery": [
  "img/01.webp",
  "img/01-2.webp",
  "img/01-3.webp",
  "img/01-4.webp",
  "img/01-5.webp",
  "img/01-6.webp",
  "img/02.webp",
  "img/02-2.webp",
  "img/02-3.webp",
  "img/02-4.webp",
  "img/02-5.webp",
  "img/03.webp",
  "img/03-2.webp",
  "img/03-3.webp",
  "img/03-4.webp",
  "img/04.webp",
  "img/04-2.webp",
  "img/04-3.webp",
  "img/05.webp",
  "img/05-2.webp",
  "img/05-3.webp",
  "img/05-4.webp",
  "img/05-5.webp",
  "img/05-6.webp"
 ]
};
