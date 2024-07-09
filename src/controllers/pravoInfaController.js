const db = require("../models"),
  Pravoinfa = db.pravoinfa;

exports.findAll = async (req, res) => {
  await Pravoinfa.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
