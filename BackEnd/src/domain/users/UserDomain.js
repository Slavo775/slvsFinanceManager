"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = UserDomain;
