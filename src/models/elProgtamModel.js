module.exports = (sequelize, Sequelize) => {
  const ElProgram = sequelize.define(
    "elprograms",
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return ElProgram;
};
