import {Request, Response, Router} from 'express'
import InfoController from '../../controller/InfoController'

const router: Router = Router()

router.get('/info', (req: Request, res: Response) => {
    const infoController: InfoController = new InfoController()

    res.send({message: infoController.getInfo()});
})

export default router