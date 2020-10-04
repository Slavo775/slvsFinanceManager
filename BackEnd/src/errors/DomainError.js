"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomainError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.httpCode = 400;
        this.errorMessage = message;
        this.errorCode = errorCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
    getErrorCode() {
        return this.errorCode;
    }
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    getErrorMessage() {
        return this.errorMessage;
    }
    setErrorMessage(errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    getHttpCode() {
        return this.httpCode;
    }
    setHttpCode(httpCode) {
        this.httpCode = httpCode;
        return this;
    }
}
exports.default = DomainError;
