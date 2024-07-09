const db = require("../models"),
  Otzyv = db.otzyv;

exports.findAll = async (req, res) => {
  await Otzyv.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
