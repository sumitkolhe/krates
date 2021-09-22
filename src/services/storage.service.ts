/* eslint-disable no-console */
import { Bucket } from '@src/interfaces/bucket'
import { CreateError } from '@src/middleware/errorHandler'
import { StorageModel } from '@src/models/storage.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'

export class StorageService {
  // Get all data from a bucket/collection
  static getData = async (bucketId: string, collectionId: string): Promise<Bucket[] | Bucket> => {
    const responseData = await StorageModel.find({ bucketId, ...(collectionId ? { collectionId } : {}) })
    return sanitizeResponse(responseData)
  }

  // Insert data into a bucket/collection
  static setData = async (bucketId: string, collectionId: string, data: Bucket): Promise<Bucket[] | Bucket> => {
    // Insert all objects in DB
    const createRecord = async (dataObject: Bucket): Promise<Bucket> => {
      const newRecord = new StorageModel({
        bucketId,
        ...(collectionId ? { collectionId } : {}),
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

    const newRecord = new StorageModel({
      bucketId,
      ...(collectionId ? { collectionId } : {}),
      data,
    })

    const savedRecord = await newRecord.save()
    return sanitizeResponse(savedRecord)
  }

  // Insert data into a bucket/collection
  static putData = async (
    bucketId: string,
    recordId: string,
    data: Pick<Bucket, 'data'>
  ): Promise<Bucket[] | Bucket> => {
    const record = await StorageModel.findOneAndUpdate({ _id: recordId, bucketId }, { data }, { new: true })

    if (!record) throw CreateError.BadRequest('No such record exists')

    return sanitizeResponse(record)
  }

  // delete all data from a bucket
  static deleteData = async (bucketId: string): Promise<void> => {
    await StorageModel.deleteMany({ bucketId })
  }
}
