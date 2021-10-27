import { calculateObjectSize } from 'bson'
import { StorageModel } from '@src/models/storage.model'

export class MetaService {
  static getMetaData = async (krateId: string): Promise<Record<string, unknown>> => {
    const responseData = await StorageModel.find({ krateId }).sort('createdAt')

    const stats = {
      krateSize: responseData ? calculateObjectSize(responseData) : 0,
      totalRecords: responseData ? responseData.length : 0,
      createdAt: responseData ? responseData[0]?.createdAt : null,
    }
    return stats
  }
}
