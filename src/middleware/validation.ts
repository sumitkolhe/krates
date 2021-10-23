import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

export const validators = {
  storage: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: Joi.string().trim().length(20).alphanum().required().messages({
        'string.empty': 'krate ID name cannot be empty',
        'string.length': 'krate ID should be 20 characters long',
        'string.alphanum': 'krate ID should alpha-numeric',
      }),
      collectionId: Joi.string().trim().min(1).max(16).message('invalid collection id').optional(),
    }),
    [Segments.BODY]: Joi.alternatives(Joi.object().min(1), Joi.array().min(1)),
  }),

  put: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: Joi.string().trim().length(20).alphanum().required(),
      recordId: Joi.string()
        .trim()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
  }),
}
