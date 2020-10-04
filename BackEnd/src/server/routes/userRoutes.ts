import {Request, Response, Router} from 'express'
import { GENERAL_UNAUTHORIZE_MESSAGE } from '../../config/errorCodes'
import DomainError from '../../errors/DomainError'
import UserController from '../../controller/userController'

const router: Router = Router()

router.post('/user/google-sign-in', (req: Request, res: Response) => {
    try {
        const userIdToken = req.body.userToken
        const userController = new UserController()
        const jwtToken = userController.signIn(userIdToken)
    }
    catch (error) {
        if (error instanceof DomainError) {
            res.status(error.getHttpCode()).send(error.getErrorMessage())
            return;
        }
        res.status(401).send(GENERAL_UNAUTHORIZE_MESSAGE)
    }

})

export default router