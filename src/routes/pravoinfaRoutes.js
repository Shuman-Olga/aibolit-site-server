const express = require("express"),
  router = express.Router(),
  pravoinfas = require("../controllers/pravoInfaController");

router.get("/", pravoinfas.findAll);

module.exports = router;
