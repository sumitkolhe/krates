export interface Base {
  _id: string
  baseId: string
  collectionId: string
  data: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

export interface BaseOptions {
  sort: string
  limit: number
  skip: number
  query: Record<string, unknown>
}
