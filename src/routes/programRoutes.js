const express = require("express"),
  router = express.Router(),
  programs = require("../controllers/programController");

router.get("/", programs.findAll);

module.exports = router;
