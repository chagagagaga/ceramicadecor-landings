/* Контент направления «Камины». Правится здесь — вёрстка и логика общие. */
window.LP = {
 "slug": "kaminy",
 "title": "Камины",
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
  "title": "Рассчитайте свой камин",
  "sub": "Минута — и вы знаете вилку цены. Без звонков и регистраций.",
  "note": "Вилка, а не финальная цена: точную смету считаем после замера и согласования 3D-проекта.",
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
    "id": "collection",
    "type": "radio",
    "step": 3,
    "label": "Декор облицовки",
    "options": [
     {
      "id": "Универсал",
      "label": "Однотонная глазурь",
      "hint": "Универсал, Минималист, Луна",
      "k": 1
     },
     {
      "id": "Тюльпан",
      "label": "Рельеф и майолика",
      "hint": "Тюльпан, Бристоль, Элеганс",
      "k": 1.35
     },
     {
      "id": "Птицы",
      "label": "Художественная роспись",
      "hint": "Птицы, Византия, Дорф",
      "k": 1.9
     }
    ]
   },
   {
    "id": "extra",
    "type": "checks",
    "label": "Дополнить камин",
    "collapsed": true,
    "options": [
     {
      "id": "firebox",
      "label": "Каминная топка в комплект",
      "hint": "Astov, Hoxter, Spartherm",
      "add": 185000,
      "def": true
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
   "title": "Альбион",
   "collection": "Альбион",
   "desc": "Классический белый камин Альбион с топкой LISEO CASTIRON.",
   "p1": 767994,
   "p2": 1350000,
   "img": "img/01.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_klassicheskij-belyj-kamin-albion-s-topkoj-liseo-castiron/"
  },
  {
   "title": "Облицовка биокамина изразцами Альбион в майоликовой глазури",
   "collection": "Альбион",
   "desc": "",
   "p1": 722464,
   "p2": 1355786,
   "img": "img/02.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-biokamina-izraztsami-albion-v-majolikovoj-glazuri/"
  },
  {
   "title": "Тюльпан",
   "collection": "Тюльпан",
   "desc": "Камин в облицовке Тюльпан с Г-образной топкой Экокамин Альфа 1000 RB",
   "p1": 1095310,
   "p2": 1850000,
   "img": "img/03.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-oblitsovke-tyulpan-s-g-obraznoj-topkoj-ekokamin-alfa-1000-rb/"
  },
  {
   "title": "Комплект каминной облицовки Тюльпан. Цвет: Арктика",
   "collection": "Тюльпан",
   "desc": "",
   "p1": 793469,
   "p2": 1150000,
   "img": "img/04.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_komplekt-kaminnoj-oblitsovki-tyulpan-tsvet-arktika/"
  },
  {
   "title": "Версаль",
   "collection": "Версаль",
   "desc": "Изразцовый камин Версаль в синем цвете",
   "p1": 1001758,
   "p2": 2084728,
   "img": "img/05.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-versal-v-sinem-tsvete/"
  },
  {
   "title": "Бристоль",
   "collection": "Бристоль",
   "desc": "Камин с П-образной топкой в облицовке \"Бристоль\" в цвете Черная ночь",
   "p1": 969760,
   "p2": 1950000,
   "img": "img/06.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-s-p-obraznoj-topkoj-v-oblitsovke-bristol-v-tsvete-chernaya-noch/"
  },
  {
   "title": "Дорф",
   "collection": "Дорф",
   "desc": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_dekorativnyj-kamin-s-ochagom-airtone-andalle-1000-oblitsova",
   "p1": 1800849,
   "p2": 2650000,
   "img": "img/07.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_dekorativnyj-kamin-s-ochagom-airtone-andalle-1000-oblitsovan-izraztsami-kollektsii-dorf-spetsialno-dlya-restorana-5013/"
  },
  {
   "title": "Комплект каминной облицовки Дорф. Цвет: Муравленый",
   "collection": "Дорф",
   "desc": "",
   "p1": 1303647,
   "p2": 2100000,
   "img": "img/08.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_komplekt-kaminnoj-oblitsovki-dorf-tsvet-muravlenyj/"
  },
  {
   "title": "Арт Нуво",
   "collection": "Арт Нуво",
   "desc": "Комплект каминной облицовки Арт Нуво. Декоративная палитра: Фисташковая",
   "p1": 612738,
   "p2": 1433372,
   "img": "img/09.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-art-nuvo-1/"
  },
  {
   "title": "Птицы",
   "collection": "Птицы",
   "desc": "Изразцовый камин АСТОВ П2С в облицовке \"Птицы\"",
   "p1": 1464041,
   "p2": 2552550,
   "img": "img/10.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-astov-p2s-v-oblitsovke-ptitsy/"
  },
  {
   "title": "Византия",
   "collection": "Византия",
   "desc": "Изразцовый камин Византия в росписи Олива",
   "p1": 1426640,
   "p2": 2241366,
   "img": "img/11.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-vizantiya-v-rospisi-oliva/"
  },
  {
   "title": "Луна",
   "collection": "Луна",
   "desc": "Камин в классическом стиле из коллекции Луна и топкой Spartherm Linear 4S Arte.",
   "p1": 920251,
   "p2": 1850000,
   "img": "img/12.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-klassicheskom-stile-iz-kollektsii-luna-i-topkoj-spartherm-linear-4s-arte-1672/"
  },
  {
   "title": "Универсал",
   "collection": "Универсал",
   "desc": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kaminnyj-portal-universal-tsvet-arktika/",
   "p1": 381912,
   "p2": 950000,
   "img": "img/13.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kaminnyj-portal-universal-tsvet-arktika/"
  },
  {
   "title": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd",
   "collection": "Универсал",
   "desc": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-uglovogo-kamina-izraztsami-universal/",
   "p1": 356866,
   "p2": 950000,
   "img": "img/14.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-uglovogo-kamina-izraztsami-universal/"
  },
  {
   "title": "Прованс",
   "collection": "Прованс",
   "desc": "Изразцовый камин коллекции \"Голландия\" с дровником и ручной росписью",
   "p1": 734935,
   "p2": 1220000,
   "img": "img/15.webp",
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izraztsovyj-kamin-kollektsii-gollandiya-s-drovnikom-i-ruchnoj-rospisyu/"
  },
  {
   "title": "Браво",
   "collection": "Браво",
   "desc": "Камин в облицовке изразцами коллекции Браво с росписью",
   "p1": 835350,
   "p2": 1580000,
   "img": "img/16.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-oblitsovke-izraztsami-kollektsii-bravo-s-rospisyu/"
  },
  {
   "title": "Сохо",
   "collection": "Сохо",
   "desc": "Облицовка камина до полки с дровниками по бокам в коллекции Сохо.",
   "p1": 1712668,
   "p2": 2830000,
   "img": "img/17.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-kamina-do-polki-s-drovnikami-po-bokam-v-kollektsii-soho-6749/"
  },
  {
   "title": "Усадьба",
   "collection": "Усадьба",
   "desc": "Изразцовый камин \"Усадьба\" с подиумами и призматичной угловой топкой",
   "p1": 875523,
   "p2": 1470000,
   "img": "img/18.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-usadba-s-podiumami-i-prizmatichnoj-uglovoj-topkoj/"
  },
  {
   "title": "Птички",
   "collection": "Птички",
   "desc": "Каминная облицовка Птички. Декоративная палитра: Лесная",
   "p1": 808246,
   "p2": 1450000,
   "img": "img/19.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kaminnaya-oblitsovka-ptichki-dekorativnaya-palitra-lesnaya/"
  },
  {
   "title": "Элеганс",
   "collection": "Элеганс",
   "desc": "Комплект каминной облицовки Элеганс. Цвет: Лесной Туман",
   "p1": 949823,
   "p2": 1945720,
   "img": "img/20.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-elegans-v-glazuri-lesnoj-tuman/"
  },
  {
   "title": "Минималист",
   "collection": "Минималист",
   "desc": "-",
   "p1": 907913,
   "p2": 1367144,
   "img": "img/21.webp",
   "url": ""
  },
  {
   "title": "Венская",
   "collection": "Венская",
   "desc": "Электрокамин белого цвета в изразцах коллекции Венская. 99999",
   "p1": 810963,
   "p2": 1380000,
   "img": "img/22.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/portaly-dlya-elektrokamina-v-interere/cd_elektrokamin-belogo-tsveta-v-izraztsah-kollektsii-venskaya-99999/"
  },
  {
   "title": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd",
   "collection": "Венская",
   "desc": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_klassicheskij-kamin-v-oblitsovke-iz-kollektsii-dorf-s-topko",
   "p1": 2100676,
   "p2": 3130000,
   "img": "img/23.webp",
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_klassicheskij-kamin-v-oblitsovke-iz-kollektsii-dorf-s-topkoj-brunner-stil-kamin-classic-6282/"
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
     "id": "Прованс",
     "label": "Прованс"
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
  "goodTitle": "Изразцы CeramicaDecor",
  "bad": [
   "Мрамор и гипс глухие: камин греет только пока горит, тепло уходит в трубу.",
   "Типовой портал не сядет в проём — придётся подгонять стену под камин.",
   "Одинаковые облицовки стоят в тысячах квартир, индивидуальности ноль.",
   "Скол на гипсе не чинится: менять весь элемент."
  ],
  "good": [
   "Изразец — это глиняный аккумулятор: печь отдаёт тепло часами после протопки.",
   "Облицовка делается под ваш проём и вашу топку, а не наоборот.",
   "Коллекция, цвет глазури и сюжет росписи подбираются под интерьер.",
   "Керамика с обжигом 1000 °C, гарантия 50 лет, отдельный изразец заменяется точечно."
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
   "b": "50",
   "title": "Лет гарантии на керамику",
   "text": "Обжиг при 1000 °C. Глазурь не выцветает и не трескается от перепадов температуры."
  },
  {
   "b": "₽",
   "title": "Смета фиксируется в договоре",
   "text": "Цена в договоре окончательная. Дополнительные работы — только по вашему письменному согласию."
  },
  {
   "b": "3D",
   "title": "Проект до оплаты",
   "text": "Бесплатный 3D-проект за 2–3 дня. Видите объект в своём интерьере до того, как платите."
  },
  {
   "b": "РФ",
   "title": "Доставка и монтаж по России",
   "text": "Свои монтажные бригады в Москве и МО, отгрузка керамики в любой регион с упаковкой в жёсткий каркас."
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
   "a": "4–8 недель. Каждый изразец формуется вручную, сушится, обжигается, расписывается и обжигается повторно. Ускорить обжиг нельзя — на этом ломается качество глазури. Монтаж на объекте занимает 3–7 дней."
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
  "img/08.webp",
  "img/09.webp",
  "img/10.webp",
  "img/11.webp",
  "img/12.webp"
 ]
};
