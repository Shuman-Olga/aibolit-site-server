const db = require("../models"),
  Uslugi = db.uslugi;

exports.findAll = async (req, res) => {
  await Uslugi.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
