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

// delete user sensitive information
categorySchema.methods.toJSON = function () {
    const category = this
    const categoryObject = category.toObject()

    delete categoryObject.idUser
    delete categoryObject.__v
    delete categoryObject.type
    delete categoryObject.isDefault
    delete categoryObject.deleted
    return categoryObject
  }

export default model("category", categorySchema)