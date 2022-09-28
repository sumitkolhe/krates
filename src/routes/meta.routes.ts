import express, { Router } from 'express'
import { getMetaData } from '../controller/storage.controller'

export const metaRouter: Router = express.Router()

metaRouter.get('/:krateId', getMetaData)
