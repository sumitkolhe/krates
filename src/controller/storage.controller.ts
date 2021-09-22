import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'
import { globalConstants } from '@src/constants'
import { StorageService } from '@src/services/storage.service'

export const getData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId, collectionId } = req.params

    const bucketData = await StorageService.getData(bucketId, collectionId)
    res.json(bucketData)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const setData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId, collectionId } = req.params
    const data = req.body

    const bucketData = await StorageService.setData(bucketId, collectionId, data)
    res.json(bucketData)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const deleteData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId } = req.params

    await StorageService.deleteData(bucketId)
    res.json({ status: globalConstants.status.success, message: 'Bucket deleted succesfully' })
  } catch (error) {
    Logger.error(error)
    next(error)
  }
}
