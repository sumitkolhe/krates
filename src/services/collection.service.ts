import { Bucket } from '@src/interfaces/bucket'
import { BucketModel } from '@src/models/bucket.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'

export class CollectionService {
  // Get data for a collection
  static getCollectionData = async (bucketId: string, collectionId: string): Promise<Bucket[] | Bucket> => {
    const collectionData = await BucketModel.find({ bucketId, collectionId })
    return sanitizeResponse(collectionData)
  }

  // Insert data into a collection
  static setCollectionData = async (
    bucketId: string,
    collectionId: string,
    data: Bucket
  ): Promise<Bucket[] | Bucket> => {
    // Insert all objects in DB
    const createRecord = async (dataObject: Bucket): Promise<Bucket> => {
      const newRecord = new BucketModel({
        bucketId,
        collectionId,
        data: dataObject,
      })

      const savedRecord = await newRecord.save()
      return savedRecord
    }

    // Check if data object is an Array or object
    if (Array.isArray(data)) {
      const createRecordPromise = data.map(createRecord)
      const records = await Promise.all(createRecordPromise)
      return sanitizeResponse(records)
    }

    const newBucket = new BucketModel({
      bucketId,
      collectionId,
      data,
    })

    return sanitizeResponse(await newBucket.save())
  }

  static deleteCollectionData = async (bucketId: string, collectionId: string): Promise<void> => {
    await BucketModel.deleteMany({ bucketId, collectionId })
  }
}
