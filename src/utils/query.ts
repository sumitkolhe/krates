import { Request } from 'express'
import { KrateOptions } from '../interfaces/krate'

export const sanitizeQuery = (requestQuery: string): string => {
  const sanitizedQuery = Object()
  const queryObject = Object()

  requestQuery.split(',').forEach((i: string) => {
    const item = i.split(':')[0]
    const value = i.split(':')[1]
    queryObject[item] = value
  })

  Object.keys(queryObject).forEach((key) => {
    const value = queryObject[key]

    if (
      value.startsWith('>=') ||
      value.startsWith('<=') ||
      value.startsWith('>') ||
      value.startsWith('<') ||
      value.startsWith('=')
    ) {
      // Querying a Number
      let val = 0
      if (value.startsWith('>=') || value.startsWith('<=')) val = value.substr(2)
      else val = value.substr(1)

      if (value.startsWith('>=')) sanitizedQuery[`data.${key}`] = { $gte: +val }
      else if (value.startsWith('<=')) sanitizedQuery[`data.${key}`] = { $lte: +val }
      else if (value.startsWith('>')) sanitizedQuery[`data.${key}`] = { $gt: +val }
      else if (value.startsWith('<')) sanitizedQuery[`data.${key}`] = { $lt: +val }
      else if (value.startsWith('=')) sanitizedQuery[`data.${key}`] = +val
    } else if (value.startsWith('*') || value.endsWith('*')) {
      // Need to do regex query
      let val = value
      let regexp

      if (value.startsWith('*')) val = value.substr(1)
      if (value.endsWith('*')) val = val.substr(0, val.length - 1)
      if (value.startsWith('*') && value.endsWith('*')) regexp = new RegExp(val, 'i')
      else if (value.startsWith('*')) regexp = new RegExp(`${val}$`, 'i')
      else if (value.endsWith('*')) regexp = new RegExp(`^${val}`, 'i')

      sanitizedQuery[`data.${key}`] = regexp
    } else if (value === true) sanitizedQuery[`data.${key}`] = true
    else if (value === false) sanitizedQuery[`data.${key}`] = false
    else sanitizedQuery[`data.${key}`] = new RegExp(`^${value}$`, 'i')
  })

  return sanitizedQuery
}

export const createRequestQuery = (req: Request): KrateOptions => {
  const requestOptions = Object()
  let queryOptions = Object()

  const { skip, limit, query } = req.query
  const { krateId, collectionId, recordId } = req.params
  if (query) queryOptions = sanitizeQuery(query as string)
  if (collectionId) queryOptions.collectionId = collectionId
  if (recordId) queryOptions._id = recordId

  queryOptions.krateId = krateId
  requestOptions.skip = Number(skip) || 0
  requestOptions.limit = Number(limit) || 25

  requestOptions.query = queryOptions

  return requestOptions
}
