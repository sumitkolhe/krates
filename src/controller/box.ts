import { RequestHandler } from "express";
import { BoxModel } from "@model/box.model";

export const getBoxData: RequestHandler = async (req, res, next) => {
  try {
    await BoxModel.find({ box_id: { $in: [req.params.box_id] as any } })
      .select("-_id -__v")
      .then((response: any) => {
        res.json(response);
      });
  } catch (error) {
    next(error);
  }
};

export const setBoxData: RequestHandler = async (req, res, next) => {
  try {
    const new_data = new BoxModel({
      box_id: req.params.box_id,
      data: req.body,
    });

    await new_data.save().then((response: any) => {
      res.json(response);
    });
  } catch (error) {
    next(error);
  }
};

// export const updateBoxData: RequestHandler = async (req, res, next) => {
//     try {
//       const db_instance = new BoxModel({
//         box_id: req.params.box_id,
//         box_data: req.body,
//       });

//       await db_instance.save().then((response: Object) => {
//         res.json(response);
//       });
//     } catch (error) {
//       next(error);
//     }
//   };

// export const updateBoxData: RequestHandler = async (req: Request, res: Response) => {
//   console.log(req.params.boxId, req.body);
//   let db_instance = new db({
//     boxId: req.params.boxId,
//     data: req.body,
//     collectionId: req.params.collectionId,
//   });

//   res.json(await db_instance.save());
// };
