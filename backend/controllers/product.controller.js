import mongoose, { Query } from 'mongoose'
import Product from '../models/product.model.js'
import multer from 'multer'

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, image } = req.body

    // Create a new product
    const product = await Product.create({
      name,
      description,
      price,
      quantity,
      image: req.file.path
    })

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: {
        product
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
    console.log(error)
  }
}

export const getProducts = async (req, res) => {
  try {
    const { page , limit } = req.query

    const startIndex = (page - 1) * limit
    const total = await Product.countDocuments()

    const products = await Product.find().sort({ createdAt: -1 }).skip(startIndex).limit(limit)

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: {
        products,
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        total
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
    console.log(error)
  }
}

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: {
        product
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
    console.log(error)
  }
}

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: {
        product
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
    console.log(error)
  }
}