import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'
import { CollectionService } from '@src/services/collection.service'

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
