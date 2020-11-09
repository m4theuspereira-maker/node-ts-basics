import { Router } from 'express'

import UserController from './controllers/UserController'
import HomeController from './controllers/HomeController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.getById)
routes.get('/', HomeController.home)
routes.post('/users/', UserController.create)

export default routes
