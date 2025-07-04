import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    is_published: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Questionnaire = mongoose.model('Questionnaire', questionSchema)
export default Questionnaire