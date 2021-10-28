import mongoose, { ConnectOptions } from 'mongoose'
import { Logger } from '../utils/logger'
import { mongoConfig } from '../config/database'

export const mongoOptions: ConnectOptions = {
  dbName: mongoConfig.databaseName,
  autoIndex: true,
}

export const connectDatabase = async (): Promise<void> => {
  await mongoose
    .connect(mongoConfig.mongoUrl, mongoOptions)
    .then(() => {
      Logger.info('Connected To Database')
    })
    .catch((err) => {
      Logger.error(err.message)
    })
}
