import axios from 'axios'
import { isDev } from '~/utils/isDev'

export const axiosBase = axios.create({
  baseURL: isDev() ? 'http://localhost:4000' : 'https://krat.es/',
  timeout: 10000,
})
