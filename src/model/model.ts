import mongoose, { Collection, Schema } from "mongoose";
import config from "../config/config"

const boxSchema = new Schema(
  {
    boxId: { type: String },
    boxData: { type: Object, required: true },
  },
  { collection: config.COLLECTION_NAME }
);

const db = mongoose.model("box_data", boxSchema);

export = db;
