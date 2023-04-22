const { Sequelize } = require("sequelize");
const { DATABASE, USERNAME, PASSWORD, HOST } = require("./config");
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  dialect: "mariadb",
  host: HOST,
  sync: true,
});
const connectDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Connected to database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectDatabase();
module.exports = sequelize;
