import { Router } from "express";
import controller from "../controller/controller";
const router = Router();

router.get("/:boxId", controller.getBoxData);
router.get("/:boxId/:clusterId", controller.getClusterData);
router.post("/:boxId/:clusterId?", controller.setBoxData);
router.put("/:boxId/:clusterId?", controller.updateBoxData);

export = router;
