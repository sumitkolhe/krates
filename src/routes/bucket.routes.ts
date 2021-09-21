import express, { Router } from 'express'
import { deleteBucketData, getBucketData, setBucketData } from '@src/controller/bucket.controller'
import { validators } from '@src/middleware/validation'

export const bucketRouter: Router = express.Router()

bucketRouter
  .route('/:bucketId')
  .get(validators.bucket, getBucketData)
  .post(validators.bucket, setBucketData)
  .delete(validators.bucket, deleteBucketData)
