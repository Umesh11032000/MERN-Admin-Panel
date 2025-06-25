import API from "@/api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
  success: null,
};

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.success = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginToSystem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginToSystem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isAuthenticated = true;
        state.error = null;
        state.success = "Welcome back!" + " " + action.payload.data.user.name;
        localStorage.setItem("token", action.payload.data.token);
        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
      })
      .addCase(loginToSystem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerToSystem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerToSystem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isAuthenticated = true;
        state.error = null;
        state.success = "Registration successful! Welcome " + action.payload.data.user.name;
        localStorage.setItem("token", action.payload.data.token);
        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
      })
      .addCase(registerToSystem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
