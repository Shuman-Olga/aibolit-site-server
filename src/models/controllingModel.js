module.exports = (sequelize, Sequelize) => {
  const Controlling = sequelize.define(
    "controllings",
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
      address: Sequelize.STRING,
      phone: Sequelize.STRING,
      email: Sequelize.STRING,
      timeofwork: Sequelize.STRING,
      site: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Controlling;
};
