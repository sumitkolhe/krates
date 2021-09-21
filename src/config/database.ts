import dotenv from 'dotenv-safe'

dotenv.config({ allowEmptyValues: true })

export const databaseConfig = {
  databaseName: process.env.DB_NAME ? process.env.DB_NAME : 'base_dev',
  mongoUrl: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017',
}
