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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const errorHandler_1 = require("@src/middleware/errorHandler");
const storage_model_1 = require("@src/models/storage.model");
const sanitizeResponse_1 = require("@src/utils/sanitizeResponse");
class StorageService {
}
exports.StorageService = StorageService;
_a = StorageService;
StorageService.getData = (bucketId, collectionId) => __awaiter(void 0, void 0, void 0, function* () {
    const responseData = yield storage_model_1.StorageModel.find(Object.assign({ bucketId }, (collectionId ? { collectionId } : {})));
    return (0, sanitizeResponse_1.sanitizeResponse)(responseData);
});
StorageService.setData = (bucketId, collectionId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const createRecord = (dataObject) => __awaiter(void 0, void 0, void 0, function* () {
        const newRecord = new storage_model_1.StorageModel(Object.assign(Object.assign({ bucketId }, (collectionId ? { collectionId } : {})), { data: dataObject }));
        const savedRecord = yield newRecord.save();
        return savedRecord;
    });
    if (Array.isArray(data)) {
        const createRecordPromise = data.map(createRecord);
        const records = yield Promise.all(createRecordPromise);
        return (0, sanitizeResponse_1.sanitizeResponse)(records);
    }
    const newRecord = new storage_model_1.StorageModel(Object.assign(Object.assign({ bucketId }, (collectionId ? { collectionId } : {})), { data }));
    const savedRecord = yield newRecord.save();
    return (0, sanitizeResponse_1.sanitizeResponse)(savedRecord);
});
StorageService.putData = (bucketId, recordId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const record = yield storage_model_1.StorageModel.findOneAndUpdate({ _id: recordId, bucketId }, { data }, { new: true });
    if (!record)
        throw errorHandler_1.CreateError.BadRequest('No such record exists');
    return (0, sanitizeResponse_1.sanitizeResponse)(record);
});
StorageService.deleteData = (bucketId) => __awaiter(void 0, void 0, void 0, function* () {
    yield storage_model_1.StorageModel.deleteMany({ bucketId });
});
