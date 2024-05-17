import { HomeController } from '../../presentation/controllers/home_controller'
import express, { Router, type Express } from 'express'

export const setupApp = (): Express => {
  const app = express()
  app.use(express.json())
    
  const router = Router()
  router.get('/', new HomeController().handle)
  
  app.use('/api', router)
  return app
}
