import express, { Router } from 'express'
import { deleteCollectionData, getCollectionData, setCollectionData } from '@src/controller/collection.controller'

export const collectionRouter: Router = express.Router()

collectionRouter
  .route('/:bucketId/:collectionId')
  .get(getCollectionData)
  .post(setCollectionData)
  .delete(deleteCollectionData)
