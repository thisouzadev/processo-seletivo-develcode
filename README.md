- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Rest API](#rest-api)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

### Feito Com

Abaixo segue o que foi utilizado na criação desta API:

- [Node.js](https://nodejs.org/en/) 
- [Express](https://expressjs.com/pt-br/) 
- [MySQL](https://www.mysql.com/) 
- [sequelize-ORM](https://sequelize.org/) 
- [Multer](https://github.com/expressjs/multer) 


<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar a API, através da sua IDE, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso da API, é ideal que você tenha o ambiente configurado para usar a API, para isso você deve instalar: <br /> 
1. [MySQL](https://www.mysql.com/) 
2. [Node.js](https://nodejs.org/en/) 

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
processo-seletivo-develcode/
├── src/
│   ├── api/
│   │   ├── app.js
│   │   └── server.js
│   ├── controllers/
│   │   └── userControler.js 
│   ├── database/
│   │   ├── config config;js
│   │   ├── migrations/
│   │   │     └──   20220227175528-create-users.js
│   │   ├── models/
│   │   │     ├── index.js
│   │   │     └──User.js
│   │   └──  seeders/ 
│   │         └── 20220227175819-users.js
│   │   
│   ├── routes/
│   │   └── index.js
│   ├── services/
│   │   └── userServices.js  
│   ├── tests/
│   ├── uploads/
│   └── utils/
│       ├── dictionary/
│       │   └── statusCode.js
│       └── functions/
│           └── errorHandling.js
│   
├── .eslintrc.js
├── .gitignore
├── .sequelizerc
├── package-lock.json
├── package.json
└── README.md
```

### Instalação

Para instalar e utilizar essa API o processo é bem simples, basta clonar o repositorio com o comando :

1. Clone o repositório

- `https://github.com/thisouzadev/processo-seletivo-develcode`

- Entre na pasta do repositório que você acabou de clonar:
 

2. Instale as dependências

- `npm install`
- Por padrão, essa aplicação funciona a partir da porta `3000`;

3. crie as variaveis de ambiente exemplo:

`
MYSQL_USER=root
MYSQL_PASSWORD=MinhaSEnha
HOSTNAME=localhost
PORT=3000
`
 
4. rode a aplicação
- `npm run prestart`  
- `npm start` ou `npm run dev`



## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

<!-- rest API -->

## Rest API

1. registra o usuário

POST http://localhost:3000/register 
{
	"name": "thiago",	"birthday": "02/10/1991"
}

2. upload da image

PUT http://localhost:3000/register/:d/image

- image e o File


<!-- CONTACT -->

## Contato

github - https://github.com/thisouzadev
linkedin - https://www.linkedin.com/in/thisouzadev/
