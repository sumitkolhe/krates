import { ClusterModel } from "@model/collection.model";
import { model, Schema, Document } from "mongoose";
interface BoxDocument extends Document {
  box_id: {
    type: string;
    required: boolean;
  };
  box_data: {
    type: object;
  };
  cluster: {
    type: Schema.Types.ObjectId;
    ref: string;
  };
  created_at: { type: Date };
  updated_at: { type: Date };
}

const BoxSchema = new Schema(
  {
    box_id: {
      type: String,
      required: true,
    },
    box_data: {
      type: Object,
    },
    cluster: [{ type: Schema.Types.ObjectId, ref: ClusterModel }],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

BoxSchema.index({ box_id: 1 }, { unique: true });

export const BoxModel = model<BoxDocument>("box", BoxSchema);
