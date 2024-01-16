import dotenv from "dotenv";
import path from "path";
// import db from "../sequelize/index";

const configPath = path.join(__dirname, "..", "config.env");
dotenv.config({ path: configPath });

process.on("uncaughtException", (err) => {
  console.log("UNHANDLED EXCEPTION , shutting down....");
  console.log(err);
  process.exit(1);
});

import { app } from "./app";

// console.log(process.env);
app.get("/", (req, res) => {
  res.send("Hello, this is your Express server using TypeScript!");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

app.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTED , shutting down....");
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
