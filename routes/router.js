const router = require("express").Router();

// Servicos Router
const servicosRouter = require("./servicos");

router.use("/", servicosRouter);

// Excursoes Router
const excursoesRouter = require("./excursoes");

router.use("/", excursoesRouter);

module.exports = router;
