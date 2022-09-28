import { calculateObjectSize } from 'bson'
import { StorageModel } from '../models/storage.model'
import { Krate } from '../interfaces/krate'

const getUniqueCollectionCount = (responseData: Krate[]): number => {
  const uniqueCollections = [...new Set(responseData.map((item) => item.collectionId))]

  return uniqueCollections.filter((item) => item).length
}

export class MetaService {
  static getMetaData = async (krateId: string): Promise<Record<string, unknown>> => {
    const responseData = await StorageModel.find({ krateId }).sort('createdAt')

    const stats = {
      krateSize: responseData ? calculateObjectSize(responseData) : 0,
      totalCollections: responseData ? getUniqueCollectionCount(responseData) : 0,
      totalRecords: responseData ? responseData.length : 0,
      createdAt: responseData ? responseData[0]?.createdAt : null,
      updatedAt: responseData ? responseData[0]?.updatedAt : null,
    }
    return stats
  }
}
