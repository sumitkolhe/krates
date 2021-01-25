import { Request, Response } from "express";
import { BoxModel } from "@model/box.model";

export const getCollectionData = async (req: Request, res: Response) => {
  const db_instance = await BoxModel.find({
    $and: [
      { boxId: { $in: [req.params.boxId] } },
      { collectionId: { $in: [req.params.collectionId] } },
    ],
  });

  db_instance.forEach((cluster: any) => {
    res.json(cluster);
  });
};

