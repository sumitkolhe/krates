import express, { Application } from "express";
import "../src/store/store";
import routes from "./routes/route";
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(80);
