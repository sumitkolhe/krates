import dotenv from 'dotenv-safe'

dotenv.config({ allowEmptyValues: true })
const isDev = process.env.NODE_ENV !== 'production'

export const expressConfig = {
  SERVER_HOST: '0.0.0.0',
  SERVER_PORT: isDev ? 4000 : Number(process.env.PORT) || 80,
}
