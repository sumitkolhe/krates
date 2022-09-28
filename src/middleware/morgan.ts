import morgan, { StreamOptions } from 'morgan'
import { Logger } from '../utils/logger'
import { isDev } from '../utils/isDev'

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
}

const skip = () => {
  return !isDev()
}

export const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
  stream,
  skip,
})
