import express, { Application } from "express";
import { connectDatabase } from "@helpers/init-database";
import { HandleError } from "@middleware/error-handler";
import { routes } from "@routes/route";
import { config } from "@config/config";
const app: Application = express();

connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(
  (
    err: express.ErrorRequestHandler,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => HandleError(err, req, res, next)
);

app.use(routes);
const HOST = config.SERVER_HOST;
const PORT = config.SERVER_PORT;
const PROTOCOL = config.SERVER_PROTOCOL;
app.listen(PORT, () => {
  console.log(`Server started on ${PROTOCOL}://${HOST}:${PORT}`);
});
