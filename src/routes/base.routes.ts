import express, { Router } from 'express'
import { validators } from '@src/middleware/validation'
import { deleteData, getData, putData, setData } from '@src/controller/storage.controller'

export const baseRouter: Router = express.Router()

baseRouter.get('/:baseId/:collectionId?/', validators.storage, getData)
baseRouter.post('/:baseId/:collectionId?/', validators.storage, setData)
baseRouter.put('/:baseId/:recordId', validators.put, putData)
baseRouter.delete('/:baseId/:collectionId?/', validators.storage, deleteData)
