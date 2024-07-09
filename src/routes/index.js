const express = require("express"),
  router = express.Router(),
  otzyvysRoutes = require("./otzyvRoutes"),
  advantagesRoutes = require("./advantageRoutes"),
  blogRoutes = require("./blogRoutes"),
  uslugiRoutes = require("./uslugiRoutes"),
  pravoinfaRoutes = require("./pravoinfaRoutes"),
  spravkiRoutes = require("./spravkiRoutes"),
  programsRoutes = require("./programRoutes"),
  controllingsRoutes = require("./controllingRoutes");

router.use("/otzyvy", otzyvysRoutes);
router.use("/advantages", advantagesRoutes);
router.use("/blog", blogRoutes);
router.use("/controlling", controllingsRoutes);
router.use("/uslugi", uslugiRoutes);
router.use("/pravoinfa", pravoinfaRoutes);
router.use("/spravki", spravkiRoutes);
router.use("/program", programsRoutes);

module.exports = router;
