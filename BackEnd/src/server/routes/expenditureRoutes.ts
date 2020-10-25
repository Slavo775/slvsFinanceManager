import  {Router, Request, Response} from 'express'
import Authorization from '../../middlewares/authMiddleware'
import ExpenditureController from '../../controller/expenditureController'
import DomainError from '../../errors/DomainError'

const router: Router = Router()

router.post('/expenditure', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new ExpenditureController()
        await controller.addExpenditure(req.body)
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

router.get('/expenditure', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new ExpenditureController()
        const categories = await controller.getExpenditures(req.body)
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

router.delete('/expenditure/:idExpenditure', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new ExpenditureController()
        await controller.deleteExpenditure(req.body.idUser, req.params.idExpenditure)
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

router.patch('/expenditure/:idExpenditure', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new ExpenditureController()
        await controller.updateExpenditure(req.body.idUser, req.body, req.params.idExpenditure)
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