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
const expenditure_1 = __importDefault(require("../models/expenditure"));
const DatabaseError_1 = __importDefault(require("../errors/DatabaseError"));
const errorCodes_1 = require("../config/errorCodes");
class ExpenditureService {
    addExpenditure(expenditure) {
        return __awaiter(this, void 0, void 0, function* () {
            const ExpenditureModel = new expenditure_1.default(expenditure);
            yield ExpenditureModel.save();
        });
    }
    findExpenditures(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield expenditure_1.default.find({ idUser });
            return categories;
        });
    }
    deleteExpenditure(idUser, idExpenditure) {
        return __awaiter(this, void 0, void 0, function* () {
            const expenditure = yield expenditure_1.default.findOne({ idUser, _id: idExpenditure });
            if (!expenditure) {
                throw new DatabaseError_1.default(errorCodes_1.EXPENDITURE_NOT_FOUND_MESSAGE, errorCodes_1.EXPENDITURE_NOT_FOUND_CODE);
            }
            yield expenditure_1.default.deleteOne({ idUser, _id: idExpenditure });
        });
    }
    updateExpenditure(idUser, ExpenditureData, idExpenditure) {
        return __awaiter(this, void 0, void 0, function* () {
            const expenditure = yield expenditure_1.default.findOne({ idUser, _id: idExpenditure });
            if (!expenditure) {
                throw new DatabaseError_1.default(errorCodes_1.EXPENDITURE_NOT_FOUND_MESSAGE, errorCodes_1.EXPENDITURE_NOT_FOUND_CODE);
            }
            yield expenditure_1.default.updateOne({ _id: idExpenditure }, ExpenditureData);
        });
    }
}
exports.default = ExpenditureService;
