@vagabond-inc/react-boilerplate-md

## Documentation

React Boilerplate Material Design :

- A boilerplate based on React 18 with Mui, i18n and react-router-dom
- [storyBook](https://vagabond.synology.me/react-boilerplate-md)
- Mui : [documentation](https://mui.com/material-ui/getting-started/overview/)
- Npm : [@vagabond-inc/react-boilerplate-md](https://www.npmjs.com/package/@vagabond-inc/react-boilerplate-md)
- Github : [https://github.com/vagabon/react-boilerplate-md](https://github.com/vagabon/react-boilerplate-md)
- Example : [Vagabond Blog & Tools](https://blog.vagabond.synology.me/)

## Technical stack

- Node >= 18.16.0, npm >= 9.5.1

- React :

  - react: ~18.2.0
  - react-dom: ~18.2.0

- i18n :

  - react-i18next: ~14.0.0
  - i18next: ~23.7.11
  - i18next-browser-languagedetector: ~7.2.0

- Router-dom :

  - react-router-dom: ~6.21.0

- MUI :

  - @mui/material: ~5.15.1
  - @emotion/react: ~11.11.1
  - @mui/icons-material: ~5.15.1
  - @mui/x-date-pickers: ~6.18.5
  - dayjs: ~1.11.10
  - mui-markdown: ~1.1.11

- Test :
  - @babel/preset-env: ~7.23.3
  - @babel/preset-react: ~7.23.3
  - @babel/preset-typescript: ~7.23.3
  - babel-jest: ~29.7.0
  - jest: ~29.7.0
  - jest-environment-jsdom: ~29.7.0

## Installation

```
npm install
```

# Storybook

```
npm run storybook
```

## Test

### TU

- testing-library : https://testing-library.com/docs/react-testing-library/intro/
- jest : https://jestjs.io/fr/

Exécution des tests unitaires :

```
npm run test
```

Exécution des tests unitaires avec la couverture :

```
npm run coverage
```

Exécution des tests unitaires avec la génération des fichiers pour Sonarqube :

```
npm run ci
```

- configuration de Sonarqube : /sonar-project.properties
- rapport : /coverage/test-report.xml

## Build

Génération du build :

```
npm run build
```

- livrable : /dist

## Deploy

```
npm run publish
```
