module.exports = (sequelize, Sequelize) => {
  const PravoInfa = sequelize.define(
    "pravoinfas",
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: Sequelize.STRING,
      pdf: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return PravoInfa;
};
