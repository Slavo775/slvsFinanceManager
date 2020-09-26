"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const initDocs_1 = __importDefault(require("../../docs/initDocs"));
const router = express_1.Router();
router.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(initDocs_1.default, { explorer: true }));
exports.default = router;
