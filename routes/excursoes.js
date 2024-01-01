const router = require("express").Router();

const excursaoController = require("../controllers/excursaoController");


/**
 * @swagger
 * components:
 *      schemas:
 *          Excursão:
 *              type: object
 *              required:
 *                  - titulo
 *                  - preco
 *                  - imagem
 *              properties:                  
 *                  titulo:
 *                      type: string
 *                      description: O título da excursão
 *                  preco:
 *                      type: number
 *                      description: O valor da excursão
 *                  imagem:
 *                      type: number
 *                      description: A imagem que representa a excursão
 *                  servicos:
 *                      type: array
 *                      description: Os serviços contratados para compor a excursão
 *              example:                  
 *                  titulo: Deserto do Atacama, Chile
 *                  preco: 2000
 *                  imagem: teste.jpg
 *                  servicos: [
 *                      {
 *                          nome: "Alimentar animais 1",
 *                          descricao: "Dar comida aos animais pequenos",
 *                          preco: 500                          
 *                      },
 *                      {
 *                          nome: "Alimentar animais 2",
 *                          descricao: "Dar comida aos animais Y",
 *                          preco: 1750                          
 *                      }
 *                     ]
 */

/**
 * @swagger
 * tags:
 *      name: Excursões
 *      description: API para gerenciamento das excursões.
 */


/**
 * @swagger
 * /api/excursoes:
 *      get:
 *          summary: Retorna a lista de todas as excursões cadastradas no banco de dados.
 *          tags: [Excursões]
 *          responses:
 *              200:
 *                  description: A lista de todas as excursões cadastradas
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Excursão'
 */

router
    .route("/excursoes")
    .get((req, res) => excursaoController.getAll(req, res));


/**
 * @swagger
 * /api/excursoes:
 *      post:
 *          summary: Cria uma nova excursão no banco de dados.
 *          tags: [Excursões]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Excursão'
 *          responses:
 *              201:
 *                  description: Excursão definida com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Excursão'
 *              500:
 *                  description: Erro do servidor.
 */

router
    .route("/excursoes")
    .post((req, res) => excursaoController.create(req, res));


/**
 * @swagger
 * /api/excursoes/{id}:
 *      get:
 *          summary: Realiza a consulta de uma excursão através de seu ID.
 *          tags: [Excursões]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema: 
 *                  type: string
 *                required: true
 *                description: O id da excursão
 *          responses:
 *              200:
 *                  description: As informações da excursão pelo ID
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Excursão'
 *              404:
 *                  description: Excursão não encontrada!
 */

router
    .route("/excursoes/:id")
    .get((req, res) => excursaoController.get(req, res));


/**
 * @swagger
 * /api/excursoes/{id}:
 *      put:
 *          summary: Atualiza uma excursão através de seu ID.
 *          tags: [Excursões]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                      type: string
 *                required: true
 *                description: O ID da excursão
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Excursão'
 *          responses:
 *              200:
 *                  description: Excursão atualizada com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Excursão'
 *              404:
 *                  description: Excursão não encontrada!
 *              500: 
 *                  description: Erro do servidor.
 */

router
    .route("/excursoes/:id")
    .put((req, res) => excursaoController.update(req, res));


/**
 * @swagger
 * /api/excursoes/{id}:
 *      delete:
 *          summary: Exclui uma excursão através de seu ID.
 *          tags: [Excursões]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                      type: string
 *                required: true
 *                description: O ID da excursão
 *          responses:
 *              200:
 *                  description: Excursão excluída com sucesso!
 *              404:
 *                  description: Excursão não encontrada! 
 */

router
    .route("/excursoes/:id")
    .delete((req, res) => excursaoController.delete(req, res));


module.exports = router;
