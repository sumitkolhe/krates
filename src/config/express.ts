import dotenv from 'dotenv-safe'

dotenv.config({ allowEmptyValues: true })
const isDev = process.env.NODE_ENV !== 'production'

export const expressConfig = {
  SERVER_HOST: 'localhost',
  SERVER_PORT: isDev ? 3000 : Number(process.env.PORT) || 80,
}
