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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UnauthorizedError_1 = __importDefault(require("../errors/UnauthorizedError"));
const ConfigError_1 = __importDefault(require("../errors/ConfigError"));
const errorCodes_1 = require("../config/errorCodes");
const DomainError_1 = __importDefault(require("../errors/DomainError"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.user || '';
        const tokenSecret = process.env.JWT_USER_SECRET || '';
        if (!token) {
            throw new UnauthorizedError_1.default(errorCodes_1.COOKIE_USER_MISSING_MESSAGE, errorCodes_1.COOKIE_USER_MISSING_CODE);
        }
        if (!tokenSecret) {
            throw new ConfigError_1.default(errorCodes_1.JWT_SECRET_CONFIG_MESSAGE, errorCodes_1.JWT_SECRET_CONFIG_CODE);
        }
        const decoded = yield jsonwebtoken_1.default.verify(token, tokenSecret);
        if (!decoded.idUser) {
            throw new UnauthorizedError_1.default(errorCodes_1.EMPTY_USER_TOKEN_MESSAGE, errorCodes_1.EMPTY_USER_TOKEN_CODE);
        }
        req.body.idUser = decoded.idUser;
        next();
    }
    catch (error) {
        if (error instanceof DomainError_1.default) {
            res.status(error.getHttpCode()).send({ message: error.getErrorMessage(), code: error.getErrorCode });
            return;
        }
        res.status(401).send({ message: errorCodes_1.GENERAL_UNAUTHORIZE_MESSAGE, code: errorCodes_1.GENERAL_UNAUTHORIZE_CODE });
    }
});
