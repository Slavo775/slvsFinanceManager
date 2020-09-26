import {Router} from 'express'
import swaggerUI from 'swagger-ui-express'
import docInit from '../../docs/initDocs'

const router: Router = Router();

router.use('/docs', swaggerUI.serve, swaggerUI.setup(docInit, {explorer: true}))

export default router



