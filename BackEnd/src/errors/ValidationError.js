"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DomainError_1 = __importDefault(require("./DomainError"));
class ValidationError extends DomainError_1.default {
    constructor(message, errorCode) {
        super(message, errorCode);
    }
}
exports.default = ValidationError;
