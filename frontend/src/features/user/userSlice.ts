import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/api/axios";

export interface User {
  id: number;
  name: string;
  email: string;
}

const initialState: { users: User[]; loading: boolean; error: string | null } =
  {
    users: [],
    loading: false,
    error: null,
  };

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/users");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions, reducer: userReducer } = userSlice;
export const userActions = userSlice.actions;
export default userReducer;
