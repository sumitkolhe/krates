import { getBoxData, setBoxData } from "@controller/box";
import { getCollectionData, setCollectionData } from "@controller/collection";
import express, { Router } from "express";

export const routes: Router = express.Router();

routes.get("/:box_id/", getBoxData);
routes.post("/:box_id/", setBoxData);
routes.get("/:box_id/:collection_id", getCollectionData);
routes.post("/:box_id/:collection_id", setCollectionData);
