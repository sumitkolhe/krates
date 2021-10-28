import { RateLimiterMongo, RateLimiterRes } from 'rate-limiter-flexible'
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
  points: 60, // total points available
  duration: 60, // per second
}

const rateLimiterMongo = new RateLimiterMongo(opts)

export const rateLimit: RequestHandler = async (req, res, next) => {
  try {
    Logger.info(req.ip)
    await rateLimiterMongo
      .consume(req.ip, 1) // consumes 1 point
      .then((info: RateLimiterRes) => {
        const rateLimiterHeaders = {
          'Retry-After': info.msBeforeNext / 1000,
          'X-RateLimit-Limit': opts.points,
          'X-RateLimit-Remaining': info.remainingPoints,
          'X-RateLimit-Reset': new Date(Date.now() + info.msBeforeNext),
        }
        res.set(rateLimiterHeaders)
        next()
      })
      .catch((info: RateLimiterRes) => {
        const rateLimiterHeaders = {
          'Retry-After': info.msBeforeNext / 1000,
          'X-RateLimit-Limit': opts.points,
          'X-RateLimit-Remaining': info.remainingPoints,
          'X-RateLimit-Reset': new Date(Date.now() + info.msBeforeNext),
        }
        res.set(rateLimiterHeaders)
        throw CreateError.TooManyRequests('Rate limit exceeded')
      })
  } catch (error) {
    next(error)
  }
}
