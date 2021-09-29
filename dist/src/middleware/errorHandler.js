"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleError = exports.CreateError = void 0;
const celebrate_1 = require("celebrate");
const constants_1 = require("@src/constants");
class CreateError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
    static NoContent(message) {
        return new CreateError(204, message || 'No Content');
    }
    static BadRequest(message) {
        return new CreateError(400, message || 'Bad Request');
    }
    static Unauthorized(message) {
        return new CreateError(401, message || 'Unauthorized');
    }
    static Forbidden(message) {
        return new CreateError(403, message || 'Forbidden');
    }
    static NotFound(message) {
        return new CreateError(404, message || 'Not Found');
    }
    static Conflict(message) {
        return new CreateError(409, message || 'Conflict');
    }
    static MethodNotAllowed(message) {
        return new CreateError(405, message || 'Method Not Allowed');
    }
    static TooManyRequests(message) {
        return new CreateError(429, message || 'Too Many Requests');
    }
    static InternalServerError(message) {
        return new CreateError(500, message || 'Something Went Wrong');
    }
}
exports.CreateError = CreateError;
const HandleError = (error, _req, res) => {
    let statusCode;
    let message = '';
    if ((0, celebrate_1.isCelebrateError)(error)) {
        statusCode = 400;
        for (const value of error.details.values()) {
            message += value.message;
        }
    }
    else if (error.name === 'MongoServerError') {
        statusCode = 500;
        message = 'Database error';
    }
    else {
        statusCode = error.status || 500;
        message = error.message || 'Something went wrong';
    }
    res.status(statusCode).json({
        status: constants_1.globalConstants.status.failed,
        message,
    });
};
exports.HandleError = HandleError;
