import { Router } from "express";
import controller from "../controller/controller";
const router = Router();

router.get("/:boxId/:clusterId?", controller.getBoxData);
router.post("/:boxId/:clusterId?", controller.setBoxData);

export = router;
