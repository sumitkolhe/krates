import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'
import { calculateObjectSize } from 'bson'
import { CreateError } from './errorHandler'
import { globalConfig } from '../config/global'

const payloadSizeCalculator = (payload: Record<string, unknown>) => {
  if (calculateObjectSize(payload) < globalConfig.maxPayloadSize) return payload
  throw CreateError.BadRequest(`Max allowed payload size is ${globalConfig.maxPayloadSize}`)
}

const apiKeyValidator = Joi.object()
  .keys({
    'x-api-key': Joi.string().optional().uuid().message('Invalid API key'),
  })
  .unknown()

const krateValidator = Joi.string().trim().length(20).alphanum().required().messages({
  'string.empty': 'Krate ID name cannot be empty',
  'string.length': 'Krate ID should be 20 characters long',
  'string.alphanum': 'Krate ID should alpha-numeric',
})

const collectionValidator = Joi.string().trim().min(1).max(16).alphanum().not('record').optional().messages({
  'string.min': 'Collection ID should be at least 1 character long',
  'string.max': 'Collection ID should be at max 16 characters long',
  'string.alphanum': 'Collection ID should alpha-numeric',
  'any.invalid': 'Collection ID contains an invalid word',
})

const recordValidator = Joi.string().trim().length(24).alphanum().required().messages({
  'string.empty': 'Record ID name cannot be empty',
  'string.length': 'Record ID should be 24 characters long',
  'string.alphanum': 'Record ID should alpha-numeric',
})

const payloadValidator = Joi.alternatives(
  Joi.object()
    .min(1)
    .message('Empty object is not allowed.')
    .custom(payloadSizeCalculator, 'calculate size')
    .message('Payload size exceeded'),
  Joi.array()
    .min(1)
    .message('Empty array is not allowed.')
    .custom(payloadSizeCalculator, 'calculate size')
    .message('Payload size exceeded')
)

export const validators = {
  getAllData: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: krateValidator,
      collectionId: collectionValidator,
    }),
  }),

  getRecordData: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      krateId: krateValidator,
      recordId: recordValidator,
    }),
  }),

  postData: celebrate({
    [Segments.HEADERS]: apiKeyValidator,
    [Segments.PARAMS]: Joi.object().keys({
      krateId: krateValidator,
      collectionId: collectionValidator,
    }),
    [Segments.BODY]: payloadValidator,
  }),

  putData: celebrate({
    [Segments.HEADERS]: apiKeyValidator,
    [Segments.PARAMS]: Joi.object().keys({
      krateId: krateValidator,
      recordId: recordValidator,
    }),
    [Segments.BODY]: payloadValidator,
  }),

  deleteAllData: celebrate({
    [Segments.HEADERS]: apiKeyValidator,
    [Segments.PARAMS]: Joi.object().keys({
      krateId: krateValidator,
    }),
  }),

  deleteRecordData: celebrate({
    [Segments.HEADERS]: apiKeyValidator,
    [Segments.PARAMS]: Joi.object().keys({
      krateId: krateValidator,
      recordId: recordValidator,
    }),
  }),
}
