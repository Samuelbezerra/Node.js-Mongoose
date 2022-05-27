import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
const app = express();

dotenv.config();

import personRouter from "./routes/personRoutes.js"

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/person", personRouter)

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log("Conectamos ao mongoDB!");
        app.listen(3000);
    })
    .catch((err)=> console.log(err));
