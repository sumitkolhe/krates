import express, { Router } from 'express'
import { validators } from '@src/middleware/validation'
import { deleteData, getData, putData, setData } from '@src/controller/storage.controller'

export const routes: Router = express.Router()

routes
  .route('/:bucketId/:collectionId?/')
  .get(validators.storage, getData)
  .post(validators.storage, setData)
  .delete(validators.storage, deleteData)

routes.route('/:bucketId/:recordId').put(validators.put, putData)
