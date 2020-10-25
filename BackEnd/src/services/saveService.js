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
const saves_1 = __importDefault(require("../models/saves"));
const DatabaseError_1 = __importDefault(require("../errors/DatabaseError"));
const errorCodes_1 = require("../config/errorCodes");
class SaveService {
    addSave(expenditure) {
        return __awaiter(this, void 0, void 0, function* () {
            const SaveModel = new saves_1.default(expenditure);
            yield SaveModel.save();
        });
    }
    findSaves(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const saves = yield saves_1.default.find({ idUser });
            return saves;
        });
    }
    deleteSave(idUser, idSave) {
        return __awaiter(this, void 0, void 0, function* () {
            const save = yield saves_1.default.findOne({ idUser, _id: idSave });
            // tslint:disable-next-line
            console.log(save);
            if (!save) {
                throw new DatabaseError_1.default(errorCodes_1.SAVE_NOT_FOUND_MESSAGE, errorCodes_1.SAVE_NOT_FOUND_CODE);
            }
            yield saves_1.default.deleteOne({ idUser, _id: idSave });
        });
    }
    updateSave(idUser, SaveData, idSave) {
        return __awaiter(this, void 0, void 0, function* () {
            const expenditure = yield saves_1.default.findOne({ idUser, _id: idSave });
            if (!expenditure) {
                throw new DatabaseError_1.default(errorCodes_1.SAVE_NOT_FOUND_MESSAGE, errorCodes_1.SAVE_NOT_FOUND_CODE);
            }
            yield saves_1.default.updateOne({ _id: idSave }, SaveData);
        });
    }
}
exports.default = SaveService;
