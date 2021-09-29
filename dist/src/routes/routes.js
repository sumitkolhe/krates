"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const validation_1 = require("@src/middleware/validation");
const storage_controller_1 = require("@src/controller/storage.controller");
exports.routes = express_1.default.Router();
exports.routes
    .route('/:bucketId/:collectionId?/')
    .get(validation_1.validators.storage, storage_controller_1.getData)
    .post(validation_1.validators.storage, storage_controller_1.setData)
    .delete(validation_1.validators.storage, storage_controller_1.deleteData);
exports.routes.route('/:bucketId/:recordId').put(validation_1.validators.put, storage_controller_1.putData);
