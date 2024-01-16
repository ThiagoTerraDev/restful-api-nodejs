# RESTful API Node.js (South Journey)

Este projeto faz parte do contexto da South Journey, uma agência fictícia a qual realiza excursões em países da América do Sul (https://github.com/ThiagoTerraDev/south-journey).

O objetivo desta aplicação é desempenhar o gerenciamento de custos das excursões. É implementada uma API seguindo o padrão REST, sendo permitido ao usuário consultar, adicionar, deletar ou editar excursões e serviços cadastrados no banco de dados (aplicação do conceito CRUD).

O sistema oferece a possibilidade de adicionarmos um orçamento, havendo validações que irão observar se o valor total da excursão (o valor padrão do passeio somado aos serviços adicionais contratados) supera o orçamento disponível.

Deploy: https://restful-api-nodejs.vercel.app/api/excursoes

Repositório do front-end: https://github.com/ThiagoTerraDev/south-journey

Arquitetura do projeto South Journey: https://1drv.ms/i/s!AvTc9X8DiWmVl8IsCBDoJsWu2qsV8A?e=PtsR2W


## Como executar / Requisitos

Será necessário ter o Node.js instalado na versão 18.x

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo:

```
$ npm install

```
Este comando instala as dependências/bibliotecas descritas no arquivo package.json. Uma pasta chamada "node_modules" será criada.


Para executar a API, basta executar o comando:

```
$ npm run dev

```

Para acessar a documentação da API, via Swagger: http://localhost:3000/api-docs/


## Como executar os Testes

Após executar a API, através das instruções supracitadas, abra um novo terminal, navegue até o diretório raiz do projeto e execute o seguinte comando:

```
$ npm run test

```


## Principais tecnologias utilizadas:
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


## Status: em desenvolvimento

Algumas melhorias e funcionalidades serão implementadas, tais como:

- Autenticação: Implementação de cadastro e login.
- Implementação de mais testes automatizados com Jest.


## Entre em contato

Estou à disposição para esclarecer dúvidas e oferecer o suporte necessário. Entre em contato pelo e-mail thiagoterradev@gmail.com
