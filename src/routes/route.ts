import { Router } from "express";
import controller from '../controller/controller';
const router = Router();

router.get("/:boxId", controller.getBox)
router.post("/:boxId", controller.saveBox)


export = router
