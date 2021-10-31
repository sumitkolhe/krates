import { model, Schema, Document } from 'mongoose'

export interface StorageDocument extends Document {
  krateId: string
  collectionId: string
  data: Record<string, unknown>
  apiKey: string
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
    apiKey: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

StorageSchema.index({ krateId: 1, collectionId: 1 })

export const StorageModel = model<StorageDocument>('krate', StorageSchema)
