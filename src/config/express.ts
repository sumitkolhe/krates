import dotenv from 'dotenv-safe'

dotenv.config({ allowEmptyValues: true })
const isDev = process.env.NODE_ENV !== 'production'

export const expressConfig = {
  serverHost: '0.0.0.0',
  serverPort: isDev ? 4000 : Number(process.env.PORT) || 80,
}
