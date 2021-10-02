/* eslint-disable no-console */
import { Base } from '@src/interfaces/base'
import { CreateError } from '@src/middleware/errorHandler'
import { StorageModel } from '@src/models/storage.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'

export class StorageService {
  // Get all data from a base/collection
  static getData = async (baseId: string, collectionId: string): Promise<Base[] | Base> => {
    const responseData = await StorageModel.find({ baseId, ...(collectionId ? { collectionId } : {}) })
    return sanitizeResponse(responseData)
  }

  // Insert data into a base/collection
  static setData = async (baseId: string, collectionId: string, data: Base): Promise<Base[] | Base> => {
    // Insert all objects in DB
    const createRecord = async (dataObject: Base): Promise<Base> => {
      const newRecord = new StorageModel({
        baseId,
        ...(collectionId ? { collectionId } : {}),
        data: dataObject,
      })

      const savedRecord = await newRecord.save()
      return savedRecord
    }

    // Check if data is an Array or a object
    if (Array.isArray(data)) {
      const createRecordPromise = data.map(createRecord)
      const savedRecords = await Promise.all(createRecordPromise)
      return sanitizeResponse(savedRecords)
    }

    const newRecord = new StorageModel({
      baseId,
      ...(collectionId ? { collectionId } : {}),
      data,
    })

    const savedRecord = await newRecord.save()
    return sanitizeResponse(savedRecord)
  }

  // Insert data into a base/collection
  static putData = async (baseId: string, recordId: string, data: Pick<Base, 'data'>): Promise<Base[] | Base> => {
    const record = await StorageModel.findOneAndUpdate({ _id: recordId, baseId }, { data }, { new: true })

    if (!record) throw CreateError.BadRequest('No such record exists')

    return sanitizeResponse(record)
  }

  // delete all data from a base
  static deleteData = async (baseId: string): Promise<void> => {
    await StorageModel.deleteMany({ baseId })
  }
}
