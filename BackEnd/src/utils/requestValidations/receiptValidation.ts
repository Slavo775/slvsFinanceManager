import ValidationError from '../../errors/ValidationError'

const createReceiptProperty: string[] =  [
    'category',
    'date',
    'name'
]

export default class ReceiptValidation {

    public addReceipt(receiptValidation: object) {
        createReceiptProperty.forEach((prop) => {
            if (!receiptValidation.hasOwnProperty(prop)) {
                // TODO add expenditure caode and message to config
                throw new ValidationError('', 11);
            }
        })
    }

}