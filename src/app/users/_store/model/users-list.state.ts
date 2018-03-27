import { User } from './user';

export interface UsersListState {
  // data: User[];
  entities: { [id: number]: User };
  loaded: boolean;
  loading: boolean;
}
