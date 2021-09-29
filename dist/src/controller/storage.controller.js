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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.putData = exports.setData = exports.getData = void 0;
const logger_1 = require("@src/utils/logger");
const constants_1 = require("@src/constants");
const storage_service_1 = require("@src/services/storage.service");
const getData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bucketId, collectionId } = req.params;
        const responseData = yield storage_service_1.StorageService.getData(bucketId, collectionId);
        res.json(responseData);
    }
    catch (error) {
        logger_1.Logger.error(error.message);
        next(error);
    }
});
exports.getData = getData;
const setData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bucketId, collectionId } = req.params;
        const data = req.body;
        const responseData = yield storage_service_1.StorageService.setData(bucketId, collectionId, data);
        res.json(responseData);
    }
    catch (error) {
        logger_1.Logger.error(error.message);
        next(error);
    }
});
exports.setData = setData;
const putData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bucketId, recordId } = req.params;
        const data = req.body;
        const responseData = yield storage_service_1.StorageService.putData(bucketId, recordId, data);
        res.json(responseData);
    }
    catch (error) {
        logger_1.Logger.error(error.message);
        next(error);
    }
});
exports.putData = putData;
const deleteData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bucketId } = req.params;
        yield storage_service_1.StorageService.deleteData(bucketId);
        res.json({ status: constants_1.globalConstants.status.success, message: 'Bucket deleted succesfully' });
    }
    catch (error) {
        logger_1.Logger.error(error.message);
        next(error);
    }
});
exports.deleteData = deleteData;
