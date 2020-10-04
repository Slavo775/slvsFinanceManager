import UserService from '../services/userService'
import UnauthorizedError from '../errors/UnauthorizedError'
import {EMPTY_USER_TOKEN_CODE, EMPTY_USER_TOKEN_MESSAGE} from '../config/errorCodes'

export default class UserController {

   public async signIn(userToken: string): Promise<string>
   {
        if (!userToken) {
            throw new UnauthorizedError(EMPTY_USER_TOKEN_MESSAGE, EMPTY_USER_TOKEN_CODE)
        }

        const userService = new UserService()
        const jwtToken: string = await userService.signIn(userToken)

       return jwtToken
   }

}