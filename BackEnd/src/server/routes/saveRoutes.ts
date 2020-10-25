import  {Router, Request, Response} from 'express'
import Authorization from '../../middlewares/authMiddleware'
import SaveController from '../../controller/saveController'
import DomainError from '../../errors/DomainError'

const router: Router = Router()

router.post('/save', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new SaveController()
        await controller.addSave(req.body)
        res.sendStatus(201)
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error)
        if (error instanceof DomainError) {
            res.status(error.getHttpCode()).send(error.getErrorMessage())
            return;
        }
        res.status(401)
    }
})

router.get('/save', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new SaveController()
        const categories = await controller.getSaves(req.body)
        res.status(200).send(categories)
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error)
        if (error instanceof DomainError) {
            res.status(error.getHttpCode()).send(error.getErrorMessage())
            return;
        }
        res.status(401)
    }
})

router.delete('/save/:idSave', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new SaveController()
        await controller.deleteSave(req.body.idUser, req.params.idSave)
        res.sendStatus(204)
    }
    catch (error) {
        // tslint:disable-next-line
        console.log(error)
        if (error instanceof DomainError) {
            res.status(error.getHttpCode()).send(error.getErrorMessage())
            return;
        }
        res.status(401)
    }
})

router.patch('/save/:idSave', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new SaveController()
        await controller.updateSave(req.body.idUser, req.body, req.params.idSave)
        res.sendStatus(200)
    } catch (error) {
        // tslint:disable-next-line
        console.log(error)
        if (error instanceof DomainError) {
            res.status(error.getHttpCode()).send(error.getErrorMessage())
            return;
        }
        res.status(401)
    }
})

export default router