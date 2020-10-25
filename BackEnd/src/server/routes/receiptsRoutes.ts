import  {Router, Request, Response} from 'express'
import Authorization from '../../middlewares/authMiddleware'
import ReceiptController from '../../controller/receiptController'
import DomainError from '../../errors/DomainError'

const router: Router = Router()

router.post('/receipt', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new ReceiptController()
        await controller.addReceipt(req.body)
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

router.get('/receipt', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new ReceiptController()
        const categories = await controller.getReceipts(req.body)
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

router.delete('/receipt/:idReceipt', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new ReceiptController()
        await controller.deleteReceipt(req.body.idUser, req.params.idReceipt)
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

router.patch('/receipt/:idReceipt', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new ReceiptController()
        await controller.updateReceipt(req.body.idUser, req.body, req.params.idReceipt)
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