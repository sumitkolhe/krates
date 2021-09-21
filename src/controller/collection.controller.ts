import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'
import { CollectionService } from '@src/services/collection.service'
import { globalConstants } from '@src/constants'

export const getCollectionData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId, collectionId } = req.params

    const collectionData = await CollectionService.getCollectionData(bucketId, collectionId)
    res.json(collectionData)
  } catch (error) {
    Logger.error(error)
    next(error)
  }
}

export const setCollectionData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId, collectionId } = req.params
    const data = req.body

    const collectionData = await CollectionService.setCollectionData(bucketId, collectionId, data)
    res.json(collectionData)
  } catch (error) {
    Logger.error(error)
    next(error)
  }
}

export const deleteCollectionData: RequestHandler = async (req, res, next) => {
  try {
    const { bucketId, collectionId } = req.params

    await CollectionService.deleteCollectionData(bucketId, collectionId)
    res.json({ status: globalConstants.status.success, message: 'Collection deleted succesfully' })
  } catch (error) {
    Logger.error(error)
    next(error)
  }
}
