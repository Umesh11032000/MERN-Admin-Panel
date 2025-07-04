import mongoose from 'mongoose'

const userAnswerSchema = new mongoose.Schema(
  {
    user_response_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserResponse',
      required: true
    },
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    selected_option_ids: [mongoose.Schema.Types.ObjectId],
    answer_text: String,
    answered_at: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
)

const UserAnswer = mongoose.model('UserAnswer', userAnswerSchema)
export default UserAnswer