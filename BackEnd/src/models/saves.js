"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const savesSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    amount: String,
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'category' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' },
    dateAdd: { type: Date, default: Date.now() }
});
exports.default = mongoose_1.model("category", savesSchema);
