import { Schema, model } from 'mongoose'

export const TYPE_CONSTANT = 1;
export const TYPE_VARIABLE = 2;

const expenditureSchema = new Schema({
    name: String,
    description: String,
    amount: Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    type: Number,
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
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
})

export default model("expenditures", expenditureSchema)