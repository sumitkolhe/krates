import express, { Router } from 'express'
import { validators } from '@src/middleware/validation'
import { deleteData, getData, putData, setData } from '@src/controller/storage.controller'
import { rateLimit } from '@src/middleware/rateLimit'

export const krateRouter: Router = express.Router()

krateRouter.get('/:krateId/:collectionId?/', validators.storage, getData)
krateRouter.post('/:krateId/:collectionId?/', rateLimit, validators.storage, setData)
krateRouter.delete('/:krateId/:collectionId?/', rateLimit, validators.storage, deleteData)
krateRouter.put('/:krateId/:recordId', rateLimit, validators.put, putData)
