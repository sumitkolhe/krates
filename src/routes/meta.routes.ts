import express, { Router } from 'express'
import { getMetaData } from '@src/controller/storage.controller'

export const metaRouter: Router = express.Router()

metaRouter.get('/:krateId', getMetaData)
