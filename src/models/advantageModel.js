module.exports = (sequelize, Sequelize) => {
  const Advantage = sequelize.define(
    "advantages",
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      advantage: Sequelize.STRING,
      img: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Advantage;
};
