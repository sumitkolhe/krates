"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
const joi_1 = __importDefault(require("joi"));
const celebrate_1 = require("celebrate");
exports.validators = {
    storage: (0, celebrate_1.celebrate)({
        [celebrate_1.Segments.PARAMS]: joi_1.default.object().keys({
            bucketId: joi_1.default.string().trim().length(20).alphanum().required(),
            collectionId: joi_1.default.string().trim().min(1).max(16).optional(),
        }),
    }),
    put: (0, celebrate_1.celebrate)({
        [celebrate_1.Segments.PARAMS]: joi_1.default.object().keys({
            bucketId: joi_1.default.string().trim().length(20).alphanum().required(),
            recordId: joi_1.default.string()
                .trim()
                .pattern(/^[0-9a-fA-F]{24}$/)
                .required(),
        }),
    }),
};
