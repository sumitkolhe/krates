/* eslint-disable no-restricted-syntax */
import { isCelebrateError } from 'celebrate'
import { ErrorRequestHandler } from 'express'
import { globalConstants } from '../constants'

export class CreateError extends Error {
  public status: number

  public message: string

  public constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }

  static NoContent(message?: string): CreateError {
    return new CreateError(204, message || 'No Content')
  }

  static BadRequest(message?: string): CreateError {
    return new CreateError(400, message || 'Bad Request')
  }

  static Unauthorized(message?: string): CreateError {
    return new CreateError(401, message || 'Unauthorized')
  }

  static Forbidden(message?: string): CreateError {
    return new CreateError(403, message || 'Forbidden')
  }

  static NotFound(message?: string): CreateError {
    return new CreateError(404, message || 'Not Found')
  }

  static Conflict(message?: string): CreateError {
    return new CreateError(409, message || 'Conflict')
  }

  static MethodNotAllowed(message?: string): CreateError {
    return new CreateError(405, message || 'Method Not Allowed')
  }

  static TooManyRequests(message?: string): CreateError {
    return new CreateError(429, message || 'Too Many Requests')
  }

  static InternalServerError(message?: string): CreateError {
    return new CreateError(500, message || 'Something Went Wrong')
  }
}

export const HandleError: ErrorRequestHandler = (error: CreateError, _req, res) => {
  let statusCode: number
  let message = ''

  if (isCelebrateError(error)) {
    statusCode = 400
    for (const value of error.details.values()) {
      message += value.message
    }
  } else if (error.name === 'MongoServerError') {
    statusCode = 500
    message = 'Database error'
  } else {
    statusCode = error.status || 500
    message = error.message || 'Something went wrong'
  }

  res.status(statusCode).json({
    status: globalConstants.status.failed,
    message,
  })
}
