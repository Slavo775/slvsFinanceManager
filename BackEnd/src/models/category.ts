import { Schema, model } from 'mongoose'

export const TYPE_WITHOUT = 0
export const TYPE_EXPENDITURE = 1
export const TYPE_RECEIPTS = 2
export const TYPE_SAVES = 3

const categorySchema = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    type: Number
})

export default model("category", categorySchema)