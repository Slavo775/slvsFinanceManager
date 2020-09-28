"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomainError extends Error {
    constructor(message, errorCode) {
        super(message);
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
}
exports.default = DomainError;
