export interface UserState {
  user: User | null;
  users: User[];
  total: number;
  page: number;
  limit: number;
  loading: boolean;
  error: string | null;
  success: string | null;
}
