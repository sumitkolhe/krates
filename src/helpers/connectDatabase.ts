import mongoose from 'mongoose'
import { databaseConfig } from '@src/config/database'
import { Logger } from '@src/utils/logger'

export const mongoOptions = {
  dbName: databaseConfig.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(databaseConfig.MONGO_URL, mongoOptions)
    Logger.info('Connected To Database')
  } catch (error) {
    Logger.error(error.message)
  }
}
