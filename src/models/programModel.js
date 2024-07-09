module.exports = (sequelize, Sequelize) => {
  const Program = sequelize.define(
    "programs",
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: Sequelize.STRING,
      path: Sequelize.STRING,
      img: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Program;
};
