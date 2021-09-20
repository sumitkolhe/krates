import express, { Router } from 'express'
import { getCollectionData, setCollectionData } from '@src/controller/collection.controller'

export const collectionRouter: Router = express.Router()

collectionRouter.route('/:bucketId/:collectiond').get(getCollectionData).post(setCollectionData)
