module.exports = (sequelize, Sequelize) => {
  const Spravki = sequelize.define(
    "spravkis",
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      path: Sequelize.STRING,
      img: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Spravki;
};
