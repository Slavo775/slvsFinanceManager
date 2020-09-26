"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InfoController_1 = __importDefault(require("../../controller/InfoController"));
const router = express_1.Router();
router.get('/info', (req, res) => {
    const infoController = new InfoController_1.default();
    res.send({ message: infoController.getInfo() });
});
exports.default = router;
