const express = require("express"),
  router = express.Router(),
  spravkis = require("../controllers/spravkiController");

router.get("/", spravkis.findAll);

module.exports = router;
