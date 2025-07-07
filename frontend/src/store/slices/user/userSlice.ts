import { createSlice } from "@reduxjs/toolkit";
import { type UserState } from "./userTypes";
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  fetchUserById,
} from "./userThunks";

const initialState: UserState = {
  user: null,
  users: [],
  total: 0,
  page: 1,
  limit: 10,
  loading: false,
  error: null,
  success: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.loading = false;
        state.error = null;
        state.total = action.payload.total;
        state.page = action.payload.currentPage;
        state.limit = action.payload.limit;
        state.success = typeof action.payload === 'object' && action.payload !== null && 'message' in action.payload
          ? (action.payload as { message: string }).message
          : null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Create User
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.loading = false;
        state.error = null;
        state.success = typeof action.payload === 'object' && action.payload !== null && 'message' in action.payload
          ? (action.payload as { message: string }).message
          : null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch User By Id
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.data.user;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.user = null;
        state.success = null;
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = null;
        state.success = action.payload.message;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = typeof action.payload === 'object' && action.payload !== null && 'message' in action.payload
          ? (action.payload as { message: string }).message
          : null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export default userSlice.reducer;
