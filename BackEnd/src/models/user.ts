import {Schema, model} from 'mongoose'
import Validation from '../utils/Validation'

const Validator: Validation = new Validation()

const userSchema = new Schema ({
    email: {
        type:String,
        validate: Validator.isEmail
    },
    googleId: String,
    mainCurrency: String
})

export default model("user", userSchema)

export interface UserInterface {
    email: string,
    googleId: string
}