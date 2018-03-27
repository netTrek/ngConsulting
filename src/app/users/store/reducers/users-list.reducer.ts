import { UsersListState } from '../model/users-list.state';
import { LOAD_USERS_LIST, LOAD_USERS_LIST_FAIL, LOAD_USERS_LIST_SUCCESS, UsersListAction } from '../actions/users-list.action';
import { User } from '../model/user';

export const initState: UsersListState = {
  // data   : [],
  entities: {},
  loaded  : false,
  loading : false
};

export function usersListReducer ( state: UsersListState = initState, action: UsersListAction ): UsersListState {

  switch ( action.type ) {
    case LOAD_USERS_LIST: {
      return { ...state, loading: true };
    }
    case LOAD_USERS_LIST_SUCCESS: {

      const data                             = action.payload; // umwandel in entities für performance
      const entities: { [id: number]: User } = data.reduce (
        ( _entities: { [id: number]: User }, user ) => {
          return {
            ..._entities,
            [ user.id ]: user
          };
        },
        { ...state.entities } );
      return { ...state, loading: false, loaded: true, entities };
    }
    case LOAD_USERS_LIST_FAIL: {
      return { ...state, loading: false, loaded: false };
    }
  }

  return state;
}

export const getUsersListEntities = ( state: UsersListState ) => state.entities;
export const getUsersListLoading  = ( state: UsersListState ) => state.loading;
export const getUsersListLoaded   = ( state: UsersListState ) => state.loaded;
