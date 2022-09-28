import { Krate } from '../interfaces/krate'

export const sanitizeResponse = (data: Krate[] | Krate): Krate[] | Krate => {
  if (Array.isArray(data)) {
    const sanitizedResponse: Array<Krate> = []
    data.forEach((item) => {
      let response = {} as Krate

      response._id = item._id
      response.createdAt = item.createdAt
      response.updatedAt = item.updatedAt
      response = { ...response, ...item.data }

      sanitizedResponse.push(response)
    })

    return sanitizedResponse
  }

  let response = {} as Krate

  response._id = data._id
  response.createdAt = data.createdAt
  response.updatedAt = data.updatedAt
  response = { ...response, ...data.data }

  return response
}
