import dotenv from 'dotenv'

dotenv.config()

export const mongoConfig = {
  databaseName: process.env.DB_NAME ? process.env.DB_NAME : 'krates_dev',
  mongoUrl: process.env.MONGO_HOST ? process.env.MONGO_HOST : 'mongodb://localhost:27017',
}

export const redisConfig = {
  host: process.env.REDIS_HOST ? process.env.REDIS_HOST : '',
  port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 0,
  password: process.env.REDIS_PASSWORD ? process.env.REDIS_PASSWORD : '',
}
