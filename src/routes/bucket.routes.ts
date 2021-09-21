import express, { Router } from 'express'
import { getBucketData, setBucketData } from '@src/controller/bucket.controller'
import { validators } from '@src/middleware/validation'

export const bucketRouter: Router = express.Router()

bucketRouter.route('/:bucketId').get(validators.bucket, getBucketData).post(validators.bucket, setBucketData)
