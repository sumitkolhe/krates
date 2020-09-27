import mongoose, { Collection, Schema } from "mongoose";

const boxSchema = new Schema(
  {
    boxId: { type: String },
    hedge: { type: String, required: true },
    boxData: { type: Object, required: true },
  },
  { collection: "user_data" }
);

const db = mongoose.model("box_data", boxSchema);

export = db;
