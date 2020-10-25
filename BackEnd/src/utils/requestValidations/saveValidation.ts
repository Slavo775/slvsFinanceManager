import ValidationError from '../../errors/ValidationError'

const createSaveProperty: string[] =  [
    'category',
    'date',
    'name'
]

export default class SaveValidation {

    public addSave(receiptValidation: object) {
        createSaveProperty.forEach((prop) => {
            if (!receiptValidation.hasOwnProperty(prop)) {
                // TODO add expenditure caode and message to config
                throw new ValidationError('', 11);
            }
        })
    }

}