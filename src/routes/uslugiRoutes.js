const express = require("express"),
  router = express.Router(),
  uslugies = require("../controllers/uslugiController");

router.get("/", uslugies.findAll);

module.exports = router;
