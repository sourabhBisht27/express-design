const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    validate: {
      isEmail: true,
    },
  },
});
User.sync();
module.exports = User;
