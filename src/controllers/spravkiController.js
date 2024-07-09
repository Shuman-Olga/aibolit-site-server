const db = require("../models"),
  Spravki = db.spravki;

exports.findAll = async (req, res) => {
  await Spravki.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
