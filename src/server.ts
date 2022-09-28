import dotenv from 'dotenv'
import { expressConfig } from './config/express'
import { Logger } from './utils/logger'
import { createApp } from './app'

dotenv.config()

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
