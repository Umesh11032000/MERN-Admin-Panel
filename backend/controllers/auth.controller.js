import mongoose from 'mongoose'
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET, JWT_EXPIRATION } from '../config/env.js'

export const signIn = async (req, res, next) => {
  const session = await mongoose.startSession()
  session.startTransaction()
  try {
    const { email, password } = req.body

    // Check if user exists
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      await session.abortTransaction()
      session.endSession()
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      await session.abortTransaction()
      session.endSession()
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      })
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION
    })

    // Commit transaction
    await session.commitTransaction()
    session.endSession()
    res.status(200).json({
      success: true,
      message: 'User signed in successfully',
      data: {
        token,
        user
      }
    })
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    console.error(error)
  }
}

export const signUp = async (req, res, next) => {
  try {
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
      message: 'User signed up successfully',
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

export const me = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET)

    // Get user
    const user = await User.findById(decoded.id).select('-password')

    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: {
        user
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

export const allUsers = async (req, res, next) => {
  try {
    // Get all users
    const users = await User.find().select('-password')

    res.status(200).json({
      success: true,
      message: 'All users fetched successfully',
      data: {
        users
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
