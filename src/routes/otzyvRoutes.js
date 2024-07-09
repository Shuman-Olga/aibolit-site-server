const express = require("express"),
  router = express.Router(),
  otzyvy = require("../controllers/otzyvyController");

router.get("/", otzyvy.findAll);

module.exports = router;
