import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'
import { BucketService } from '@src/services/bucket.service'

export const getBucketData: RequestHandler = async () => {
  try {
    Logger.info('get bucket data')
  } catch (error) {
    Logger.error(error)
  }
}

export const setBucketData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId } = req.params
    const data = req.body

    const response = await BucketService.storeBucketData(bucketId, data)
    res.json(response)
  } catch (error) {
    Logger.error(error.stack)
    next(error)
  }
}
