import express, { Router } from 'express'
import { krateRouter } from '@src/routes/krate.routes'
import { metaRouter } from '@src/routes/meta.routes'

export const parentRouter: Router = express.Router()

parentRouter.get('/', (req, res) => {
  res.redirect(301, 'https://app.krat.es')
})
parentRouter.get('/health', (req, res) => {
  res.json({ uptime: process.uptime(), message: 'OK', timestamp: Date.now() })
})
parentRouter.use('/meta', metaRouter)
parentRouter.use('/', krateRouter)
