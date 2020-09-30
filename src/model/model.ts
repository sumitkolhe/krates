import mongoose, { Schema } from "mongoose";
import config from "../config/config";

const boxSchema = new Schema(
  {
    boxId: { type: String, required: true },
    clusterId: { type: String, required: false },
    boxData: { type: Object, required: true },
  },
  { collection: config.COLLECTION_NAME }
);

const db = mongoose.model("boxModel", boxSchema);

export = db;
