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
const express_1 = require("express");
const authMiddleware_1 = __importDefault(require("../../middlewares/authMiddleware"));
const expenditureController_1 = __importDefault(require("../../controller/expenditureController"));
const DomainError_1 = __importDefault(require("../../errors/DomainError"));
const router = express_1.Router();
router.post('/expenditure', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new expenditureController_1.default();
        yield controller.addExpenditure(req.body);
        res.sendStatus(201);
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error);
        if (error instanceof DomainError_1.default) {
            res.status(error.getHttpCode()).send(error.getErrorMessage());
            return;
        }
        res.status(401);
    }
}));
router.get('/expenditure', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new expenditureController_1.default();
        const categories = yield controller.getExpenditures(req.body);
        res.status(200).send(categories);
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error);
        if (error instanceof DomainError_1.default) {
            res.status(error.getHttpCode()).send(error.getErrorMessage());
            return;
        }
        res.status(401);
    }
}));
router.delete('/expenditure/:idExpenditure', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new expenditureController_1.default();
        yield controller.deleteExpenditure(req.body.idUser, req.params.idExpenditure);
        res.sendStatus(204);
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error);
        if (error instanceof DomainError_1.default) {
            res.status(error.getHttpCode()).send(error.getErrorMessage());
            return;
        }
        res.status(401);
    }
}));
router.patch('/expenditure/:idExpenditure', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new expenditureController_1.default();
        yield controller.updateExpenditure(req.body.idUser, req.body, req.params.idExpenditure);
        res.sendStatus(200);
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error);
        if (error instanceof DomainError_1.default) {
            res.status(error.getHttpCode()).send(error.getErrorMessage());
            return;
        }
        res.status(401);
    }
}));
exports.default = router;
