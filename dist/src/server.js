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
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const nuxt_1 = require("nuxt");
const express_2 = require("@src/config/express");
const routes_1 = require("@src/routes/routes");
const errorHandler_1 = require("@src/middleware/errorHandler");
const logger_1 = require("@src/utils/logger");
const morgan_1 = require("@src/middleware/morgan");
const connectDatabase_1 = require("@src/helpers/connectDatabase");
const isDev_1 = require("@src/utils/isDev");
dotenv_safe_1.default.config({ allowEmptyValues: true });
const app = (0, express_1.default)();
const PORT = express_2.expressConfig.SERVER_PORT;
(0, connectDatabase_1.connectDatabase)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(morgan_1.morganMiddleware);
app.use(routes_1.routes);
app.use((err, req, res, next) => (0, errorHandler_1.HandleError)(err, req, res, next));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, isDev_1.isDev)()) {
        const nuxt = yield (0, nuxt_1.loadNuxt)('dev');
        (0, nuxt_1.build)(nuxt);
        yield nuxt.ready();
        app.use(nuxt.render);
    }
    else {
        app.use(express_1.default.static(`${__dirname}/../dashboard`));
        app.get(/.*/, (_req, res) => res.sendFile(`${__dirname}/../dashboard/404.html`));
    }
    app.listen(PORT);
    logger_1.Logger.info(`Server listening on PORT: ${PORT}`);
});
startServer();
