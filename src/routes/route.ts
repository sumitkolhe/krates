import { Router } from "express";
import controller from "../controller/controller";
const router = Router();

router.get("/:boxId", controller.getBoxData);
router.get("/:boxId/:collectionId", controller.getCollectionData);
router.post("/:boxId/:collectionId?", controller.setBoxData);
router.put("/:boxId/:collectionId?", controller.updateBoxData);

export = router;
