import mongoose, { Schema } from "mongoose";

const boxSchema = new Schema({
  boxId: { type: String, required: true },
  hedge: { type: String, required: false },
  boxData: { type: Object, required: true },
});

const db = mongoose.model("user_data", boxSchema);

export = db;
