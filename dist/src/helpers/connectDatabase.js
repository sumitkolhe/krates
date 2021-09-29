"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.mongoOptions = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("../utils/logger");
const database_1 = require("../config/database");
exports.mongoOptions = {
    dbName: database_1.databaseConfig.databaseName,
    autoIndex: true,
};
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default
        .connect(database_1.databaseConfig.mongoUrl, exports.mongoOptions)
        .then(() => {
        logger_1.Logger.info('Connected To Database');
    })
        .catch((err) => {
        logger_1.Logger.error(err.message);
    });
});
exports.connectDatabase = connectDatabase;
