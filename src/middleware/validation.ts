import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

export const validators = {
  storage: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      bucketId: Joi.string().trim().length(20).alphanum().required(),
      collectionId: Joi.string().trim().min(1).optional(),
    }),
  }),
}
