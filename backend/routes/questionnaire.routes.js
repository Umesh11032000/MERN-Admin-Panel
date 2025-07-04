import { Router } from 'express'
import {
  createQuestionnaire,
  getQuestionnaireById,
  getAllQuestionnaires
} from '../controllers/questionnaire.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = Router()

router.post('/', authMiddleware, createQuestionnaire)
router.get('/', authMiddleware, getAllQuestionnaires)
router.get('/:id', authMiddleware, getQuestionnaireById)

export default router
