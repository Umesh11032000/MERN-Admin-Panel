export interface UserState {
  users: User[];
  total: number;
  page: number;
  limit: number;
  loading: boolean;
  error: string | null;
}
