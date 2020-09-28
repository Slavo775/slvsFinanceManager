import {Schema, model} from 'mongoose'

const incomeSchema = new Schema({
    name: String,
    description: String,
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    dateAdd: {type: Date, default: Date.now()},
    date: {type: Date, default: Date.now()}, /// datum kedy bol prijem
    category: {type: Schema.Types.ObjectId, ref: 'category'}
})

export default model('income', incomeSchema)