const router = require("express").Router();

const servicoController = require("../controllers/servicoController");

router
    .route("/servicos")
    .post((req, res) => servicoController.create(req, res));

router
    .route("/servicos")
    .get((req, res) => servicoController.getAll(req, res));

router
    .route("/servicos/:id")
    .get((req, res) => servicoController.get(req, res));

module.exports = router;
