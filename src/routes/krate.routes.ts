import express, { Router } from 'express'
import { validators } from '@src/middleware/validation'
import { deleteData, getData, putData, setData } from '@src/controller/storage.controller'
import { rateLimit } from '@src/middleware/rateLimit'

export const krateRouter: Router = express.Router()

krateRouter.get('/:krateId/record/:recordId/', validators.getRecordData, getData)
krateRouter.get('/:krateId/:collectionId?/', validators.getAllData, getData)
krateRouter.post('/:krateId/:collectionId?/', rateLimit, validators.post, setData)
krateRouter.put('/:krateId/:recordId/', rateLimit, validators.put, putData)
krateRouter.delete('/:krateId/', rateLimit, validators.delete, deleteData)
