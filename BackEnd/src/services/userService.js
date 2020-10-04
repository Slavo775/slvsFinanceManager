"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const google_auth_library_1 = require("google-auth-library");
const ConfigError_1 = __importDefault(require("../errors/ConfigError"));
const UnauthorizedError_1 = __importDefault(require("../errors/UnauthorizedError"));
const errorCodes_1 = require("../config/errorCodes");
const UserDomain_1 = __importDefault(require("../domain/users/UserDomain"));
class UserService {
    signIn(userToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new google_auth_library_1.OAuth2Client(userToken);
            yield this.verify(userToken, client);
            return '';
        });
    }
    verify(token, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const googleClientId = process.env.GOOGLE_CLIENT_ID || '';
            if (!googleClientId) {
                throw new ConfigError_1.default(errorCodes_1.GOOGLE_ID_CONFIG_MESSAGE, errorCodes_1.GOOGLE_ID_CONFIG_CODE);
            }
            const ticket = yield client.verifyIdToken({
                idToken: token,
                audience: googleClientId
            });
            const payload = (yield ticket.getPayload()) || undefined;
            // tslint:disable-next-line
            console.log(payload);
            if (!payload || !payload.sub) {
                throw new UnauthorizedError_1.default(errorCodes_1.UNAUTHORIZE_BY_GOOGLE_MESSAGE, errorCodes_1.UNAUTHORIZE_BY_GOOGLE_CODE);
            }
        });
    }
    findUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const userDomain = new UserDomain_1.default();
            return userDomain;
        });
    }
}
exports.default = UserService;
