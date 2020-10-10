import {Request, Response, Router} from 'express'
import { GENERAL_UNAUTHORIZE_MESSAGE } from '../../config/errorCodes'
import DomainError from '../../errors/DomainError'
import UserController from '../../controller/userController'
import UserDomain from '../../domain/users/UserDomain'
import Authorization from '../../middlewares/authMiddleware'

const router: Router = Router()

router.post('/user/google-sign-in', async (req: Request, res: Response) => {
    try {
        const userIdToken = req.body.userToken
        const userController = new UserController()
        const user: UserDomain = await userController.signIn(userIdToken)
        res.cookie('user', user.getJwtToken(), {
            maxAge: 86_400_000,
            httpOnly: true
            });
        res.status(201).send({userEmail: user.getEmail()})
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error)
        if (error instanceof DomainError) {
            res.status(error.getHttpCode()).send(error.getErrorMessage())
            return;
        }
        res.status(401).send(GENERAL_UNAUTHORIZE_MESSAGE)
    }

})

router.get('/user/check', Authorization, (req: Request, res: Response) => {
    res.send(req.body)
})

export default router