import dotenv from 'dotenv-safe'

dotenv.config({ allowEmptyValues: true })

export const databaseConfig = {
  DB_NAME: process.env.DB_NAME ? process.env.DB_NAME : 'local_dev',
  MONGO_URL: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017',
}
