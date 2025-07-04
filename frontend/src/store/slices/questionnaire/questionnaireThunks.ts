import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/api/axios";
import type { Questionnaire } from "@/types/questionnaire";

// CREATE
export const createQuestionnaire = createAsyncThunk(
  "questionnaire/createQuestionnaire",
  async (questionnaireData: Partial<Questionnaire>, { rejectWithValue }) => {
    try {
      const response = await API.post("questionnaires", questionnaireData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create questionnaire"
      );
    }
  }
);

// FETCH ALL
export const fetchQuestionnaires = createAsyncThunk(
  "questionnaire/fetchQuestionnaires",
  async (
    { page, limit, search }: { page: number; limit: number; search: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.get("/questionnaires", {
        params: {
          page,
          limit,
          search,
        },
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch questionnaires"
      );
    }
  }
);
