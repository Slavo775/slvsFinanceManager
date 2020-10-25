"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_SAVES = exports.TYPE_RECEIPTS = exports.TYPE_EXPENDITURE = exports.TYPE_WITHOUT = void 0;
const mongoose_1 = require("mongoose");
exports.TYPE_WITHOUT = 0;
exports.TYPE_EXPENDITURE = 1;
exports.TYPE_RECEIPTS = 2;
exports.TYPE_SAVES = 3;
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    deleted: {
        type: Boolean,
        default: false
    },
    dateAdd: {
        type: Date,
        default: Date.now()
    },
    isDefault: {
        type: Boolean,
        default: true
    },
    idUser: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user'
    },
    type: Number
});
// delete user sensitive information
categorySchema.methods.toJSON = function () {
    const category = this;
    const categoryObject = category.toObject();
    delete categoryObject.idUser;
    delete categoryObject.__v;
    delete categoryObject.type;
    delete categoryObject.isDefault;
    delete categoryObject.deleted;
    return categoryObject;
};
exports.default = mongoose_1.model("category", categorySchema);
