import { RateLimiterMongo } from 'rate-limiter-flexible'
import { RequestHandler } from 'express'
import mongoose from 'mongoose'
import { databaseConfig } from '@src/config/database'
import { mongoOptions } from '@src/helpers/connectDatabase'
import { CreateError } from '@src/middleware/errorHandler'
import { Logger } from '@src/utils/logger'

const mongoConnection = mongoose.createConnection(databaseConfig.mongoUrl, mongoOptions)

mongoConnection.on('connected', () => {
  Logger.info('limiter connected')
})

const opts = {
  mongo: mongoConnection,
  storeClient: mongoConnection,
  keyPrefix: 'limits',
  points: 20, // total points available
  duration: 60, // in seconds
}

const rateLimiterMongo = new RateLimiterMongo(opts)

export const rateLimit: RequestHandler = async (req, _res, next) => {
  try {
    await rateLimiterMongo
      .consume(req.ip, 1) // consumes 1 point
      .then(() => {
        next()
      })
      .catch(() => {
        throw CreateError.TooManyRequests('Rate limit exceeded')
      })
  } catch (error) {
    next(error)
  }
}
