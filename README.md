# Посадочные страницы CeramicaDecor

Восемь направлений продукции — восемь отдельных посадочных под холодный трафик
Яндекс.Директа. Один репозиторий, одна дизайн-система, раздельные адреса
и раздельная аналитика по каждому направлению.

**Карта направлений:** https://chagagagaga.github.io/ceramicadecor-landings/

## Адреса

| № | Направление | Адрес | Статус | Прайс |
|---|---|---|---|---|
| 1 | Банные печи и отделка парной | [1luch-banya-landing](https://chagagagaga.github.io/1luch-banya-landing/) | готова | 16 печей |
| 2 | Барбекю-комплексы | [/barbekyu-kompleksy/](https://chagagagaga.github.io/ceramicadecor-landings/barbekyu-kompleksy/) | в работе | 18 |
| 3 | Камины | [/kaminy/](https://chagagagaga.github.io/ceramicadecor-landings/kaminy/) | в работе | 24 |
| 4 | Изразцы | [/izraztsy/](https://chagagagaga.github.io/ceramicadecor-landings/izraztsy/) | в очереди | 22 |
| 5 | Типовые печи-камины | [/pechi-kaminy/](https://chagagagaga.github.io/ceramicadecor-landings/pechi-kaminy/) | в очереди | 6 |
| 6 | Порталы для банных печей | [/bannye-portaly/](https://chagagagaga.github.io/ceramicadecor-landings/bannye-portaly/) | в очереди | 10 |
| 7 | Русские печи | [/russkie-pechi/](https://chagagagaga.github.io/ceramicadecor-landings/russkie-pechi/) | в очереди | 11 |
| 8 | Отопительные печи | [/otopitelnye-pechi/](https://chagagagaga.github.io/ceramicadecor-landings/otopitelnye-pechi/) | в очереди | 10 |

Направление 1 — дочерняя компания «Первый Луч», свой бренд и свой репозиторий.
Направления 2–8 — бренд CeramicaDecor.

## Почему один репозиторий, а не восемь

Восемь направлений продают один бренд. В отдельных репозиториях дизайн
разъезжается на второй же итерации: правку кнопки внесли в камины, забыли
в барбекю. Здесь `assets/css/system.css` один на всех — меняется в одном месте.

Раздельные адреса при этом сохраняются: каждое направление живёт в своей папке,
получает свою кампанию в Директе, свои цели в Метрике и свою отчётность.
Позже каждую папку можно увести на отдельный поддомен без переписывания кода.

## Источники данных

| Что | Где |
|---|---|
| Дизайн, тексты, фотографии | https://olgabeznogova24.github.io/RU-Site-Full/ |
| Цены и топ-модели | [Google-таблица](https://docs.google.com/spreadsheets/d/1YHro02gHVouqCeRK4-np2e3a3DxteUHL7JPyKXANPxs/edit) — 7 вкладок, по одной на направление |

Цены берутся **только** из таблицы: там специально отобраны топ-модели.
С сайта берутся фотографии, описания и фактура.

## Дизайн-система

`assets/css/system.css` — токены сняты с боевого сайта:

| Роль | Значение |
|---|---|
| Фон | `#101010` |
| Акцент действия | `#cb3b25` терракота |
| Акцент цены | `#ffa15e` янтарь |
| Статус «готово» | `#93d200` |
| Заголовки | TT Ramillas |
| Текст | TT Commons Pro |

Шрифты лицензионные и в репозиторий не положены — раздавать их с публичного
хостинга нельзя. Перед боевым запуском файлы кладутся в `assets/fonts/`,
до тех пор работает подобранный по метрикам системный стек.

## Структура посадочной

Каждое направление повторяет схему, обкатанную на «Первом Луче»:

```
<направление>/
  index.html              страница целиком
  assets/js/pricing.js    все цены и тексты направления
  assets/js/quiz.js       конфигуратор первого экрана
  assets/js/main.js       рендер секций, фильтры, галерея
  assets/js/lead.js       отправка заявок
  assets/img/             фотографии направления
```

Общее: `assets/css/system.css` в корне репозитория.
