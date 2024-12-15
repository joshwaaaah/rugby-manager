/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.on('/').renderInertia('Home')

router.get('/login', [LoginController, 'show'])
router.post('/login', [LoginController, 'store'])

router.get('/register', [RegisterController, 'show'])
router.post('/register', [RegisterController, 'store'])

router.on('/dashboard').renderInertia('Dashboard').use(middleware.auth())
