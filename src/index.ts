import express, { Application } from "express";
import { dbConnect } from "../src/store/store";
import routes from "./routes/route";
const app: Application = express();

dbConnect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(80);
