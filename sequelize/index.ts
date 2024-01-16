import { Sequelize } from "sequelize";
import config from "./sequelize.config";

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
