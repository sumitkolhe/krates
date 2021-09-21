import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'
import { BucketService } from '@src/services/bucket.service'

export const getBucketData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId } = req.params

    const response = await BucketService.getBucketData(bucketId)
    res.json(response)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const setBucketData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId } = req.params
    const data = req.body

    const response = await BucketService.setBucketData(bucketId, data)
    res.json(response)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}
