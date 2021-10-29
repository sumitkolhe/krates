import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

export const validators = {
  getAllData: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: Joi.string().trim().length(20).alphanum().required().messages({
        'string.empty': 'Krate ID name cannot be empty',
        'string.length': 'Krate ID should be 20 characters long',
        'string.alphanum': 'Krate ID should alpha-numeric',
      }),
      collectionId: Joi.string().trim().min(1).max(16).not('record').optional().messages({
        'string.min': 'Collection ID should be atleast 1 character long',
        'string.max': 'Collection ID should be atleast 1 character long',
        'string.not': 'Collection ID is invalid',
      }),
    }),
  }),

  getRecordData: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: Joi.string().trim().length(20).alphanum().required().messages({
        'string.empty': 'Krate ID name cannot be empty',
        'string.length': 'Krate ID should be 20 characters long',
        'string.alphanum': 'Krate ID should alpha-numeric',
      }),
      recordId: Joi.string().trim().length(24).alphanum().required().messages({
        'string.empty': 'Record ID name cannot be empty',
        'string.length': 'Record ID should be 20 characters long',
        'string.alphanum': 'Record ID should alpha-numeric',
      }),
    }),
  }),

  post: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: Joi.string().trim().length(20).alphanum().required().messages({
        'string.empty': 'Krate ID name cannot be empty',
        'string.length': 'Krate ID should be 20 characters long',
        'string.alphanum': 'Krate ID should alpha-numeric',
      }),
      collectionId: Joi.string().trim().min(1).max(16).alphanum().optional().messages({
        'string.min': 'Record ID name cannot be empty',
        'string.max': 'Record ID should be 20 characters long',
        'string.alphanum': 'Record ID should alpha-numeric',
      }),
    }),
    [Segments.BODY]: Joi.alternatives(Joi.object().min(1), Joi.array().min(1)),
  }),

  put: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: Joi.string().trim().length(20).alphanum().required(),
      recordId: Joi.string()
        .trim()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .message('Invalid record ID')
        .required(),
    }),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: Joi.string().trim().length(20).alphanum().required(),
    }),
  }),
}
