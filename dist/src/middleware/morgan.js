"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganMiddleware = void 0;
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = require("@src/utils/logger");
const isDev_1 = require("@src/utils/isDev");
const stream = {
    write: (message) => logger_1.Logger.http(message),
};
const skip = () => {
    return !(0, isDev_1.isDev)();
};
exports.morganMiddleware = (0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms', {
    stream,
    skip,
});
