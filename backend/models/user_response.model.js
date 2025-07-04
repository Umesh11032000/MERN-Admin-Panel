import mongoose from 'mongoose'

const userResponseSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    questionnaire_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Questionnaire',
      required: true
    },
    submitted_at: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
)

const UserResponse = mongoose.model('UserResponse', userResponseSchema)
export default UserResponse