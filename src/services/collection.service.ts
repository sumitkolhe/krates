import { Bucket } from '@src/interfaces/bucket'
import { BucketModel } from '@src/models/bucket.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'

export class CollectionService {
  // Get data for a collection
  static getCollectionData = async (bucketId: string, collectionId: string): Promise<Bucket[] | Bucket> => {
    const collectionData = await BucketModel.find({ bucketId, collectionId })
    return collectionData
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

      return sanitizeResponse(await newRecord.save())
    }

    // Check if data object is an Array or object
    if (Array.isArray(data)) {
      const createRecordPromise = data.map(createRecord)
      const records = await Promise.all(createRecordPromise)
      return records
    }

    const newBucket = new BucketModel({
      bucketId,
      collectionId,
      data,
    })

    return sanitizeResponse(await newBucket.save())
  }
}
