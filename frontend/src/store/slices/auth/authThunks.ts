import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/api/axios";

export const loginToSystem = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/sign-in", data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || "Login failed");
    }
  }
);

export const registerToSystem = createAsyncThunk(
  "auth/register",
  async (
    data: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await API.post("/auth/sign-up", data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response.data.message || "Registration failed"
      );
    }
  }
);