import DomainError from "./DomainError";

export default class ValidationError extends DomainError {

    constructor (message: string, errorCode: number, httpCode: number = 400)
    {
        super(message, errorCode)
        this.setHttpCode(httpCode)
    }
}