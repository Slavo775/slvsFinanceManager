import ErrorInterface from "./ErrorInterface"

export default abstract class DomainError extends Error implements ErrorInterface {
    protected errorMessage: string

    protected errorCode: number

    protected httpCode: number = 400

    constructor(message: string, errorCode: number) {
        super(message)

        this.errorMessage = message
        this.errorCode = errorCode


        this.name = this.constructor.name

        Error.captureStackTrace(this, this.constructor)
    }

    public getErrorCode(): number
    {
        return this.errorCode
    }

    public setErrorCode(errorCode: number): this
    {
        this.errorCode = errorCode;
        return this
    }

    public getErrorMessage() :string
    {
        return this.errorMessage
    }

    public setErrorMessage(errorMessage: string): this
    {
        this.errorMessage = errorMessage
        return this
    }

    public getHttpCode(): number
    {
        return this.httpCode
    }

    public setHttpCode(httpCode: number): this
    {
        this.httpCode = httpCode
        return this
    }
}