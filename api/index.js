import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database".bgMagenta.white);
  })
  .catch((err) => {
    console.log(`Error Connecting to Database ${err}`.bgRed.white);
  });

const app = express();

app.listen(3000, () => {
  console.log("App listening on port 3000!!!".bgBlue.white);
});
