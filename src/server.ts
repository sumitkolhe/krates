import dotenv from 'dotenv-safe'
import { expressConfig } from '@src/config/express'
import { Logger } from '@src/utils/logger'
import { createApp } from '@src/app'

dotenv.config({ allowEmptyValues: true })

const { serverPort } = expressConfig

createApp()
  .then((server) => {
    server.listen(serverPort, () => {
      Logger.info(`Server listening on PORT : ${serverPort}`)
    })
  })
  .catch((error) => {
    Logger.error(`Error: ${error}`)
  })
