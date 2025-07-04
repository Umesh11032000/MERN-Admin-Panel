import express from 'express'
import { PORT } from './config/env.js'
import authRouter from './routes/auth.routes.js'
import { connectToMongoDB } from './database/mongodb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import userRouter from './routes/user.routes.js'
import questionnaireRoutes from './routes/questionnaire.routes.js';
// import questionRoutes from './routes/question.routes.js';
// import optionRoutes from './routes/option.routes.js';
// import responseRoutes from './routes/response.routes.js';

const app = express()

// Serve static files
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API')
})

// AUTH
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)

// Questionnaires
app.use('/api/v1/questionnaires', questionnaireRoutes);
// app.use('/api/v1/questions', questionRoutes);
// app.use('/api/v1/options', optionRoutes);
// app.use('/api/v1/responses', responseRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  await connectToMongoDB()
})

export default app
