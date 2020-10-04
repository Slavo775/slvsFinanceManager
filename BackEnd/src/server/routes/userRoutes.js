"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errorCodes_1 = require("../../config/errorCodes");
const DomainError_1 = __importDefault(require("../../errors/DomainError"));
const userController_1 = __importDefault(require("../../controller/userController"));
const router = express_1.Router();
router.post('/user/google-sign-in', (req, res) => {
    try {
        const userIdToken = req.body.userToken;
        const userController = new userController_1.default();
        const jwtToken = userController.signIn(userIdToken);
    }
    catch (error) {
        if (error instanceof DomainError_1.default) {
            res.status(error.getHttpCode()).send(error.getErrorMessage());
            return;
        }
        res.status(401).send(errorCodes_1.GENERAL_UNAUTHORIZE_MESSAGE);
    }
});
exports.default = router;
