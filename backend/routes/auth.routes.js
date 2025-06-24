import { Router } from 'express'
import { me, signIn, signUp, allUsers } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.post('/sign-in', signIn)
authRouter.post('/sign-up', signUp)
authRouter.post('/me', me)
authRouter.post('/users', allUsers)

export default authRouter