/* Контент направления «Изразцы». Правится здесь — вёрстка и логика общие. */
window.LP = {
 "slug": "izraztsy",
 "title": "Изразцы",
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
 "priceLabel1": "Цена за штуку",
 "quiz": {
  "title": "Рассчитайте комплект изразцов",
  "sub": "Минута — и вы знаете вилку цены. Без звонков и регистраций.",
  "note": "Расчёт ориентировочный: точное количество зависит от раскладки, углов и подрезки. Раскладку делаем бесплатно.",
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
    "id": "decor",
    "type": "radio",
    "step": 3,
    "label": "Тип изразца",
    "options": [
     {
      "id": "plain",
      "label": "Однотонная глазурь",
      "hint": "Ровный цвет, 40+ оттенков палитры",
      "k": 1
     },
     {
      "id": "relief",
      "label": "Лепной рельеф",
      "hint": "Пастораль, Тюльпан, Сохо, Дорф",
      "k": 1.3
     },
     {
      "id": "painted",
      "label": "Художественная роспись",
      "hint": "Ручная кисть, сюжет на выбор",
      "k": 1.95
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
      "add": 0,
      "def": true
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
   "title": "Плитка с лепным рельефом Пастораль, арт. 71157",
   "collection": "",
   "desc": "Рельефный изразец в голубой росписи с синей рамкой коллекции Пастораль 150х150 арт.:71157/52089/11455",
   "p1": 4190,
   "p2": 0,
   "img": "img/01.webp",
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_relefnyj-izrazets-v-goluboj-rospisi-s-sinej-ramkoj-kollektsii-pastoral-150h150-art-71157-52089-11455/"
  },
  {
   "title": "Плитка с рельефными тюльпанами, коллекция Тюльпан, арт. 77073",
   "collection": "",
   "desc": "Изразец с рельефными тюльпанами Тюльпан",
   "p1": 2881,
   "p2": 0,
   "img": "img/02.webp",
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_izrazets-s-lepnym-relefom-tyulpany-belogo-tsveta-kollektsii-tyulpan-art-77073-51201/"
  },
  {
   "title": "Плитка с декоративным рельефом Сохо, арт. 77150",
   "collection": "",
   "desc": "Современный однотонный рельефный изразец Сохо в зеленом цвете коллекции Сохо арт.:77150/50567",
   "p1": 2864,
   "p2": 0,
   "img": "img/03.webp",
   "url": "https://ceramicadecor.ru/izrazcy/soho/izraztsy-soho-v-hvojnom-tsvete/cd_sovremennyj-odnotonnyj-relefnyj-izrazets-soho-v-zelenom-tsvete-kollektsii-soho-art-77150-50567/"
  },
  {
   "title": "Плитка с лепным рельефом Дорф, арт. 77275",
   "collection": "",
   "desc": "Муравленый изразец коллекции Дорф арт.:77275/53050",
   "p1": 5682,
   "p2": 0,
   "img": "img/04.webp",
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_muravlenyj-izrazets-kollektsii-dorf-art-77275-53050/"
  },
  {
   "title": "Плитка с лепным рельефом Дорф, арт. 77275",
   "collection": "",
   "desc": "Белый изразец с лепным рельефом коллекции Дорф арт.:77275/51201",
   "p1": 4735,
   "p2": 0,
   "img": "img/05.webp",
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_belyj-izrazets-s-lepnym-relefom-kollektsii-dorf-art-77275-51201/"
  },
  {
   "title": "Плитка с лепным рельефом Дорф, арт. 77275",
   "collection": "",
   "desc": "Изразец с лепным рельефом в цвете Серый Графит коллекции Дорф арт.:77275/50474",
   "p1": 5445,
   "p2": 0,
   "img": "img/06.webp",
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-tsvete-seryj-grafit-kollektsii-dorf-art-77275-50474/"
  },
  {
   "title": "Вставка с лепным рельефом Альбион, арт. 76046",
   "collection": "",
   "desc": "Изразец-вставка с лепным рельефом Альбион 76046/51201",
   "p1": 1424,
   "p2": 0,
   "img": "img/07.webp",
   "url": "https://ceramicadecor.ru/izrazcy/albion/izraztsy-albion-v-tsvete-belyj-antik/cd_vstavka-s-lepnym-relefom-albion-white-76046-51201/"
  },
  {
   "title": "Плитка с лепным рельефом из составного декора Альбион, арт. 71068",
   "collection": "",
   "desc": "Изразец в белом цвете 15x15 с лепным рельефом коллекции Альбион арт.:71068/51201",
   "p1": 1771,
   "p2": 0,
   "img": "img/08.webp",
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_izrazets-v-belom-tsvete-15x15-s-lepnym-relefom-kollektsii-albion-art-71068-51201/"
  },
  {
   "title": "Плитка с лепным рельефом Русская Этника, арт. 77874",
   "collection": "",
   "desc": "Древнерусский изразец лепной обьемный 20х20 коллекции Русская Этника арт.:77874/53050",
   "p1": 3713,
   "p2": 0,
   "img": "img/09.webp",
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_drevnerusskij-izrazets-lepnoj-obemnyj-20h20-kollektsii-russkaya-etnika-art-77874-53050/"
  },
  {
   "title": "Плитка рельефная Азулежу, арт. 77641",
   "collection": "",
   "desc": "Плитка рельефная 200х200х12 мм Азулежу 77641/52151/12125",
   "p1": 4468,
   "p2": 0,
   "img": "img/10.webp",
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_plitka-relefnaya-200h200h12-mm-azulezhu-77641-52151-12125/"
  },
  {
   "title": "Плитка с рельефным узором из составного панно Версаль, арт. 77255",
   "collection": "",
   "desc": "Каминное панно Версаль (5-9), рельефный изразец для декора",
   "p1": 5231,
   "p2": 0,
   "img": "img/11.webp",
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_Kaminnoe-panno-Versal-5-9-relefnyj-izrazec-dlya-dekora-77255-50554/"
  },
  {
   "title": "Плитка с лепным рельефом Сувенир, арт. 71139",
   "collection": "",
   "desc": "Изразец цветной Сувенир (жарптица). Палитра: Красная",
   "p1": 3891,
   "p2": 0,
   "img": "img/12.webp",
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_drevnerusskij-izrazets-krasnogo-tsveta-s-sinej-rospisyu-relefnyj-kollektsii-suvenir-art-71139-50555-11940-1/"
  },
  {
   "title": "Плитка с лепным рельефом Арт Нуво, арт. 71014",
   "collection": "",
   "desc": "Изразец с лепным рельефом Арт Нуво",
   "p1": 4919,
   "p2": 0,
   "img": "img/13.webp",
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-s-rumpoj/cd_izrazets-s-lepnym-relefom-v-krasno-zelenoj-rospisi-kollektsii-art-nuvo-art-71014r-52091-11505/"
  },
  {
   "title": "Плитка с лепной лилией Арт Нуво, арт. 71023",
   "collection": "",
   "desc": "Изразец с лепной лилией Арт Нуво",
   "p1": 4230,
   "p2": 0,
   "img": "img/14.webp",
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnoj-liliej-v-korichnevoj-rospisi-kollektsii-art-nuvo-art-71023-52095-11506/"
  },
  {
   "title": "Плитка с лепным рельефом Венская, арт. 77919",
   "collection": "",
   "desc": "Белый изразец с лепным рельефом коллекции Венская арт.:77919/51261",
   "p1": 4276,
   "p2": 0,
   "img": "img/15.webp",
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_belyj-izrazets-s-lepnym-relefom-kollektsii-venskaya-art-77919-51261/"
  },
  {
   "title": "Плитка с медальоном под сюжетную роспись, арт. 77133",
   "collection": "",
   "desc": "Изразец в стиле прованс с букетом цветов в окантовке коллекции Камея арт.:77133/52150/12005-10",
   "p1": 8545,
   "p2": 0,
   "img": "img/16.webp",
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-v-stile-provans-s-buketom-tsvetov-v-okantovke-kollektsii-kameya-art-77133-52150-12005-10/"
  },
  {
   "title": "Плитка с медальоном под сюжетную роспись, арт. 77133",
   "collection": "",
   "desc": "Изразец с голубой росписью с сюжетом зима коллекции Камея арт.:77133/52089/11736-6",
   "p1": 10745,
   "p2": 0,
   "img": "img/17.webp",
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-s-goluboj-rospisyu-s-syuzhetom-zima-kollektsii-kameya-art-77133-52089-11736-6/"
  },
  {
   "title": "Плитка с балясинами Усадьба, арт. 76111",
   "collection": "",
   "desc": "Изразец с лепными балясинами с оранжевой росписью 15х15 коллекции Усадьба арт.:76111/52089/11589",
   "p1": 6147,
   "p2": 0,
   "img": "img/18.webp",
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnymi-balyasinami-s-oranzhevoj-rospisyu-15h15-kollektsii-usadba-art-76111-52089-11589/"
  },
  {
   "title": "Плитка с лепным рельефом Элеганс, арт. 71010",
   "collection": "",
   "desc": "Изразец с художественным рельефным декором серого цвета коллекции Элеганс 150х150 арт.:71010/50518",
   "p1": 2248,
   "p2": 0,
   "img": "img/19.webp",
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-hudozhestvennym-relefnym-dekorom-serogo-tsveta-kollektsii-elegans-150h150-art-71010-50518/"
  },
  {
   "title": "Плитка рельефная Неаполь, арт. 77853",
   "collection": "",
   "desc": "Изразец рельефный для круглой печи с яркой росписью Неаполь коллекции Неаполь арт.:77853/52089/11711",
   "p1": 8398,
   "p2": 0,
   "img": "img/20.webp",
   "url": "https://ceramicadecor.ru/izrazcy/radiusnye-kruglye-izraztsy/cd_izrazets-relefnyj-dlya-krugloj-pechi-s-yarkoj-rospisyu-neapol-kollektsii-neapol-art-77853-52089-11711/"
  },
  {
   "title": "Плитка с декоративным рельефом Византия",
   "collection": "",
   "desc": "Изразец с лепным рельефом в красной окантовке с росписью золотом коллекции Византия арт.:77459/52111/11725g",
   "p1": 4465,
   "p2": 0,
   "img": "img/21.webp",
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-krasnoj-okantovke-s-rospisyu-zolotom-kollektsii-vizantiya-art-77459-52111-11725g/"
  },
  {
   "title": "Плитка с рельефными птичками и ягодами Птички, арт. 77012",
   "collection": "",
   "desc": "Изразец с рельефными птицами в желтой росписи коллекции Птицы 200х200 арт.:77012/50555/12131",
   "p1": 6772,
   "p2": 0,
   "img": "img/22.webp",
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefnymi-ptitsami-v-zheltoj-rospisi-kollektsii-ptitsy-200h200-art-77012-50555-12131/"
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
     "label": "До 3 000 ₽",
     "min": 0,
     "max": 3000
    },
    {
     "id": "p1",
     "label": "3 000 – 6 000 ₽",
     "min": 3000,
     "max": 6000
    },
    {
     "id": "p2",
     "label": "От 6 000 ₽",
     "min": 6000,
     "max": 1000000000
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
