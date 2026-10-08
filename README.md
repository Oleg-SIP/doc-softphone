# AI-softphone — документация (docs.ai-softphone.ru)

Ветка `RUS-DOC`: только русская версия документации в оформлении сайта
[ai-softphone.ru](https://ai-softphone.ru/) (шрифт Inter, красный акцент,
светлая тема, без переключателя языков и без аналитики). Собрана на
[Docusaurus](https://docusaurus.io/).

## Работа с сайтом

```sh
npm install
npm start      # http://localhost:3000, с обновлением на лету
npm run build  # сайт в build-ru/ (около 34 МБ)
npm run serve  # посмотреть собранное
```

## Где что лежит

| Путь | Что это |
| --- | --- |
| `i18n/ru/docusaurus-plugin-content-docs/current/` | Русские страницы — то, что видит читатель. |
| `docs/` | Английские страницы: только основа структуры (папки, `_category_.json`) и запасной вариант для страницы без русского файла. |
| `static/screenshots/macos/ru/` | Русские скриншоты. `scripts/prepare-ru.mjs` копирует их в `static-ru/` перед сборкой. |
| `static-ru/` | Статика русского сайта: значки ai-softphone.ru и скриншоты. |
| `docusaurus.config.ru.js`, `src/css/ru.css` | Настройки и оформление под ai-softphone.ru. |
| `languages.json` | Один язык — `ru`. |
| `scripts/finish-ru.mjs` | После сборки пишет `robots.txt` и проверяет страницы и ссылки. |
| `.github/workflows/deploy-ru-ftp.yml` | Сборка и загрузка по FTP (секреты `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, `FTP_DIR`). Загрузка идёт с основной ветки репозитория или вручную: Actions → Run workflow. |

## Обновить русский текст и скриншоты из основной ветки

Основная ветка репозитория хранит все языки. Переносить нужно только русское:

```sh
git fetch origin
git checkout origin/<основная-ветка> -- i18n/ru static/screenshots/macos/ru docs
npm run build   # проверить
git commit -am "Русская версия из основной ветки"
```

Слияние (`git merge`) не годится: оно вернёт удалённые языки.
