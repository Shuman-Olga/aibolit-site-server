const express = require("express"),
  router = express.Router(),
  advantages = require("../controllers/advantageController");

router.get("/", advantages.findAll);

module.exports = router;
