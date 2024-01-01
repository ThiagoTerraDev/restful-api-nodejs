# RESTful API Node.js (South Journey)

Este projeto faz parte do contexto da South Journey, uma agência fictícia a qual realiza excursões em países da América do Sul (https://github.com/ThiagoTerraDev/south-journey).

O objetivo desta aplicação é desempenhar o gerenciamento de custos das excursões. É implementada uma API seguindo o padrão REST, sendo permitido ao usuário consultar, adicionar, deletar ou editar excursões e serviços cadastrados no banco de dados (aplicação do conceito CRUD).

O sistema oferece a possibilidade de adicionarmos um orçamento (budget), havendo validações que irão observar se o valor dos serviços contratados supera o orçamento disponível.

Principais tecnologias utilizadas:
 - Node.js
 - Express
 - MongoDB
 - Mongoose

## Como executar

Será necessário ter o Node.js e o npm instalados.

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo:

```
$ npm install

```
Este comando instala as dependências/bibliotecas descritas no arquivo package.json. Uma pasta chamada "node_modules" será criada.


Para executar a API, basta executar o comando:

```
$ npm start

```

Para acessar a documentação da API, via Swagger: http://localhost:3000/api-docs/
