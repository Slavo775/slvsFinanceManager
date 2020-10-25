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
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
const expenditureValidation_1 = __importDefault(require("../utils/requestValidations/expenditureValidation"));
const errorCodes_1 = require("../config/errorCodes");
const expenditureService_1 = __importDefault(require("../services/expenditureService"));
class ExpenditureController {
    addExpenditure(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = new expenditureValidation_1.default();
            yield validation.addExpenditure(requestBody);
            const service = new expenditureService_1.default();
            yield service.addExpenditure(requestBody);
        });
    }
    getExpenditures(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!requestBody.hasOwnProperty('idUser')) {
                throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
            }
            const service = new expenditureService_1.default();
            return yield service.findExpenditures(requestBody.idUser);
        });
    }
    deleteExpenditure(idUser, idExpenditure) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!idUser) {
                    throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
                }
                if (!idExpenditure) {
                    throw new ValidationError_1.default(errorCodes_1.ID_EXPENDITURE_MISSING_MESSAGE, errorCodes_1.ID_EXPENDITURE_MISSING_CODE);
                }
                const service = new expenditureService_1.default();
                yield service.deleteExpenditure(idUser, idExpenditure);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateExpenditure(idUser, body, idExpenditure) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!idUser) {
                    throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
                }
                if (!body) {
                    throw new ValidationError_1.default(errorCodes_1.EXPENDITURE_OBJECT_MISSING_MESSAGE, errorCodes_1.EXPENDITURE_NOT_FOUND_CODE);
                }
                if (!idExpenditure) {
                    throw new ValidationError_1.default(errorCodes_1.ID_EXPENDITURE_MISSING_MESSAGE, errorCodes_1.ID_EXPENDITURE_MISSING_CODE);
                }
                delete body.idUser;
                const service = new expenditureService_1.default();
                yield service.updateExpenditure(idUser, body, idExpenditure);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = ExpenditureController;
