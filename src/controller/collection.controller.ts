import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'

export const getCollectionData: RequestHandler = async () => {
  try {
    Logger.info('get collection data')
  } catch (error) {
    Logger.error(error)
  }
}

export const setCollectionData: RequestHandler = async () => {
  try {
    Logger.info('set collection data')
  } catch (error) {
    Logger.error(error)
  }
}
