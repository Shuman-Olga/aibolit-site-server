const Sequelize = require("sequelize"),
  sequelize = require("../config/dbConfig"),
  db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.otzyv = require("./ozyvModel.js")(sequelize, Sequelize);
db.advantage = require("./advantageModel.js")(sequelize, Sequelize);
db.blog = require("./blogModel.js")(sequelize, Sequelize);
db.controlling = require("./controllingModel.js")(sequelize, Sequelize);
db.uslugi = require("./uslugiModel.js")(sequelize, Sequelize);
db.pravoinfa = require("./pravoInfaModel.js")(sequelize, Sequelize);
db.spravki = require("./spravkiModel.js")(sequelize, Sequelize);
db.program = require("./programModel.js")(sequelize, Sequelize);
db.elprogram = require("./elProgtamModel.js")(sequelize, Sequelize);

const Program_Elprogram = sequelize.define(
  "programelprogram",
  {},
  { timestamps: false }
);
db.program.belongsToMany(db.elprogram, {
  through: "programelprogram",
  foreignKey: "programId",
  otherKey: "elprogramId",
});
db.elprogram.belongsToMany(db.program, {
  through: "programelprogram",
  foreignKey: "elprogramId",
  otherKey: "programId",
});

module.exports = db;
