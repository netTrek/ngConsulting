import { User } from './user';

export interface UsersListState {
  data: User[];
  loaded: boolean;
  loading: boolean;
}
