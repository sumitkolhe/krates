import { model, Schema, Document } from 'mongoose'

export interface StorageDocument extends Document {
  baseId: string
  collectionId: string
  data: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

const StorageSchema: Schema = new Schema(
  {
    baseId: {
      type: String,
      required: true,
    },
    collectionId: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
)

export const StorageModel = model<StorageDocument>('detabase', StorageSchema)
