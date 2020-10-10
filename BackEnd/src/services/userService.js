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
const user_1 = __importDefault(require("../models/user"));
const ConfigError_1 = __importDefault(require("../errors/ConfigError"));
const UnauthorizedError_1 = __importDefault(require("../errors/UnauthorizedError"));
const errorCodes_1 = require("../config/errorCodes");
const UserDomain_1 = __importDefault(require("../domain/users/UserDomain"));
class UserService {
    signIn(userToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new google_auth_library_1.OAuth2Client(userToken);
            const user = yield this.verify(userToken, client);
            return user;
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
            if (!payload || !payload.sub) {
                throw new UnauthorizedError_1.default(errorCodes_1.UNAUTHORIZE_BY_GOOGLE_MESSAGE, errorCodes_1.UNAUTHORIZE_BY_GOOGLE_CODE);
            }
            const googleId = payload.sub;
            const email = payload.email || '';
            return yield this.findUser({ googleId, email });
        });
    }
    findUser(googlePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDomain = new UserDomain_1.default();
            const dbUser = yield user_1.default.findOne({ googleId: googlePayload.googleId });
            if (!dbUser) {
                const newUser = new user_1.default(googlePayload);
                yield newUser.save();
                userDomain.setGoogleId(googlePayload.googleId);
                userDomain.setEmail(googlePayload.email);
                userDomain.setIdUser(newUser._id);
            }
            else {
                userDomain.setIdUser(dbUser._id);
                userDomain.setGoogleId(googlePayload.googleId);
                userDomain.setEmail(googlePayload.email);
            }
            return userDomain;
        });
    }
}
exports.default = UserService;
