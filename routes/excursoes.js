const router = require("express").Router();

const excursaoController = require("../controllers/excursaoController");

router
    .route("/excursoes")
    .post((req, res) => excursaoController.create(req, res));

router
    .route("/excursoes")
    .get((req, res) => excursaoController.getAll(req, res));

router
    .route("/excursoes/:id")
    .get((req, res) => excursaoController.get(req, res));

module.exports = router;
