import  {Router, Request, Response} from 'express'
import Authorization from '../../middlewares/authMiddleware'
import CategoryController from '../../controller/categoryController'
import DomainError from '../../errors/DomainError'

const router: Router = Router()

router.post('/category', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new CategoryController()
        await controller.addCategory(req.body)
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

router.get('/category', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new CategoryController()
        const categories = await controller.getCategories(req.body)
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

router.delete('/category/:idCategory', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new CategoryController()
        await controller.deleteCategories(req.body.idUser, req.params.idCategory)
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

router.patch('/category/:idCategory', Authorization, async (req: Request, res: Response) => {
    try {
        const controller = new CategoryController()
        await controller.updateCategories(req.body.idUser, req.body, req.params.idCategory)
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