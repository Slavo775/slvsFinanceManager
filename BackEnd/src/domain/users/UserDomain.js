"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ConfigError_1 = __importDefault(require("../../errors/ConfigError"));
const errorCodes_1 = require("../../config/errorCodes");
class UserDomain {
    getJwtToken() {
        return this.jwtToken;
    }
    setJwtToken(jwtToken) {
        this.jwtToken = jwtToken;
    }
    getIdUser() {
        return this.idUser;
    }
    setIdUser(idUser) {
        this.idUser = idUser;
        this.generateJWTToken();
    }
    getGoogleId() {
        return this.googleId;
    }
    setGoogleId(googleId) {
        this.googleId = googleId;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    generateJWTToken() {
        const JWTSecret = process.env.JWT_USER_SECRET;
        if (JWTSecret) {
            this.setJwtToken(jsonwebtoken_1.default.sign({ idUser: this.getIdUser() }, JWTSecret));
        }
        else {
            throw new ConfigError_1.default(errorCodes_1.JWT_SECRET_CONFIG_MESSAGE, errorCodes_1.JWT_SECRET_CONFIG_CODE);
        }
    }
}
exports.default = UserDomain;
