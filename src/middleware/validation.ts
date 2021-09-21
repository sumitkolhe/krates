import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

export const validators = {
  auth: {
    registration: celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().trim().required(),
        email: Joi.string().email().trim().lowercase().required(),
        password: Joi.string().min(6).trim().required(),
      }),
    }),
  },
}
