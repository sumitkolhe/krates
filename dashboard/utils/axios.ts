import axios from 'axios'
import { isDev } from '~/utils/isDev'

export const axiosBase = axios.create({
  baseURL: 'https://krat.es/',
  timeout: 10000,
})
