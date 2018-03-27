import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../model/users.state';
import {
  getUsersList as _getUserList,
  getUsersListLoading as _getUsersListLoading,
  getUsersListLoaded as _getUsersListLoaded,
  usersListReducer
} from './users-list.reducer';
import { StoreFeatureConst } from '../store-feature-const.enum';

export const reducers: ActionReducerMap<UsersState> = {
  usersList: usersListReducer
};

export const getUsersState = createFeatureSelector<UsersState> ( StoreFeatureConst.name );

/**
 * SELECTORS
 */

// hole dir den users Store s.o. und aus diesem die userList-State
export const getUsersListState   = createSelector ( getUsersState, ( state: UsersState ) => state.usersList );
// hole dir userList-State s.o. und aus diesem die userList
export const getUsersList        = createSelector ( getUsersListState, _getUserList );
// hole dir userList-State s.o. und aus diesem die loading status
export const getUsersListLoading = createSelector ( getUsersListState, _getUsersListLoading );
// hole dir userList-State s.o. und aus diesem die loaded status
export const getUsersListLoaded  = createSelector ( getUsersListState, _getUsersListLoaded );
