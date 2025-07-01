import { type RootState } from "@/store";
import type { AuthState } from "./authTypes";

export const isAuthenticated = (state: RootState): boolean =>
  (state.auth as AuthState).isAuthenticated;
export const selectUser = (state: RootState) => (state.auth as AuthState).user;