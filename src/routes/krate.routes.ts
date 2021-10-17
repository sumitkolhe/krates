import express, { Router } from 'express'
import { validators } from '@src/middleware/validation'
import { deleteData, getData, putData, setData } from '@src/controller/storage.controller'

export const krateRouter: Router = express.Router()

krateRouter.get('/:krateId/:collectionId?/', validators.storage, getData)
krateRouter.post('/:krateId/:collectionId?/', validators.storage, setData)
krateRouter.delete('/:krateId/:collectionId?/', validators.storage, deleteData)

krateRouter.put('/:krateId/:recordId', validators.put, putData)
