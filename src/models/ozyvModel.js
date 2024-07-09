module.exports = (sequelize, Sequelize) => {
  const Otzyv = sequelize.define(
    "otzyvies",
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
      forname: Sequelize.STRING,
      otzyv: Sequelize.STRING,
      date: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Otzyv;
};
