import express, { Router } from 'express'
import { validators } from '@src/middleware/validation'
import { deleteData, getData, putData, setData } from '@src/controller/storage.controller'

export const baseRouter: Router = express.Router()

baseRouter.get('/:krateId/:collectionId?/', validators.storage, getData)
baseRouter.post('/:krateId/:collectionId?/', validators.storage, setData)
baseRouter.put('/:krateId/:recordId', validators.put, putData)
baseRouter.delete('/:krateId/:collectionId?/', validators.storage, deleteData)
