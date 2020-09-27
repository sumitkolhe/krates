import express, { Application } from "express";
import "../src/store/store";
import controller from "./controller/controller";
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", controller.getBox);

app.listen(80);
