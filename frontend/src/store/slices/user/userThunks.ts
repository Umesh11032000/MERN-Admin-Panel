import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/api/axios";

// FETCH ALL
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (
    { page, limit, search }: { page: number; limit: number; search: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.get("/users", {
        params: {
          page,
          limit,
          search,
        },
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
      const response = await API.post("/users", userData);
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
    { id, data }: { id: string; data: Partial<User> },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.put(`/users/${id}`, data);
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
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/users/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete user"
      );
    }
  }
);

// FETCH SINGLE USER BY ID
export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id: string | number, { rejectWithValue }) => {
    try {
      const response = await API.get(`/users/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user"
      );
    }
  }
);
