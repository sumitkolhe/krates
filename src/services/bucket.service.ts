import { Bucket } from '@src/interfaces/bucket'
import { BucketModel } from '@src/models/bucket.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'

export class BucketService {
  static retrieveBucketData = () => {
    // ok
  }

  static storeBucketData = async (bucketId: string, data: Pick<Bucket, 'data'>): Promise<Bucket[] | Bucket> => {
    const createRecord = async (dataObject: Pick<Bucket, 'data'>): Promise<Bucket> => {
      const newRecord = new BucketModel({
        bucketId,
        data: dataObject,
      })

      const savedRecord = await newRecord.save()

      const sanitizedResponse = sanitizeResponse(savedRecord)
      return sanitizedResponse
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

    const savedRecord = await newBucket.save()
    return savedRecord
  }
}
