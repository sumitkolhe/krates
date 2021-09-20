import express, { Router } from 'express'
import { bucketRouter } from '@src/routes/bucket.routes'
import { collectionRouter } from '@src/routes/collection.routes'

export const routes: Router = express.Router()

routes.use(bucketRouter)
routes.use(collectionRouter)
