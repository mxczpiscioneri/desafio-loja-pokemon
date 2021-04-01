[![Deploy](https://github.com/mxczpiscioneri/desafio-loja-pokemon/actions/workflows/react-build-githubpages.yml/badge.svg?branch=master)](https://github.com/mxczpiscioneri/desafio-loja-pokemon/actions/workflows/react-build-githubpages.yml)
[![Test](https://github.com/mxczpiscioneri/desafio-loja-pokemon/actions/workflows/react-test-coverage.yml/badge.svg?branch=master)](https://github.com/mxczpiscioneri/desafio-loja-pokemon/actions/workflows/react-test-coverage.yml)
[![codecov](https://codecov.io/gh/mxczpiscioneri/desafio-loja-pokemon/branch/master/graph/badge.svg?token=AGY1IYNGF9)](https://codecov.io/gh/mxczpiscioneri/desafio-loja-pokemon)

# Pokémon Store <img src="./public/logo192.png" align="right" width="96px">

Aplicação em ReactJS que simula um e-commerce de Pokémon.
As abas com os tipos de Pokémon simula outras lojas com estilos diferentes, mas com o mesmo comportamento.

## Pokémon
Os dados utilizados são da API [`https://pokeapi.co`](https://pokeapi.co)

#### Demonstração
Veja a aplicação rodando no endereço [`https://mxczpiscioneri.github.io/desafio-loja-pokemon`](https://mxczpiscioneri.github.io/desafio-loja-pokemon)

## Instalação

[![Node.js ^12 (LTS)](https://img.shields.io/badge/node-^12.x.x%20(LTS)-informational.svg?style=flat-square&logo=node.js)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![yarn 1.19.x](https://img.shields.io/badge/yarn-1.19.x-informational.svg?style=flat-square&logo=yarn)](https://yarnpkg.com/lang/en/docs/install)
[![React 17.0.2](https://img.shields.io/badge/React-17.0.2-informational.svg?style=flat-square&logo=react)](https://reactjs.org/blog/2020/10/20/react-v17.html)

#### Clonar repositório
```sh
git clone https://github.com/mxczpiscioneri/desafio-loja-pokemon.git
```

#### Instalar dependências
```sh
yarn
```

#### Rodar o projeto
```sh
yarn start
```

#### Rodar os testes
```sh
yarn lint
yarn test
yarn test:coverage
yarn cypress:run
```

#### Acesse:
[`http://localhost:3000/desafio-loja-pokemon`](http://localhost:3000/desafio-loja-pokemon)


## Env
Defina as variáveis de ambiente no arquivo `.env`.
```
REACT_APP_API_URL= // URL da API para consumir os pokemon
REACT_APP_API_TIMEOUT=30000 // Tempo de timeout da api em milissegundos
```

## Deploy
O deploy está sendo realizado automaticamente pelo Github Actions no Github Pages quando o código é enviado para a `branch master`, mas também é possível executar pelo comando abaixo.
```sh
yarn deploy
```

## Pipelines Github Actions CI/CD

#### CI
- Install
- Lint
- Test coverage
- Generate coverage report
- Upload coverage to Codecov

#### CD
- Install
- Build page
- Deploy to gh-pages

## Telas
<img src="docs/01.png" height="350">
<img src="docs/02.png" height="350">
<img src="docs/03.png" height="350">
<img src="docs/04.png" height="350">
<img src="docs/05.png" height="350">
<img src="docs/06.png" height="350">
