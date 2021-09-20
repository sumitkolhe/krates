import express, { Router } from 'express'
import { getBucketData, setBucketData } from '@src/controller/bucket.controller'

export const bucketRouter: Router = express.Router()

bucketRouter.route('/:bucketId').get(getBucketData).post(setBucketData)
