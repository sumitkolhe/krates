import mongoose, { ConnectOptions } from 'mongoose'
import { Logger } from '../utils/logger'
import { databaseConfig } from '../config/database'

export const mongoOptions: ConnectOptions = {
  dbName: databaseConfig.databaseName,
  autoIndex: true,
}

export const connectDatabase = async (): Promise<void> => {
  await mongoose
    .connect(databaseConfig.mongoUrl, mongoOptions)
    .then(() => {
      Logger.info('Connected To Database')
    })
    .catch((err) => {
      Logger.error(err.message)
    })
}
