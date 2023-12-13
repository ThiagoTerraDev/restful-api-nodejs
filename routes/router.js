const router = require("express").Router();

// Servicos Router
const servicosRouter = require("./servicos");

router.use("/", servicosRouter);

module.exports = router;
