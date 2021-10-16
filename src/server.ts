import dotenv from 'dotenv-safe'
import express, { Application } from 'express'
import cors from 'cors'
import { expressConfig } from '@src/config/express'
import { parentRouter } from '@src/routes'
import { HandleError } from '@src/middleware/errorHandler'
import { Logger } from '@src/utils/logger'
import { morganMiddleware } from '@src/middleware/morgan'
import { connectDatabase } from '@src/helpers/connectDatabase'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      krateId: string
      collectionId: string
    }
  }
}

dotenv.config({ allowEmptyValues: true })
const app: Application = express()
const PORT: number = expressConfig.SERVER_PORT

connectDatabase()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morganMiddleware)

app.use(parentRouter)
app.use((err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) =>
  HandleError(err, req, res, next)
)

app.listen(PORT)
Logger.info(`Server listening on PORT: ${PORT}`)
