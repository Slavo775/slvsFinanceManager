"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const incomeSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    idUser: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' },
    dateAdd: { type: Date, default: Date.now() },
    date: { type: Date, default: Date.now() },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'category' }
});
exports.default = mongoose_1.model('incomes', incomeSchema);
