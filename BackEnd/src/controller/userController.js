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
const userService_1 = __importDefault(require("../services/userService"));
const UnauthorizedError_1 = __importDefault(require("../errors/UnauthorizedError"));
const errorCodes_1 = require("../config/errorCodes");
class UserController {
    signIn(userToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userToken) {
                throw new UnauthorizedError_1.default(errorCodes_1.EMPTY_USER_TOKEN_MESSAGE, errorCodes_1.EMPTY_USER_TOKEN_CODE);
            }
            const userService = new userService_1.default();
            const jwtToken = yield userService.signIn(userToken);
            return jwtToken;
        });
    }
}
exports.default = UserController;
