import { createSlice } from "@reduxjs/toolkit";
import { type UserState } from "./userTypes";
import { fetchUsers, createUser, updateUser, deleteUser } from "./userThunks";

const initialState: UserState = {
  users: [],
  total: 0,
  page: 1,
  limit: 10,
  loading: false,
  error: null,
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

        console.log(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Create User
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      // Update User
      .addCase(updateUser.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.users.findIndex((user) => String(user._id) === String(updated._id));
        if (index !== -1) {
          state.users[index] = updated;
        }
      })

      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => String(user._id) !== String(action.payload)
        );
      });
  },
});

export default userSlice.reducer;
