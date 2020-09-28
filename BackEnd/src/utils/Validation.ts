import validator from 'validator'
import ValidationError from '../errors/ValidationError'
import { EMAIL_VALIDATION_CODE, EMAIL_VALIDATION_MESSAGE } from '../config/errorCodes'

export default class Validator {

    isEmail (email: string): boolean {
        if (!validator.isEmail(email)) {
            throw new ValidationError(EMAIL_VALIDATION_MESSAGE, EMAIL_VALIDATION_CODE)
        }
        return true
    }
}