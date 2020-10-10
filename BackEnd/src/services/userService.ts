import {OAuth2Client} from 'google-auth-library'
import User from '../models/user'
import { UserInterface } from '../models/user'
import ConfigError from '../errors/ConfigError'
import UnauthorizedError from '../errors/UnauthorizedError'
import { GOOGLE_ID_CONFIG_CODE, GOOGLE_ID_CONFIG_MESSAGE, UNAUTHORIZE_BY_GOOGLE_CODE, UNAUTHORIZE_BY_GOOGLE_MESSAGE} from '../config/errorCodes'
import UserDomain from '../domain/users/UserDomain'

export default class UserService {

    public async signIn(userToken: string): Promise<UserDomain>
    {
        const client: OAuth2Client = new OAuth2Client(userToken)
        const user = await this.verify(userToken, client)

        return user;
    }

    private async verify(token: string, client: OAuth2Client): Promise<UserDomain>
    {
        const googleClientId: string = process.env.GOOGLE_CLIENT_ID || '';

        if (!googleClientId) {
            throw new ConfigError(GOOGLE_ID_CONFIG_MESSAGE, GOOGLE_ID_CONFIG_CODE)
        }

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: googleClientId
        })
        const payload = await ticket.getPayload() || undefined;
        if (!payload || !payload.sub) {
            throw new UnauthorizedError(UNAUTHORIZE_BY_GOOGLE_MESSAGE, UNAUTHORIZE_BY_GOOGLE_CODE)
        }
        const googleId = payload.sub
        const email = payload.email || ''
        return await this.findUser({googleId, email});
    }



    private async findUser(googlePayload: UserInterface): Promise<UserDomain>
    {
        const userDomain = new UserDomain()
        const dbUser = await User.findOne({googleId: googlePayload.googleId});
        if (!dbUser) {
            const newUser = new User(googlePayload)
            await newUser.save()
            userDomain.setGoogleId(googlePayload.googleId)
            userDomain.setEmail(googlePayload.email)
            userDomain.setIdUser(newUser._id)
        } else {
            userDomain.setIdUser(dbUser._id)
            userDomain.setGoogleId(googlePayload.googleId)
            userDomain.setEmail(googlePayload.email)
        }
        return userDomain;
    }
}