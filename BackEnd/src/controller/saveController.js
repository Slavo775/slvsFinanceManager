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
const saveValidation_1 = __importDefault(require("../utils/requestValidations/saveValidation"));
const errorCodes_1 = require("../config/errorCodes");
const saveService_1 = __importDefault(require("../services/saveService"));
class SaveController {
    addSave(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = new saveValidation_1.default();
            yield validation.addSave(requestBody);
            const service = new saveService_1.default();
            yield service.addSave(requestBody);
        });
    }
    getSaves(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!requestBody.hasOwnProperty('idUser')) {
                throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
            }
            const service = new saveService_1.default();
            return yield service.findSaves(requestBody.idUser);
        });
    }
    deleteSave(idUser, idSave) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!idUser) {
                    throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
                }
                if (!idSave) {
                    throw new ValidationError_1.default(errorCodes_1.ID_RECEIPT_MISSING_MESSAGE, errorCodes_1.ID_RECEIPT_MISSING_CODE);
                }
                const service = new saveService_1.default();
                yield service.deleteSave(idUser, idSave);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateSave(idUser, body, idSave) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!idUser) {
                    throw new ValidationError_1.default(errorCodes_1.ID_USER_MISSING_MESSAGE, errorCodes_1.ID_USER_MISSING_CODE);
                }
                if (!body) {
                    throw new ValidationError_1.default(errorCodes_1.RECEIPT_OBJECT_MISSING_MESSAGE, errorCodes_1.RECEIPT_NOT_FOUND_CODE);
                }
                if (!idSave) {
                    throw new ValidationError_1.default(errorCodes_1.ID_RECEIPT_MISSING_MESSAGE, errorCodes_1.ID_RECEIPT_MISSING_CODE);
                }
                delete body.idUser;
                const service = new saveService_1.default();
                yield service.updateSave(idUser, body, idSave);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = SaveController;
