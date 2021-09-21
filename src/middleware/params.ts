import { RequestHandler } from 'express'
import { CreateError } from '@src/middleware/errorHandler'
import { Logger } from '@src/utils/logger'

export const extractParams: RequestHandler = (req, _res, next) => {
  try {
    req.bucketId = req.params.bucketId
    req.collectionId = req.params?.collectionId

    next()
  } catch (error) {
    Logger.error(error)
    throw CreateError.BadRequest(error)
  }
}
