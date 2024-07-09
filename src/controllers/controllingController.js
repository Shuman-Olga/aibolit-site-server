const db = require("../models"),
  Controlling = db.controlling;

exports.findAll = async (req, res) => {
  await Controlling.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
