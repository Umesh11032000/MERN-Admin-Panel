import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/api/axios";

// FETCH ALL
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async ({ page, limit }: { page: number; limit: number }, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/users", {
        page,
        limit,
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);

// CREATE
export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData: Partial<User>, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/users/create", userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create user"
      );
    }
  }
);

// UPDATE
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (
    { id, data }: { id: number; data: Partial<User> },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.put(`/auth/users/${id}`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update user"
      );
    }
  }
);

// DELETE
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id: number, { rejectWithValue }) => {
    try {
      await API.delete(`/auth/users/${id}`);
      return id;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete user"
      );
    }
  }
);
