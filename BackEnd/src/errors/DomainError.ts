import ErrorInterface from "./ErrorInterface"

export default abstract class DomainError extends Error implements ErrorInterface {
    protected errorMessage: string

    protected errorCode: number

    constructor(message: string, errorCode: number) {
        super(message)

        this.errorMessage = message
        this.errorCode = errorCode

        this.name = this.constructor.name

        Error.captureStackTrace(this, this.constructor)
    }

    getErrorCode(): number
    {
        return this.errorCode
    }

    setErrorCode(errorCode: number): this
    {
        this.errorCode = errorCode;
        return this
    }

    getErrorMessage() :string
    {
        return this.errorMessage
    }

    setErrorMessage(errorMessage: string): this
    {
        this.errorMessage = errorMessage
        return this
    }
}