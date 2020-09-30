import { Request, Response, NextFunction } from "express";
import db from "../model/model";

const getBoxData = async (req: Request, res: Response) => {
  const db_instance = await db.find({
    boxId: {
      $in: [req.params.boxId],
    },
  });

  res.json(db_instance);
};

const getClusterData = async (req: Request, res: Response) => {
  const db_instance = await db.find({
    $and: [
      { boxId: { $in: [req.params.boxId] } },
      { clusterId: { $in: [req.params.clusterId] } },
    ],
  });

  res.json(db_instance);
};

const setBoxData = async (req: Request, res: Response) => {
  console.log(req.params.boxId, req.body);
  let db_instance = new db({
    boxId: req.params.boxId,
    boxData: req.body,
    clusterId: req.params.clusterId,
  });

  res.json(await db_instance.save());
};

const updateBoxData = async (req: Request, res: Response) => {
  console.log(req.params.boxId, req.body);
  let db_instance = new db({
    boxId: req.params.boxId,
    boxData: req.body,
    clusterId: req.params.clusterId,
  });

  res.json(await db_instance.save());
};

export = { getBoxData, setBoxData, updateBoxData, getClusterData };
