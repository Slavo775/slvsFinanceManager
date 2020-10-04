export default interface ErrorInterface {
    getErrorCode(): number,
    setErrorCode(errorCode: number): this,
    getErrorMessage(): string,
    setErrorMessage(errorMessage: string): this,
    getHttpCode(): number,
    setHttpCode(httpCode: number): this
}