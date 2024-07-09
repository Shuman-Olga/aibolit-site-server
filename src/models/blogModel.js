module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define(
    "blogs",
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
  return Blog;
};
