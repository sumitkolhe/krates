import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
const db = require("../src/model/model");

const app: Application = express();

mongoose.connect(
  "mongodb://localhost:27017/data",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to local db");
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  let db_instance = new db({
    boxId: "qwertyuiop123",
  });

  res.json(await db_instance.save());
});

app.listen(80);
