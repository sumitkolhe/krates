import { Router } from "express";
import controller from '../controller/controller';
const router = Router();

router.get("/api/:boxId", controller.getBoxData)

router.post("/api/:boxId", controller.setBoxData)


export = router
