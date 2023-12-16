const router = require("express").Router();

const excursaoController = require("../controllers/excursaoController");

router
    .route("/excursoes")
    .post((req, res) => excursaoController.create(req, res));

module.exports = router;
