"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = __importDefault(require("../../errors/ValidationError"));
const createSaveProperty = [
    'category',
    'date',
    'name'
];
class SaveValidation {
    addSave(receiptValidation) {
        createSaveProperty.forEach((prop) => {
            if (!receiptValidation.hasOwnProperty(prop)) {
                // TODO add expenditure caode and message to config
                throw new ValidationError_1.default('', 11);
            }
        });
    }
}
exports.default = SaveValidation;
