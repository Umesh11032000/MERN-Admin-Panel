import { type RootState } from "@/store";
import type { UserState } from "./userTypes";

export const selectUsers = (state: RootState) => (state.user as UserState).users;
export const selectUserLoading = (state: RootState) => (state.user as UserState).loading;
export const selectUserError = (state: RootState) => (state.user as UserState).error;
