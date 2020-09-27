import express, { Application, Request, Response, NextFunction } from "express";
import db from "../model/model";

const getBox = async (req: Request, res: Response) => {
  let db_instance = new db({
    boxId: "qwertyuiop123",
  });

  res.json(await db_instance.save());
};

const saveBox = async (req: Request, res: Response) => {
  let db_instance = new db({
    boxId: "qwertyuiop123",
    hedge: "hedge id",
    data: {name:"sumit", lname:"kolhe"},
  });

  res.json(await db_instance.save());
};

export = { getBox, saveBox };
