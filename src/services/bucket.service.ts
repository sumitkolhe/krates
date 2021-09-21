import { Bucket } from '@src/interfaces/bucket'
import { BucketModel } from '@src/models/bucket.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'

export class BucketService {
  // Get all data from a bucket
  static getBucketData = async (bucketId: string): Promise<Bucket[] | Bucket> => {
    const bucketData = await BucketModel.find({ bucketId })
    return bucketData
  }

  // Insert data into a bucket
  static setBucketData = async (bucketId: string, data: Bucket): Promise<Bucket[] | Bucket> => {
    // Insert all objects in DB
    const createRecord = async (dataObject: Bucket): Promise<Bucket> => {
      const newRecord = new BucketModel({
        bucketId,
        data: dataObject,
      })

      const savedRecord = await newRecord.save()
      return savedRecord
    }

    // Check if data is an Array or a object
    if (Array.isArray(data)) {
      const createRecordPromise = data.map(createRecord)
      const records = await Promise.all(createRecordPromise)
      return sanitizeResponse(records)
    }

    const newRecord = new BucketModel({
      bucketId,
      data,
    })

    const savedRecord = await newRecord.save()
    return sanitizeResponse(savedRecord)
  }

  static deleteBucketData = async (bucketId: string): Promise<void> => {
    await BucketModel.deleteMany({ bucketId })
  }
}
