const express = require("express"),
  router = express.Router(),
  controllings = require("../controllers/controllingController");

router.get("/", controllings.findAll);

module.exports = router;
