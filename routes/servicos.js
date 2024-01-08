const router = require("express").Router();

const servicoController = require("../controllers/servicoController");

/**
 * @swagger
 * components:
 *      schemas:
 *          Serviço:
 *              type: object
 *              required:
 *                  - nome
 *                  - descricao
 *                  - preco
 *              properties:                  
 *                  nome:
 *                      type: string
 *                      description: O título do serviço.
 *                  descricao:
 *                      type: string
 *                      description: A descrição do serviço.
 *                  preco:
 *                      type: number
 *                      description: O valor do serviço.
 *              example:                  
 *                  nome: Fotos e vídeos profissionais
 *                  descricao: Acesso às mídias da excursão, registradas por equipe profissional
 *                  preco: 3500
 */

/**
 * @swagger
 * tags:
 *      name: Serviços
 *      description: API para gerenciamento de serviços.
 */


/**
 * @swagger
 * /api/servicos:
 *      get:
 *          summary: Retorna a lista de todos os serviços cadastrados no banco de dados.
 *          tags: [Serviços]
 *          responses:
 *              200:
 *                  description: A lista de todos os serviços cadastrados.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Serviço'
 *              500:
 *                  description: Ocorreu um erro ao processar a requisição.
 */

router
    .route("/servicos")
    .get((req, res) => servicoController.getAll(req, res));


/**
 * @swagger
 * /api/servicos/{id}:
 *      get:
 *          summary: Realiza a consulta de um serviço através de seu ID.
 *          tags: [Serviços]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema: 
 *                  type: string
 *                required: true
 *                description: O id do serviço
 *          responses:
 *              200:
 *                  description: As informações do serviço pelo ID
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Serviço'
 *              404:
 *                  description: Serviço não encontrado!
 *              500:
 *                  description: Ocorreu um erro ao processar a requisição.
 */

router
    .route("/servicos/:id")
    .get((req, res) => servicoController.get(req, res));


/**
 * @swagger
 * /api/servicos:
 *      post:
 *          summary: Cria um novo serviço no banco de dados.
 *          tags: [Serviços]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Serviço'
 *          responses:
 *              201:
 *                  description: Serviço criado com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Serviço'
 *              500:
 *                  description: Ocorreu um erro ao processar a requisição.
 */

router
    .route("/servicos")
    .post((req, res) => servicoController.create(req, res));


/**
 * @swagger
 * /api/servicos/{id}:
 *      put:
 *          summary: Atualiza um serviço através de seu ID.
 *          tags: [Serviços]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                      type: string
 *                required: true
 *                description: O ID do serviço
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Serviço'
 *          responses:
 *              200:
 *                  description: Serviço atualizado com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Serviço'
 *              404:
 *                  description: Serviço não encontrado!
 *              500: 
 *                  description: Ocorreu um erro ao processar a requisição.
 */

router
    .route("/servicos/:id")
    .put((req, res) => servicoController.update(req, res));


/**
 * @swagger
 * /api/servicos/{id}:
 *      delete:
 *          summary: Exclui um serviço através de seu ID.
 *          tags: [Serviços]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                      type: string
 *                required: true
 *                description: O ID do serviço
 *          responses:
 *              200:
 *                  description: Serviço excluído com sucesso!
 *              404:
 *                  description: Serviço não encontrado!
 *              500:
 *                  description: Ocorreu um erro ao processar a requisição.
 */

router
    .route("/servicos/:id")
    .delete((req, res) => servicoController.delete(req, res));


module.exports = router;
