import DomainError from "./DomainError";

export default class ValidationError extends DomainError {

    constructor (message: string, errorCode: number, httpCode: number = 401)
    {
        super(message, errorCode)
        this.setHttpCode(httpCode)
    }
}