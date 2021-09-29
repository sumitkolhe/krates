"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressConfig = void 0;
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
dotenv_safe_1.default.config({ allowEmptyValues: true });
const isDev = process.env.NODE_ENV !== 'production';
exports.expressConfig = {
    SERVER_HOST: 'localhost',
    SERVER_PORT: isDev ? 3000 : Number(process.env.PORT) || 80,
};
