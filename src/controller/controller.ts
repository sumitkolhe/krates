import { S_IFBLK } from "constants";
import { Request, Response, NextFunction } from "express";
import * as mongoose from "mongoose";
import db from "../model/model";

const getBoxData = async (req: Request, res: Response) => {
  const db_instance = await db.find({
    'boxId':{
      $in:[req.params.boxId]
    }
  });

  console.log(db_instance)
};

const setBoxData = async (req: Request, res: Response) => {
  console.log(req.params.boxId, req.body);
  let db_instance = new db({
    boxId: req.params.boxId,
    boxData: req.body,
  });

  res.json(await db_instance.save());
};

export = { getBoxData, setBoxData };
