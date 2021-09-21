export interface Bucket {
  _id: string
  bucketId: string
  collectionId: string
  data: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}
