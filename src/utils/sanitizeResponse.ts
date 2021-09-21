import { Bucket } from '@src/interfaces/bucket'

export const sanitizeResponse = (data: Bucket[] | Bucket): Bucket[] | Bucket => {
  if (Array.isArray(data)) {
    const sanitizedResponse: Array<Bucket> = []
    data.forEach((item) => {
      let response = {} as Bucket

      response._id = item._id
      response.createdAt = item.createdAt
      response.updatedAt = item.updatedAt
      response = { ...response, ...item.data }

      sanitizedResponse.push(response)
    })

    return sanitizedResponse
  }

  let response = {} as Bucket

  response._id = data._id
  response.createdAt = data.createdAt
  response.updatedAt = data.updatedAt
  response = { ...response, ...data.data }

  return response
}
