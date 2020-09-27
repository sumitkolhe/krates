import express, {Application,Request,Response,NextFunction} from "express";

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get("/", (req: Request, res:Response) => {
  res.json({message:"all ok"});
});



app.listen(80);
