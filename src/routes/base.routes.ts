import express, { Router } from 'express'
import { validators } from '@src/middleware/validation'
import { deleteData, getData, putData, setData } from '@src/controller/storage.controller'

export const baseRouter: Router = express.Router()

baseRouter
  .route('/:baseId/:collectionId?/')
  .get(validators.storage, getData)
  .post(validators.storage, setData)
  .delete(validators.storage, deleteData)

baseRouter.route('/:baseId/:recordId').put(validators.put, putData)
