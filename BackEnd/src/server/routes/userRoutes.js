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
const errorCodes_1 = require("../../config/errorCodes");
const DomainError_1 = __importDefault(require("../../errors/DomainError"));
const userController_1 = __importDefault(require("../../controller/userController"));
const authMiddleware_1 = __importDefault(require("../../middlewares/authMiddleware"));
const router = express_1.Router();
router.post('/user/google-sign-in', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userIdToken = req.body.userToken;
        const userController = new userController_1.default();
        const user = yield userController.signIn(userIdToken);
        res.cookie('user', user.getJwtToken(), {
            maxAge: 86400000,
            httpOnly: true
        });
        res.status(201).send({ userEmail: user.getEmail() });
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error);
        if (error instanceof DomainError_1.default) {
            res.status(error.getHttpCode()).send(error.getErrorMessage());
            return;
        }
        res.status(401).send(errorCodes_1.GENERAL_UNAUTHORIZE_MESSAGE);
    }
}));
router.get('/user/check', authMiddleware_1.default, (req, res) => {
    res.send(req.body);
});
exports.default = router;
