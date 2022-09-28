import dotenv from 'dotenv'
import express, { Application } from 'express'
import cors from 'cors'
import { parentRouter } from './routes'
import { CreateError, HandleError } from './middleware/errorHandler'
import { morganMiddleware } from './middleware/morgan'
import { connectDatabase } from './helpers/connectDatabase'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      apiKey: string | null
    }
  }
}

dotenv.config()

export const createApp = async (): Promise<Application> => {
  const app: Application = express()

  connectDatabase()

  app.use(express.json())
  app.use(cors())
  app.use(express.urlencoded({ extended: true }))
  app.use(morganMiddleware)

  app.use(parentRouter)
  app.use((req, res, next) => {
    next(CreateError.NotFound('Not Found'))
  })
  app.use((err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) =>
    HandleError(err, req, res, next)
  )
  return app
}
