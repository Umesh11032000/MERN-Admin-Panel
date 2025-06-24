import express from 'express'
import { PORT } from './config/env.js'
import authRouter from './routes/auth.routes.js'
import { connectToMongoDB } from './database/mongodb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import productRouter from './routes/product.routes.js'
import path from 'path'

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
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/products', productRouter)

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  await connectToMongoDB()
})

export default app
