import UserService from '../services/userService'
import UnauthorizedError from '../errors/UnauthorizedError'
import {EMPTY_USER_TOKEN_CODE, EMPTY_USER_TOKEN_MESSAGE} from '../config/errorCodes'
import UserDomain from '../domain/users/UserDomain'

export default class UserController {

   public async signIn(userToken: string): Promise<UserDomain>
   {
        if (!userToken) {
            throw new UnauthorizedError(EMPTY_USER_TOKEN_MESSAGE, EMPTY_USER_TOKEN_CODE)
        }

        const userService = new UserService()
        const user: UserDomain = await userService.signIn(userToken)

       return user
   }

}