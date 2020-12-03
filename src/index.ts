import express, { Application } from "express";
import { dbConnect } from "./db/dbConnection";
import routes from "./routes/route";
const app: Application = express();

dbConnect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.listen(80);
