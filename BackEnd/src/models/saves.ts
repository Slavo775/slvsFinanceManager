import { Schema, model } from 'mongoose'

const savesSchema = new Schema({
    name: String,
    description: String,
    amount: String,
    category: {type: Schema.Types.ObjectId, ref: 'category'},
    idUser: {type: Schema.Types.ObjectId, ref: 'user'},
    dateAdd: {type: Date, default: Date.now()}
})

export default model("save", savesSchema)