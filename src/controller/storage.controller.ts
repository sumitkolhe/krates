import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'
import { globalConstants } from '@src/constants'
import { StorageService } from '@src/services/storage.service'

export const getData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId, collectionId } = req.params

    const responseData = await StorageService.getData(bucketId, collectionId)
    res.json(responseData)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const setData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId, collectionId } = req.params
    const data = req.body

    const responseData = await StorageService.setData(bucketId, collectionId, data)
    res.json(responseData)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const putData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId, recordId } = req.params
    const data = req.body

    const responseData = await StorageService.putData(bucketId, recordId, data)
    res.json(responseData)
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
    Logger.error(error.message)
    next(error)
  }
}
