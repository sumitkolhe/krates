import { model, Schema, Document } from 'mongoose'

export interface StorageDocument extends Document {
  krateId: string
  collectionId: string
  data: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

const StorageSchema: Schema = new Schema(
  {
    krateId: {
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

export const StorageModel = model<StorageDocument>('krate', StorageSchema)
