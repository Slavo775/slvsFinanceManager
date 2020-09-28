"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
const errorCodes_1 = require("../config/errorCodes");
class Validator {
    isEmail(email) {
        if (!validator_1.default.isEmail(email)) {
            throw new ValidationError_1.default(errorCodes_1.EMAIL_VALIDATION_MESSAGE, errorCodes_1.EMAIL_VALIDATION_CODE);
        }
        return true;
    }
}
exports.default = Validator;
