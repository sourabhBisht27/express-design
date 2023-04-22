const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");
const Todo = sequelize.define("Todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false, // allowNull defaults to true
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
User.hasMany(Todo);
Todo.belongsTo(User);
Todo.sync();
module.exports = Todo;
