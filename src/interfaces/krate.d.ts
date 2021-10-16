export interface Krate {
  _id: string
  krateId: string
  collectionId: string
  data: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

export interface KrateOptions {
  sort: string
  limit: number
  skip: number
  query: Record<string, unknown>
}
