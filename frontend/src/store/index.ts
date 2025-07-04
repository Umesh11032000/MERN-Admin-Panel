import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/store/slices/auth/authSlice';
import userReducer from './slices/user/userSlice';
import questionnaireReducer from './slices/questionnaire/questionnaireSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    questionnaire: questionnaireReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch