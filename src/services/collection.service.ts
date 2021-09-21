import { Bucket } from '@src/interfaces/bucket'
import { BucketModel } from '@src/models/bucket.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'

export class CollectionService {
  static getCollectionData = async (bucketId: string, collectionId: string): Promise<Bucket[] | Bucket> => {
    const collectionData = await BucketModel.find({ bucketId, collectionId })
    return collectionData
  }

  static setCollectionData = async (
    bucketId: string,
    collectionId: string,
    data: Bucket
  ): Promise<Bucket[] | Bucket> => {
    const createRecord = async (dataObject: Bucket): Promise<Bucket> => {
      const newRecord = new BucketModel({
        bucketId,
        collectionId,
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
      collectionId,
      data,
    })

    return sanitizeResponse(await newBucket.save())
  }
}
