import User from '../models/user.model.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET, JWT_EXPIRATION } from '../config/env.js'

export const createUser = async (req, res) => {
  try {
    // Throw an error
    // throw new Error('Test error')

    const { name, email, password, role } = req.body

    // Check if user already exists
    const user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      role
    })

    // Create JWT token
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION
    })

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        token,
        user: newUser
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: {
        user
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    let { page, limit, search, excludeIds } = req.query
    page = Number(page) || 1
    limit = Number(limit) || 10
    search = search || ''

    const startIndex = (page - 1) * limit

    const total = await User.countDocuments({
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ],
      _id: { $nin: excludeIds }
    })

    const users = await User.find({
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ],
      _id: { $nin: excludeIds }
    })
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit)

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: {
        users,
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        total,
        limit: Number(limit)
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: {
        user
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: {
        user
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}
