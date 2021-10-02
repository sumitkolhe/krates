export interface Base {
  _id: string
  baseId: string
  collectionId: string
  data: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}
