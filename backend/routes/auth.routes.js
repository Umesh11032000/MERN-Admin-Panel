import { Router } from 'express'
import { me, signIn, signUp } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.post('/sign-in', signIn)
authRouter.post('/sign-up', signUp)
authRouter.post('/me', me)

export default authRouter