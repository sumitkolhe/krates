"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageModel = void 0;
const mongoose_1 = require("mongoose");
const StorageSchema = new mongoose_1.Schema({
    bucketId: {
        type: String,
        required: true,
    },
    collectionId: {
        type: String,
        required: false,
    },
    data: {
        type: Object,
        required: true,
    },
}, { timestamps: true });
exports.StorageModel = (0, mongoose_1.model)('detabase', StorageSchema);
