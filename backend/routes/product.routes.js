import { Router } from 'express'
import {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct
} from '../controllers/product.controller.js'
import multer from 'multer'
import path from 'path'

const productRouter = Router()

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/') // Save to uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = path.extname(file.originalname)
    cb(null, uniqueSuffix + ext)
  }
})

// File filter to allow only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Only JPEG, PNG, and GIF images are allowed'), false)
  }
}

const upload = multer({ storage, fileFilter })

productRouter.post('/create', upload.single('image'), createProduct)
productRouter.get('/', getProducts)
productRouter.get('/:id', getSingleProduct)
productRouter.put('/update/:id', upload.single('image'), updateProduct)

export default productRouter