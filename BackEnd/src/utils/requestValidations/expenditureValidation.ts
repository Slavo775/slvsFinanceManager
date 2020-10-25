import ValidationError from '../../errors/ValidationError'

const createExpenditureProperty: string[] =  [
    'category',
    'date',
    'name'
]

export default class ExpenditureValidation {

    public addExpenditure(expenditureValidation: object) {
        createExpenditureProperty.forEach((prop) => {
            if (!expenditureValidation.hasOwnProperty(prop)) {
                // TODO add expenditure caode and message to config
                throw new ValidationError('', 11);
            }
        })
    }

}