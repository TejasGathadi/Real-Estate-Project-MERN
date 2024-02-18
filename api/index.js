import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";
import userRouter from "./routes/user.route.js";
dotenv.config();
import authRouter from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database".bgMagenta.white);
  })
  .catch((err) => {
    console.log(`Error Connecting to Database ${err}`.bgRed.white);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("App listening on port 3000!!!".bgBlue.white);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
