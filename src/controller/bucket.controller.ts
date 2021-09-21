import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'
import { BucketService } from '@src/services/bucket.service'
import { globalConstants } from '@src/constants'

export const getBucketData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId } = req.params

    const bucketData = await BucketService.getBucketData(bucketId)
    res.json(bucketData)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const setBucketData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId } = req.params
    const data = req.body

    const bucketData = await BucketService.setBucketData(bucketId, data)
    res.json(bucketData)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const deleteBucketData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId } = req.params

    await BucketService.deleteBucketData(bucketId)
    res.json({ status: globalConstants.status.success, message: 'Bucket deleted succesfully' })
  } catch (error) {
    Logger.error(error)
    next(error)
  }
}
