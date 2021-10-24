import { calculateObjectSize } from 'bson'
import { StorageModel } from '@src/models/storage.model'

export class MetaService {
  static getMetaData = async (krateId: string): Promise<Record<string, unknown>> => {
    const responseData = await StorageModel.find({ krateId }).sort('createdAt')

    const stats = {
      krateSize: calculateObjectSize(responseData),
      totalRecords: responseData.length,
      createdAt: responseData[0].createdAt,
    }
    return stats
  }
}
