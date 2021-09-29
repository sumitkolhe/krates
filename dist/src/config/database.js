"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
dotenv_safe_1.default.config({ allowEmptyValues: true });
exports.databaseConfig = {
    databaseName: process.env.DB_NAME ? process.env.DB_NAME : 'base_dev',
    mongoUrl: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017',
};
