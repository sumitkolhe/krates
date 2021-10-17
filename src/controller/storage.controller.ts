/* eslint-disable no-console */
import { RequestHandler } from 'express'
import { Logger } from '@src/utils/logger'
import { globalConstants } from '@src/constants'
import { StorageService } from '@src/services/storage.service'
import { createRequestQuery } from '@src/utils/query'

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
    const { krateId, collectionId } = req.params
    const data = req.body

    const responseData = await StorageService.setData(krateId, collectionId, data)
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
    const { krateId } = req.params

    await StorageService.deleteData(krateId)
    res.json({ status: globalConstants.status.success, message: 'Krate deleted succesfully' })
  } catch (error) {
    Logger.error(error.message)
    next(error)
  }
}
