import { RequestHandler } from 'express'
import { StorageModel } from '../models/storage.model'
import { CreateError } from './errorHandler'

export const authenticateRequest: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    req.apiKey = req.headers['x-api-key']?.toString() || null

    const { krateId } = req.params
    const firstRecord = await StorageModel.findOne({ krateId }).select('apiKey').sort('-createdAt').exec()

    if (!firstRecord) return next()
    if (!firstRecord?.apiKey) {
      req.apiKey = null
      return next()
    }

    if (firstRecord?.apiKey === req.apiKey) return next()
    throw CreateError.Unauthorized('Invalid API key')
  } catch (error) {
    return next(error)
  }
}
