import { RequestHandler } from 'express'
import { Logger } from '../utils/logger'
import { globalConstants } from '../constants'
import { StorageService } from '../services/storage.service'
import { createRequestQuery } from '../utils/query'
import { MetaService } from '../services/meta.service'

export const getData: RequestHandler = async (req, res, next) => {
  try {
    const requestOptions = createRequestQuery(req)
    const responseData = await StorageService.getData(requestOptions)
    res.json(responseData)
  } catch (error) {
    Logger.error(error.stack)
    next(error)
  }
}

export const setData: RequestHandler = async (req, res, next) => {
  try {
    const { apiKey } = req
    const { krateId, collectionId } = req.params
    const data = req.body

    const responseData = await StorageService.setData(krateId, collectionId, apiKey, data)
    res.json(responseData)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const putData: RequestHandler = async (req, res, next) => {
  try {
    const { krateId, recordId } = req.params
    const data = req.body

    const responseData = await StorageService.putData(krateId, recordId, data)
    res.json(responseData)
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const deleteData: RequestHandler = async (req, res, next) => {
  try {
    const requestOptions = createRequestQuery(req)
    await StorageService.deleteData(requestOptions)
    res.json({ status: globalConstants.status.success, message: 'Data deleted succesfully' })
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}

export const getMetaData: RequestHandler = async (req, res, next) => {
  try {
    const { krateId } = req.params
    const stats = await MetaService.getMetaData(krateId)
    res.json(stats)
  } catch (error) {
    Logger.error(error.stack)
    next(error)
  }
}
