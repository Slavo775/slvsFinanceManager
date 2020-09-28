"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Validation_1 = __importDefault(require("../utils/Validation"));
const Validator = new Validation_1.default();
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        validate: Validator.isEmail
    },
    googleId: String,
    mainCurrency: String,
});
exports.default = mongoose_1.model("user", userSchema);
