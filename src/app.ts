import express from "express";
import morgan from "morgan";

export const app = express();

//MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.all('*', (req, res) => {
  res.status(404).json({
    status:'404 Not Found',
    message:`can't find ${req.originalUrl} on the server!`
  })
})
app.use(express.json());

