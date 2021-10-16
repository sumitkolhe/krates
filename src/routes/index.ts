import express, { Router } from 'express'
import { baseRouter } from '@src/routes/base.routes'

export const parentRouter: Router = express.Router()

parentRouter.get('/', (req, res) => {
  res.redirect(301, 'https://app.krat.es')
})
parentRouter.get('/health', (req, res) => {
  res.json({ uptime: process.uptime(), message: 'OK', timestamp: Date.now() })
})
parentRouter.use('/', baseRouter)
parentRouter.use('/meta', baseRouter)
