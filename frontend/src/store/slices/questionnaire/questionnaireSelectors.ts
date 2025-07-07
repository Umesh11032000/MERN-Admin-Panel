import { type RootState } from "@/store";
import type { QuestionnaireState } from "./questionnaireTypes";

export const selectQuestionnaires = (state: RootState) =>
  (state.questionnaire as QuestionnaireState).questionnaires;

export const selectQuestionnaireLoading = (state: RootState) =>
  (state.questionnaire as QuestionnaireState).loading;

export const selectQuestionnaireError = (state: RootState) =>
  (state.questionnaire as QuestionnaireState).error;

export const selectQuestionnaireSuccess = (state: RootState) =>
  (state.questionnaire as QuestionnaireState).success;

export const selectQuestionnaire = (state: RootState) =>
  (state.questionnaire as QuestionnaireState).questionnaire;