import { model, Schema, Document } from "mongoose";

interface ClusterDocument extends Document {
  cluster_id: {
    type: string;
    required: boolean;
  };
  cluster_data: {
    type: object;
  };
  created_at: { type: Date };
  updated_at: { type: Date };
}

const ClusterSchema = new Schema(
  {
    cluster_id: {
      type: String,
      required: true,
    },

    cluster_data: {
      type: Object,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const ClusterModel = model<ClusterDocument>("cluster", ClusterSchema);
