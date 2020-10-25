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
const categoryValidation_1 = __importDefault(require("../utils/requestValidations/categoryValidation"));
const categoryService_1 = __importDefault(require("../services/categoryService"));
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
const errorCodes_1 = require("../config/errorCodes");
class CategoryController {
    addCategory(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = new categoryValidation_1.default();
            yield validation.addCategory(requestBody);
            const service = new categoryService_1.default();
            yield service.addCategory(requestBody);
        });
    }
    getCategories(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!requestBody.hasOwnProperty('idUser')) {
                throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
            }
            const service = new categoryService_1.default();
            return yield service.findCategories(requestBody.idUser);
        });
    }
    deleteCategories(idUser, idCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!idUser) {
                    throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
                }
                if (!idCategory) {
                    throw new ValidationError_1.default(errorCodes_1.ID_CATEGORY_MISSING_MESSAGE, errorCodes_1.ID_CATEGORY_MISSING_CODE);
                }
                const service = new categoryService_1.default();
                yield service.deleteCategory(idUser, idCategory);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateCategories(idUser, body, idCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!idUser) {
                    throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
                }
                if (!body) {
                    throw new ValidationError_1.default(errorCodes_1.CATEGORY_OBJECT_MISSING_MESSAGE, errorCodes_1.CATEGORY_NOT_FOUND_CODE);
                }
                if (!idCategory) {
                    throw new ValidationError_1.default(errorCodes_1.ID_CATEGORY_MISSING_MESSAGE, errorCodes_1.ID_CATEGORY_MISSING_CODE);
                }
                delete body.idUser;
                const service = new categoryService_1.default();
                yield service.updateCategory(idUser, body, idCategory);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = CategoryController;
