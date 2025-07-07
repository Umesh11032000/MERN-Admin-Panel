import type { Questionnaire } from "@/types/questionnaire";

export interface QuestionnaireState {
  questionnaires: Questionnaire[];
  questionnaire: Questionnaire | null;
  loading: boolean;
  error: string | null;
  success: string | null;
  total: number;
  page: number;
  limit: number;
}
