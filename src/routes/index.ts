import express, { Router } from 'express'
import { baseRouter } from '@src/routes/base.routes'

export const parentRouter: Router = express.Router()

parentRouter.get('/', (req, res) => {
  res.redirect(301, 'https://app.detabase.me')
})
parentRouter.use('/api', baseRouter)
parentRouter.use('/meta', baseRouter)
