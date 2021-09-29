"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeResponse = void 0;
const sanitizeResponse = (data) => {
    if (Array.isArray(data)) {
        const sanitizedResponse = [];
        data.forEach((item) => {
            let response = {};
            response._id = item._id;
            response.createdAt = item.createdAt;
            response.updatedAt = item.updatedAt;
            response = Object.assign(Object.assign({}, response), item.data);
            sanitizedResponse.push(response);
        });
        return sanitizedResponse;
    }
    let response = {};
    response._id = data._id;
    response.createdAt = data.createdAt;
    response.updatedAt = data.updatedAt;
    response = Object.assign(Object.assign({}, response), data.data);
    return response;
};
exports.sanitizeResponse = sanitizeResponse;
