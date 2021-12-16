# A simple autotest on framework CYPRESS

Проект автотеста написанный на опенсорс фреймворке [cypress](https://www.cypress.io)

## Начало работы

Установка осуществляется командой (документация [docs.cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress)):
```shell
npm install cypress
```

Другие способы установки/запуска на разные платфоны вы найдете в [документации](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

- Перейдите в директорию 
```shell
cd /your/project/path
```
- Установка
```shell
npm install cypress --save-dev
```
- Запуск
```shell
npx cypress open
```

### Other

Вы можете клонировать репозиторий либо добавить файлы вручную:
 - fixtures/cypressTest.json
 - integration/Test_cypress_test.spec.js