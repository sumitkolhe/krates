import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

export const validators = {
  storage: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      bucketId: Joi.string().trim().length(20).alphanum().required(),
      collectionId: Joi.string().trim().min(1).max(16).optional(),
    }),
  }),

  put: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      bucketId: Joi.string().trim().length(20).alphanum().required(),
      recordId: Joi.string()
        .trim()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
  }),
}
