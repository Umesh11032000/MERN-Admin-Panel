import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
