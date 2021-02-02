import { RequestHandler } from "express";
import { BoxModel } from "@model/box.model";

export const getCollectionData: RequestHandler = async (req, res, next) => {
  try {
    await BoxModel.find({
      $and: [
        { box_id: { $in: [req.params.box_id] as any } },
        { collection_id: { $in: [req.params.collection_id] as any } },
      ],
    })
      .select("-_id -__v")
      .then((response: any) => {
        response.forEach((collection: any) => {
          res.json(collection);
        });
      });
  } catch (error) {
    next(error);
  }
};

export const setCollectionData: RequestHandler = async (req, res, next) => {
  try {
    const new_data = new BoxModel({
      box_id: req.params.box_id,
      collection_id: req.params.collection_id,
      data: req.body,
    });

    await new_data.save().then((response: any) => {
      res.json(response);
    });
  } catch (error) {
    next(error);
  }
};
