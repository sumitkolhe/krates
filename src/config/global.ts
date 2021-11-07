import dotenv from 'dotenv-safe'

dotenv.config({ allowEmptyValues: true })

export const globalConfig = {
  rateLimitPoints: process.env.RATE_LIMIT_POINTS ? Number(process.env.RATE_LIMIT_POINTS) : 20,
  rateLimitDuration: process.env.RATE_LIMIT_DURATION ? Number(process.env.RATE_LIMIT_DURATION) : 60, // in seconds
  maxPayloadSize: process.env.PAYLOAD_SIZE_LIMIT ? Number(process.env.PAYLOAD_SIZE_LIMIT) * 1000 : 100000, // in Kb
}
