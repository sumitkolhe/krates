import path from "path";
import express, { Application } from "express";
import { connectDatabase } from "@helpers/init-database";
import { HandleError } from "@middleware/error-handler";
import { routes } from "@routes/route";
import { config } from "@config/config";

const app: Application = express();

connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const HOST: any = config.SERVER_HOST;
const PORT = config.SERVER_PORT;

app.use("/", express.static(path.join(__dirname, "..", "/web")));
app.use(routes);
app.use(
  (
    err: express.ErrorRequestHandler,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => HandleError(err, req, res, next)
);

app.listen(PORT, HOST);
console.log(`Server listening on http://${HOST}:${PORT}`);
