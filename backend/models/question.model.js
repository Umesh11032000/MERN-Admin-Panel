import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema(
  {
    questionnaire_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Questionnaire',
      required: true
    },
    question: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    is_required: {
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

const Question = mongoose.model('Question', questionSchema)
export default Question