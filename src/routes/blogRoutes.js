const express = require("express"),
  router = express.Router(),
  blogs = require("../controllers/blogController");

router.get("/", blogs.findAll);

module.exports = router;
