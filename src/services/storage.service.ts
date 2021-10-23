import { calculateObjectSize } from 'bson'
import { Krate, KrateOptions } from '@src/interfaces/krate'
import { CreateError } from '@src/middleware/errorHandler'
import { StorageModel } from '@src/models/storage.model'
import { sanitizeResponse } from '@src/utils/sanitizeResponse'
import { Logger } from '@src/utils/logger'

export class StorageService {
  // Get all data from a krate/collection
  static getData = async (requestOptions: KrateOptions): Promise<Krate[] | Krate> => {
    const responseData = await StorageModel.find(requestOptions.query)
      .skip(requestOptions.skip)
      .limit(requestOptions.limit)
    return sanitizeResponse(responseData)
  }

  // Insert data into a krate/collection
  static setData = async (krateId: string, collectionId: string, data: Krate): Promise<Krate[] | Krate> => {
    // Insert all objects in DB
    const createRecord = async (dataObject: Krate): Promise<Krate> => {
      const newRecord = new StorageModel({
        krateId,
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
      krateId,
      ...(collectionId ? { collectionId } : {}),
      data,
    })

    const savedRecord = await newRecord.save()
    return sanitizeResponse(savedRecord)
  }

  // Insert data into a krate/collection
  static putData = async (krateId: string, recordId: string, data: Pick<Krate, 'data'>): Promise<Krate[] | Krate> => {
    const record = await StorageModel.findOneAndUpdate({ _id: recordId, krateId }, { data }, { new: true })

    if (!record) throw CreateError.BadRequest('No such record exists')

    return sanitizeResponse(record)
  }

  // delete all data from a krate
  static deleteData = async (krateId: string): Promise<void> => {
    await StorageModel.deleteMany({ krateId })
  }

  static getMeta = async (requestOptions: KrateOptions): Promise<number> => {
    const responseData = await StorageModel.find(requestOptions.query)

    Logger.info(calculateObjectSize(responseData))
    return calculateObjectSize(responseData)
  }
}
