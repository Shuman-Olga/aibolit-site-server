const db = require("../models"),
  Program = db.program,
  ElProgram = db.elprogram;

exports.findAll = async (req, res) => {
  await Program.findAll({
    order: ["id"],
    include: [
      {
        model: ElProgram,
        required: false,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
