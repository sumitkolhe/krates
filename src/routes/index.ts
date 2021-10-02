import express, { Router } from 'express'
import { baseRouter } from '@src/routes/base.routes'

export const parentRouter: Router = express.Router()

parentRouter.use('/api', baseRouter)
parentRouter.use('/meta', baseRouter)
