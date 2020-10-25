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
const income_1 = __importDefault(require("../models/income"));
const DatabaseError_1 = __importDefault(require("../errors/DatabaseError"));
const errorCodes_1 = require("../config/errorCodes");
class ReceiptService {
    addReceipt(expenditure) {
        return __awaiter(this, void 0, void 0, function* () {
            const ReceiptModel = new income_1.default(expenditure);
            yield ReceiptModel.save();
        });
    }
    findReceipts(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const receipts = yield income_1.default.find({ idUser });
            return receipts;
        });
    }
    deleteReceipt(idUser, idReceipt) {
        return __awaiter(this, void 0, void 0, function* () {
            const receipt = yield income_1.default.findOne({ idUser, _id: idReceipt });
            // tslint:disable-next-line
            console.log(receipt);
            if (!receipt) {
                throw new DatabaseError_1.default(errorCodes_1.RECEIPT_NOT_FOUND_MESSAGE, errorCodes_1.RECEIPT_NOT_FOUND_CODE);
            }
            yield income_1.default.deleteOne({ idUser, _id: idReceipt });
        });
    }
    updateReceipt(idUser, ReceiptData, idReceipt) {
        return __awaiter(this, void 0, void 0, function* () {
            const expenditure = yield income_1.default.findOne({ idUser, _id: idReceipt });
            if (!expenditure) {
                throw new DatabaseError_1.default(errorCodes_1.RECEIPT_NOT_FOUND_MESSAGE, errorCodes_1.RECEIPT_NOT_FOUND_CODE);
            }
            yield income_1.default.updateOne({ _id: idReceipt }, ReceiptData);
        });
    }
}
exports.default = ReceiptService;
