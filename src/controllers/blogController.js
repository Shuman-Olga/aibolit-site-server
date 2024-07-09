const db = require("../models"),
  Blog = db.blog;

exports.findAll = async (req, res) => {
  await Blog.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
