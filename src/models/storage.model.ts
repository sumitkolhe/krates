import { model, Schema, Document } from 'mongoose'

export interface StorageDocument extends Document {
  bucketId: string
  collectionId: string
  data: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

const BucketSchema: Schema = new Schema(
  {
    bucketId: {
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

BucketSchema.index({ bucketId: 1 })
BucketSchema.index({ collectionId: 1 })

export const StorageModel = model<StorageDocument>('bucket', BucketSchema)
