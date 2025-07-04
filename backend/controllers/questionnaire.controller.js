import Questionnaire from '../models/questionnaire.model.js'
import Question from '../models/question.model.js'
import Option from '../models/option.model.js'
import mongoose from 'mongoose'

export const createQuestionnaire = async (req, res) => {
  try {

    // sleep for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const { title, description, questions } = req.body

    const questionnaire = await Questionnaire.create({
      title,
      description,
      created_by: req.user._id,
      is_published: false
    })

    for (const questionData of questions) {
      const options = questionData.options

      const createdQuestion = await Question.create({
        ...questionData,
        questionnaire_id: questionnaire._id
      })

      for (const option of options) {
        await Option.create({
          ...option,
          question_id: createdQuestion._id,
          questionnaire_id: questionnaire._id
        })
      }
    }

    res.status(200).json({
      success: true,
      message: 'Questionnaire created successfully',
      data: {
        questionnaire
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

export const getAllQuestionnaires = async (req, res) => {
  try {
    let { page, limit, search } = req.query
    page = Number(page) || 1
    limit = Number(limit) || 10
    search = search || ''

    const startIndex = (page - 1) * limit

    const total = await Questionnaire.countDocuments({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ]
    })

    const questionnaires = await Questionnaire.find({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ],
    })
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit)

    res.status(200).json({
      success: true,
      message: 'Questionnaires fetched successfully',
      data: {
        questionnaires,
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

export const getQuestionnaireById = async (req, res) => {
  try {
    const questionnaireId = new mongoose.Types.ObjectId(req.params.id)

    const questionnaire = await Questionnaire.aggregate([
      { $match: { _id: questionnaireId } },
      {
        $lookup: {
          from: 'questions',
          localField: '_id',
          foreignField: 'questionnaire_id',
          as: 'questions'
        }
      },
      { $unwind: { path: '$questions', preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: 'options',
          localField: 'questions._id',
          foreignField: 'question_id',
          as: 'questions.options'
        }
      },
      {
        $group: {
          _id: '$_id',
          title: { $first: '$title' },
          description: { $first: '$description' },
          is_published: { $first: '$is_published' },
          created_by: { $first: '$created_by' },
          createdAt: { $first: '$createdAt' },
          updatedAt: { $first: '$updatedAt' },
          questions: { $push: '$questions' }
        }
      }
    ])

    if (!questionnaire) {
      return res.status(404).json({
        success: false,
        message: 'Questionnaire not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Questionnaires fetched successfully',
      data: {
        questionnaire
      }
    })
  } catch (error) {}
}

export const updateQuestionnaire = async (req, res) => {}

export const deleteQuestionnaire = async (req, res) => {}
