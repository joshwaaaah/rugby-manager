/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const TeamsController = () => import('#controllers/teams_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')
const ClubsController = () => import('#controllers/clubs_controller')
const DashboardController = () => import('#controllers/dashboard_controller')

router.on('/').renderInertia('Home')

router.get('/login', [LoginController, 'show'])
router.post('/login', [LoginController, 'store'])

router.get('/register', [RegisterController, 'show'])
router.post('/register', [RegisterController, 'store'])

router
  .group(() => {
    router.get('/dashboard', [DashboardController, 'show'])

    router.get('/clubs/:id', [ClubsController, 'show'])
    router.post('/clubs', [ClubsController, 'store'])
    router.delete('/clubs/:id', [ClubsController, 'destroy'])

    router.post('/teams', [TeamsController, 'store'])
  })
  .middleware(middleware.auth())
