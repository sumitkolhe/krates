import { model, Schema, Document } from "mongoose";
interface BoxDocument extends Document {
  box_id: {
    type: string;
    required: boolean;
  };
  collection_id: {
    type: string;
    required: boolean;
  };
  data: {
    type: object;
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
    collection_id: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

BoxSchema.index({ box_id: 1 }, { unique: true });

export const BoxModel = model<BoxDocument>("box", BoxSchema);
