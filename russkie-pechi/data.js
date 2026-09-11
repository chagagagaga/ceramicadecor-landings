/* Контент направления «Русские печи». Правится здесь — вёрстка и логика общие. */
window.LP = {
 "slug": "russkie-pechi",
 "title": "Русские печи",
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
 "priceNote": "Цена ориентировочная: итоговая зависит от размеров печи, кладки ядра и объёма облицовки. Смету считаем бесплатно за 2–3 дня.",
 "priceFrom": true,
 "catalogStyle": "",
 "quiz": {
  "title": "Рассчитайте свою печь",
  "sub": "Соберите конфигурацию — пришлём смету в мессенджер. Без звонков и регистраций.",
  "note": "Пришлём смету и 3D-эскиз в мессенджер или расскажем по телефону — как удобнее.",
  "base": 0,
  "spread": 1.26,
  "turnkeyFactor": 1.75,
  "matchBy": null,
  "fields": [
   {
    "id": "width",
    "type": "range",
    "step": 1,
    "label": "Ширина печи",
    "min": 1.2,
    "max": 2.8,
    "stepSize": 0.1,
    "dec": 1,
    "unit": "м",
    "pricePerUnit": 470000,
    "hint": "Классическая русская печь с лежанкой — от 1,8 метра по фасаду.",
    "def": 1.8
   },
   {
    "id": "scheme",
    "type": "radio",
    "step": 2,
    "label": "Исполнение",
    "options": [
     {
      "id": "plain",
      "label": "Без лежанки",
      "hint": "Компактный вариант",
      "k": 1
     },
     {
      "id": "bench",
      "label": "С лежанкой",
      "hint": "Классика",
      "k": 1.35
     },
     {
      "id": "full",
      "label": "С лежанкой",
      "hint": "Готовит и отапливает круглый год",
      "k": 1.6
     }
    ]
   },
   {
    "id": "extra",
    "type": "checks",
    "label": "Дополнить печь",
    "collapsed": true,
    "hidePrices": true,
    "options": [
     {
      "id": "niche",
      "label": "Ниши и печурки",
      "add": 92000
     },
     {
      "id": "pipe",
      "label": "Изразцовая труба",
      "hint": "Облицовка дымохода в интерьере",
      "add": 185000
     },
     {
      "id": "wood",
      "label": "Дровница в облицовке",
      "add": 74000
     },
     {
      "id": "mount",
      "label": "Кладка и монтаж",
      "add": 260000
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Русская печь Русская Этника",
   "collection": "Русская Этника",
   "desc": "Изразцы Русская Этника 20×20 в цветной росписи. Островная установка, открытый очаг. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "weight": 950,
    "width": 1769,
    "height": 3044,
    "depth": 2575
   },
   "p1": 5094314,
   "p2": 0,
   "img": "img/01.webp",
   "photos": [
    "img/01.webp",
    "img/01-2.webp",
    "img/01-3.webp",
    "img/01-4.webp",
    "img/01-5.webp",
    "img/01-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_russkaya-pech-v-oblitsovke-izraztsami-s-rumpoj-v-kollektsii-ptichki-5795/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Камея",
   "collection": "Камея",
   "desc": "Изразцы Камея с медальонами в коричневой окантовке. Пристенная установка. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "width": 3050,
    "height": 2500,
    "depth": 1610
   },
   "p1": 2181909,
   "p2": 0,
   "img": "img/02.webp",
   "photos": [
    "img/02.webp",
    "img/02-2.webp",
    "img/02-3.webp",
    "img/02-4.webp",
    "img/02-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_russkaya-pech-v-oblitsovke-izraztsami-s-medalonami-v-korichnevoj-okantovke-5051/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Тюльпан, белый",
   "collection": "Тюльпан",
   "desc": "Изразцы Тюльпан в цвете Белый Антик. Пристенная установка, открытый очаг. Кладка ядра и монтаж облицовки под ключ.",
   "p1": 963875,
   "p2": 0,
   "img": "img/03.webp",
   "photos": [
    "img/03.webp",
    "img/03-2.webp",
    "img/03-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_komplekt-izraztsov-tyulpan-dlya-otdelki-pechi/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Неаполь",
   "collection": "Неаполь",
   "desc": "Изразцы Неаполь в росписи «Вечер в Италии». Пристенная установка, открытый очаг. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "weight": 246,
    "width": 1405,
    "height": 1965,
    "depth": 1147
   },
   "p1": 1046948,
   "p2": 0,
   "img": "img/04.webp",
   "photos": [
    "img/04.webp",
    "img/04-2.webp",
    "img/04-3.webp",
    "img/04-4.webp",
    "img/04-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_izraztsovaya-pech-so-starinnymi-izraztsami-v-oblitsovke-neapol/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Усадьба",
   "collection": "Усадьба",
   "desc": "Печь оштукатурена, изразцовые вставки коллекции Усадьба. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "weight": 217,
    "width": 2466,
    "height": 2728,
    "depth": 1686
   },
   "p1": 1329259,
   "p2": 0,
   "img": "img/05.webp",
   "photos": [
    "img/05.webp",
    "img/05-2.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_russkaya-pech-otdelannaya-shtukaturkoj-s-izraztsovymi-vstavkami-7298/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Византия",
   "collection": "Византия",
   "desc": "Изразцы Византия в Морской росписи. Островная установка, открытый очаг. Кладка ядра и монтаж облицовки под ключ.",
   "p1": 2371049,
   "p2": 0,
   "img": "img/06.webp",
   "photos": [
    "img/06.webp",
    "img/06-2.webp",
    "img/06-3.webp",
    "img/06-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_izraztsovaya-russkaya-pech-kollektsii-vizantiya-/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Арт Нуво",
   "collection": "Арт Нуво",
   "desc": "Изразцы Арт Нуво в росписи «Фисташковая». Островная установка, открытый очаг. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "weight": 520,
    "width": 3040,
    "height": 2660,
    "depth": 2860
   },
   "p1": 2169294,
   "p2": 0,
   "img": "img/07.webp",
   "photos": [
    "img/07.webp",
    "img/07-2.webp",
    "img/07-3.webp",
    "img/07-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_russkaya-pech-s-lezhankoj-i-chastichnoj-oblitsovkoj-izraztsami-art-nuvo-4448/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь в зелёной майолике",
   "collection": "",
   "desc": "Русская печь с лежанкой в зелёной майоликовой глазури. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "weight": 900,
    "width": 2929,
    "height": 3021,
    "depth": 1717
   },
   "p1": 4168727,
   "p2": 0,
   "img": "img/08.webp",
   "photos": [
    "img/08.webp",
    "img/08-2.webp",
    "img/08-3.webp",
    "img/08-4.webp",
    "img/08-5.webp",
    "img/08-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_izraztsovaya-russkaya-pech-s-lezhankoj-v-zelenoj-majolikovoj-glazuri-5672/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Русская Этника, зелёная роспись",
   "collection": "Русская Этника",
   "desc": "Изразцы Русская Этника 20×20 в зелёной росписи. Островная установка, открытый очаг. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "weight": 493,
    "width": 1920,
    "height": 1910,
    "depth": 1525
   },
   "p1": 2543257,
   "p2": 0,
   "img": "img/09.webp",
   "photos": [
    "img/09.webp",
    "img/09-2.webp",
    "img/09-3.webp",
    "img/09-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_russkaya-pech-v-belom-tsvete-s-zelenoj-rospisyu-v-kollektsii-russkaya-etnika-6093/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Тюльпан",
   "collection": "Тюльпан",
   "desc": "Изразцы Тюльпан в цвете Белый Антик. Островная установка, топка с прямым стеклом. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "width": 3078,
    "height": 4396,
    "depth": 2396
   },
   "p1": 3966639,
   "p2": 0,
   "img": "img/10.webp",
   "photos": [
    "img/10.webp",
    "img/10-2.webp",
    "img/10-3.webp",
    "img/10-4.webp",
    "img/10-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_russkaya-otopitelnaya-pech-v-izratsah-kollektsii-tyulpan-belogo-tsveta-4665/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Русская печь Русская Этника, белый",
   "collection": "Русская Этника",
   "desc": "Изразцы Русская Этника 20×20 в Белом цвете. Пристенная установка, топка с прямым стеклом. Кладка ядра и монтаж облицовки под ключ.",
   "spec": {
    "width": 1784,
    "height": 2963,
    "depth": 2039
   },
   "p1": 2631640,
   "p2": 0,
   "img": "img/11.webp",
   "photos": [
    "img/11.webp",
    "img/11-2.webp",
    "img/11-3.webp",
    "img/11-4.webp",
    "img/11-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-russkie-pechi-v-interere/cd_russkaya-pech-v-oblitsovke-belymi-izraztsami-iz-kollektsii-russkaya-etnika-7534/",
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
     "id": "Русская Этника",
     "label": "Русская Этника"
    },
    {
     "id": "Камея",
     "label": "Камея"
    },
    {
     "id": "Тюльпан",
     "label": "Тюльпан"
    },
    {
     "id": "Неаполь",
     "label": "Неаполь"
    },
    {
     "id": "Усадьба",
     "label": "Усадьба"
    },
    {
     "id": "Византия",
     "label": "Византия"
    },
    {
     "id": "Арт Нуво",
     "label": "Арт Нуво"
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Побелённая печь",
  "goodTitle": "Изразцовая русская печь",
  "bad": [
   "Побелка мажется от прикосновения и требует обновления каждый сезон.",
   "Швы кладки собирают копоть, и со временем отмывать их становится всё труднее.",
   "Печь выглядит утилитарно: как источник тепла — да, как центр гостиной — вряд ли.",
   "Штукатурка чувствительна к протопке: трещины по ней появляются в первые же зимы."
  ],
  "good": [
   "Глазурь моется тряпкой и не пачкает одежду, ухода не требует.",
   "Керамика не темнеет от копоти и не требует обновления.",
   "Изразцовая печь становится главным объектом дома — её показывают гостям.",
   "Изразец с румпой держит тепло часами, гарантия на керамику 50 лет."
  ],
  "media": "img/01.webp",
  "mediaHi": "../assets/img/why/russkie-pechi.webp 1998w"
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
   "q": "Сколько стоит русская печь в изразцах?",
   "a": "Облицовка начинается от 963 875 ₽, самые сложные проекты с ручной росписью доходят до 5 094 314 ₽. Под ключ с кладкой ядра — примерно в 1,7–1,8 раза дороже облицовки. Посчитайте свою конфигурацию в калькуляторе выше."
  },
  {
   "q": "Русская печь реально топится и готовит или это декор?",
   "a": "Реально. Мы делаем облицовку на действующее печное ядро: горнило, под, лежанка работают как положено. Подтопок добавляют, чтобы отапливать дом в межсезонье, не разжигая горнило целиком."
  },
  {
   "q": "Какую площадь отапливает?",
   "a": "Классическая русская печь с лежанкой уверенно держит 60–100 м² при нормальном утеплении. Точный расчёт делает печник на замере: важны планировка, высота потолков и расположение печи относительно комнат."
  },
  {
   "q": "Нужен ли отдельный фундамент?",
   "a": "Да. Печь с облицовкой весит несколько тонн, под неё нужен собственный фундамент, не связанный с фундаментом дома. Если дом уже построен, вариант решается на замере — иногда усиливают перекрытие."
  },
  {
   "q": "Сколько времени занимает вся работа?",
   "a": "От заявки до сдачи — 3–4 месяца. Изготовление керамики — основная часть срока, кладка ядра и монтаж облицовки на объекте 2–4 недели, плюс первая неделя на замер и 3D-проект."
  },
  {
   "q": "Можно облицевать печь, которая уже стоит?",
   "a": "Иногда да, если геометрия ядра позволяет и оно в хорошем состоянии. Пришлите фото и размеры — печник скажет честно. Чаще выгоднее переложить ядро: старая кладка часто уже с трещинами."
  },
  {
   "q": "Лежанка действительно тёплая?",
   "a": "Да, это её смысл. Изразец с румпой набирает тепло от массива печи и отдаёт его равномерно — лежанка остаётся тёплой много часов после протопки, при этом не обжигает."
  },
  {
   "q": "Отправляете в регионы?",
   "a": "Керамику отгружаем по всей России с полной раскладкой. Кладку ядра в этом случае выполняет ваш печник, мы ведём его по проекту и консультируем на каждом этапе."
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
  "img/10.webp",
  "img/11.webp"
 ]
};
