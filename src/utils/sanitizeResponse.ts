import { Bucket } from '@src/interfaces/bucket'

export const sanitizeResponse = (data: Bucket): Bucket => {
  let response = {} as Bucket

  response._id = data._id
  response.createdAt = data.createdAt
  response.updatedAt = data.updatedAt
  response = { ...response, ...data.data }

  return response
}
