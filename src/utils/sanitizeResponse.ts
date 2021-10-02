/* eslint-disable no-console */
import { Base } from '@src/interfaces/base'

export const sanitizeResponse = (data: Base[] | Base): Base[] | Base => {
  if (Array.isArray(data)) {
    const sanitizedResponse: Array<Base> = []
    data.forEach((item) => {
      let response = {} as Base

      response._id = item._id
      response.createdAt = item.createdAt
      response.updatedAt = item.updatedAt
      response = { ...response, ...item.data }

      sanitizedResponse.push(response)
    })

    return sanitizedResponse
  }

  let response = {} as Base

  response._id = data._id
  response.createdAt = data.createdAt
  response.updatedAt = data.updatedAt
  response = { ...response, ...data.data }

  return response
}
