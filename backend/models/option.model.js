import mongoose from 'mongoose'

const optionSchema = new mongoose.Schema(
  {
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    option: {
      type: String,
      required: true
    },
    is_correct: {
      type: Boolean,
      default: false
    },
    order: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Option = mongoose.model('Option', optionSchema)
export default Option