"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_VARIABLE = exports.TYPE_CONSTANT = void 0;
const mongoose_1 = require("mongoose");
exports.TYPE_CONSTANT = 1;
exports.TYPE_VARIABLE = 2;
const expenditureSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    amount: Number,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    type: Number,
    user: mongoose_1.Schema.Types.ObjectId,
    dateAdd: {
        type: Date,
        default: Date.now()
    },
    deleted: {
        type: Boolean,
        default: false
    },
    monthlySpend: {
        type: Boolean,
        default: false
    }
});
exports.default = mongoose_1.model("expenditures", expenditureSchema);
