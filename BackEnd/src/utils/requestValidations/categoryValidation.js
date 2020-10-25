"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorCodes_1 = require("../../config/errorCodes");
const ValidationError_1 = __importDefault(require("../../errors/ValidationError"));
const createCategoryProperty = [
    'name',
    'type',
    'idUser'
];
class CategoryValidation {
    addCategory(categoryValidation) {
        createCategoryProperty.forEach((prop) => {
            if (!categoryValidation.hasOwnProperty(prop)) {
                throw new ValidationError_1.default(errorCodes_1.CATEGORY_REQUEST_MESSAGE + prop, errorCodes_1.CATEGORY_REQUEST_CODE);
            }
        });
    }
}
exports.default = CategoryValidation;
