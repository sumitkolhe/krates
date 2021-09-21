import { Bucket } from '@src/interfaces/bucket'
import { BucketModel } from '@src/models/bucket.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'

export class BucketService {
  static getBucketData = async (bucketId: string): Promise<Bucket[] | Bucket> => {
    const bucketData = await BucketModel.find({ bucketId })

    return bucketData
  }

  static setBucketData = async (bucketId: string, data: Bucket): Promise<Bucket[] | Bucket> => {
    const createRecord = async (dataObject: Pick<Bucket, 'data'>): Promise<Bucket> => {
      const newRecord = new BucketModel({
        bucketId,
        data: dataObject,
      })

      return sanitizeResponse(await newRecord.save())
    }

    if (Array.isArray(data)) {
      const createRecordPromise = data.map(createRecord)
      const responses = await Promise.all(createRecordPromise)
      return responses
    }

    const newBucket = new BucketModel({
      bucketId,
      data,
    })

    return sanitizeResponse(await newBucket.save())
  }
}
