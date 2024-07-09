const db = require("../models"),
  Advantage = db.advantage;

exports.findAll = async (req, res) => {
  await Advantage.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
