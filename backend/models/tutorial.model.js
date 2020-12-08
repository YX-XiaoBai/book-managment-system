const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorials", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Tutorial;
};
