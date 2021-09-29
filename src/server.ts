/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
import dotenv from 'dotenv-safe'
import express, { Application } from 'express'
import cors from 'cors'
// @ts-ignore
import { loadNuxt, build } from 'nuxt'
import { expressConfig } from '@src/config/express'
import { routes } from '@src/routes/routes'
import { HandleError } from '@src/middleware/errorHandler'
import { Logger } from '@src/utils/logger'
import { morganMiddleware } from '@src/middleware/morgan'
import { connectDatabase } from '@src/helpers/connectDatabase'
import { isDev } from '@src/utils/isDev'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      bucketId: string
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

app.use(routes)
app.use((err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) =>
  HandleError(err, req, res, next)
)

const startServer = async () => {
  if (isDev()) {
    const nuxt = await loadNuxt('dev')

    build(nuxt)
    await nuxt.ready()

    app.use(nuxt.render)
  } else {
    app.use(express.static(`${__dirname}/../dashboard`))
    app.get(/.*/, (_req: express.Request, res: express.Response) => res.sendFile(`${__dirname}/../dashboard/404.html`))
  }

  app.listen(PORT)
  Logger.info(`Server listening on PORT: ${PORT}`)
}

startServer()
