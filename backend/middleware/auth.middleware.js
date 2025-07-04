import User from "../models/user.model.js"
import { JWT_SECRET } from "../config/env.js"
import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET)

    // Get user
    const user = await User.findById(decoded.id).select('-password')
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      })
    }

    req.user = user
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    })
  }
}