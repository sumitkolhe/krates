import mongoose, { Schema } from "mongoose";
import config from "../config/config";

const boxSchema = new Schema(
  {
    boxId: { type: String, required: true },
    collectionId: { type: String, required: false },
    data: { type: Object, required: true },
  },
  { collection: config.COLLECTION_NAME }
);

const db = mongoose.model("boxModel", boxSchema);

export = db;