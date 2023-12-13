const router = require("express").Router();

const servicoController = require("../controllers/servicoController");

router
    .route("/servicos")
    .post((req, res) => servicoController.create(req, res));

module.exports = router;
