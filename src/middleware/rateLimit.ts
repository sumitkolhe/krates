import { RateLimiterRedis, RateLimiterRes } from 'rate-limiter-flexible'
import { RequestHandler } from 'express'
import { createClient } from 'redis'
import { CreateError } from '@src/middleware/errorHandler'
import { redisConfig } from '@src/config/database'

const redisClient = createClient(redisConfig)

const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'middleware',
  points: 6, // 6 requests
  duration: 10, // per 10 second by IP
})

export const rateLimit: RequestHandler = async (req, res, next) => {
  try {
    await rateLimiter
      .consume(req.ip, 1) // consumes 1 point
      .then((info: RateLimiterRes) => {
        const rateLimiterHeaders = {
          'Retry-After': info.msBeforeNext / 1000,
          'X-RateLimit-Limit': rateLimiter.points,
          'X-RateLimit-Remaining': info.remainingPoints,
          'X-RateLimit-Reset': new Date(Date.now() + info.msBeforeNext),
        }
        res.set(rateLimiterHeaders)
        next()
      })
      .catch((info: RateLimiterRes) => {
        const rateLimiterHeaders = {
          'Retry-After': info.msBeforeNext / 1000,
          'X-RateLimit-Limit': rateLimiter.points,
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
