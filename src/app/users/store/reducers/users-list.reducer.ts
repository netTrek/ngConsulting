import { UsersListState } from '../model/users-list.state';
import { LOAD_USERS_LIST, LOAD_USERS_LIST_FAIL, LOAD_USERS_LIST_SUCCESS, UsersListAction } from '../actions/users-list.action';

export const initState: UsersListState = {
  data   : [
    { id: 1, name: 'saban', city: 'dorsten' },
    { id: 2, name: 'frank', city: 'dorsten' },
    { id: 4, name: 'peter', city: 'dorsten' }
  ],
  loaded : false,
  loading: false
};

export function usersListReducer ( state: UsersListState = initState, action: UsersListAction ): UsersListState {

  switch ( action.type ) {
    case LOAD_USERS_LIST: {
      return { ...state, loading: true };
    }
    case LOAD_USERS_LIST_SUCCESS: {
      return { ...state, loading: false, loaded: true };
    }
    case LOAD_USERS_LIST_FAIL: {
      return { ...state, loading: false, loaded: false };
    }
  }

  return state;
}

export const getUsersList        = ( state: UsersListState ) => state.data;
export const getUsersListLoading = ( state: UsersListState ) => state.loading;
export const getUsersListLoaded  = ( state: UsersListState ) => state.loaded;
