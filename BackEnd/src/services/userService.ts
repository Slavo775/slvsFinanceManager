import {OAuth2Client, TokenPayload} from 'google-auth-library'
import User from '../models/user'
import ConfigError from '../errors/ConfigError'
import UnauthorizedError from '../errors/UnauthorizedError'
import { GOOGLE_ID_CONFIG_CODE, GOOGLE_ID_CONFIG_MESSAGE, UNAUTHORIZE_BY_GOOGLE_CODE, UNAUTHORIZE_BY_GOOGLE_MESSAGE} from '../config/errorCodes'
import UserDomain from '../domain/users/UserDomain'

export default class UserService {

    public async signIn(userToken: string): Promise<string>
    {
        const client: OAuth2Client = new OAuth2Client(userToken)
        await this.verify(userToken, client)

        return '';
    }

    private async verify(token: string, client: OAuth2Client): Promise<void>
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
        // tslint:disable-next-line
        console.log(payload)
        if (!payload || !payload.sub) {
            throw new UnauthorizedError(UNAUTHORIZE_BY_GOOGLE_MESSAGE, UNAUTHORIZE_BY_GOOGLE_CODE)
        }
    }

    private async findUser(): Promise<UserDomain>
    {
        const userDomain = new UserDomain()

        return userDomain;
    }
}