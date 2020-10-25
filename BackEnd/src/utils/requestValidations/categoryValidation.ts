import Validator from 'validator'
import { CATEGORY_REQUEST_CODE, CATEGORY_REQUEST_MESSAGE, GENERAL_VALIDATION_CODE } from '../../config/errorCodes';
import ValidationError from '../../errors/ValidationError'

const createCategoryProperty: string[] =  [
    'name',
    'type',
    'idUser'
]

export default class CategoryValidation {

    public addCategory(categoryValidation: object) {
        createCategoryProperty.forEach((prop) => {
            if (!categoryValidation.hasOwnProperty(prop)) {
                throw new ValidationError(CATEGORY_REQUEST_MESSAGE + prop, CATEGORY_REQUEST_CODE);
            }
        })
    }

}