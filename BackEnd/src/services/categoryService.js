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
const category_1 = __importDefault(require("../models/category"));
const DatabaseError_1 = __importDefault(require("../errors/DatabaseError"));
const errorCodes_1 = require("../config/errorCodes");
class CategoryService {
    addCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryModel = new category_1.default(category);
            yield categoryModel.save();
        });
    }
    findCategories(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield category_1.default.find({ idUser });
            return categories;
        });
    }
    deleteCategory(idUser, idCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield category_1.default.findOne({ idUser, _id: idCategory });
            if (!category) {
                throw new DatabaseError_1.default(errorCodes_1.CATEGORY_NOT_FOUND_MESSAGE, errorCodes_1.CATEGORY_NOT_FOUND_CODE);
            }
            yield category_1.default.deleteOne({ idUser, _id: idCategory });
        });
    }
    updateCategory(idUser, categoryData, idCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield category_1.default.findOne({ idUser, _id: idCategory });
            if (!category) {
                throw new DatabaseError_1.default(errorCodes_1.CATEGORY_NOT_FOUND_MESSAGE, errorCodes_1.CATEGORY_NOT_FOUND_CODE);
            }
            yield category_1.default.updateOne({ _id: idCategory }, categoryData);
        });
    }
}
exports.default = CategoryService;
