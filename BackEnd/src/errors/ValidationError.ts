import DomainError from "./DomainError";
import ErrorInterface from "./ErrorInterface";

export default class ValidationError extends DomainError {

    constructor (message: string, errorCode: number)
    {
        super(message, errorCode)
    }
}