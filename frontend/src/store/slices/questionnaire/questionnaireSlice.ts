import { createSlice } from "@reduxjs/toolkit";
import type { QuestionnaireState } from "./questionnaireTypes";
import {
  createQuestionnaire,
  fetchQuestionnaireById,
  fetchQuestionnaires,
} from "./questionnaireThunks";

const initialState: QuestionnaireState = {
  questionnaires: [],
  questionnaire: null,
  total: 0,
  page: 1,
  limit: 10,
  loading: false,
  error: null,
  success: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuestionnaire.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuestionnaire.fulfilled, (state, action) => {
        state.loading = false;
        state.questionnaires.push(action.payload);
        state.error = null;
        state.success = action.payload.message;
      })
      .addCase(createQuestionnaire.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchQuestionnaires.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestionnaires.fulfilled, (state, action) => {
        state.questionnaires = action.payload.questionnaires;
        state.loading = false;
        state.error = null;
        state.total = action.payload.total;
        state.page = action.payload.currentPage;
        state.limit = action.payload.limit;
        state.success = action.payload.message;
      })
      .addCase(fetchQuestionnaires.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch Questionnaire By Id
      .addCase(fetchQuestionnaireById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestionnaireById.fulfilled, (state, action) => {
        console.log(action.payload.data.questionnaire);
        state.questionnaire = action.payload.data.questionnaire;
        state.loading = false;
        state.error = null;
        state.success = action.payload.message;
      })
      .addCase(fetchQuestionnaireById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default questionnaireSlice.reducer;
