/**
 * File created by suenlue on 27.03.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { Action } from '@ngrx/store';
import { User } from '../model/user';

export const LOAD_USERS_LIST         = '[Users] LOAD UsersList';
export const LOAD_USERS_LIST_SUCCESS = '[Users] LOAD UsersList Success';
export const LOAD_USERS_LIST_FAIL    = '[Users] LOAD UsersList Fail';

export class LoadUsersList implements Action {
  readonly type = LOAD_USERS_LIST;
}

export class LoadUsersListSuccess implements Action {
  readonly type = LOAD_USERS_LIST_SUCCESS;
  constructor ( public payload: User[] ) {}
}

export class LoadUsersListFail implements Action {
  readonly type = LOAD_USERS_LIST_FAIL;
  constructor ( public payload: any ) {}
}

export type UsersListAction = LoadUsersList | LoadUsersListSuccess | LoadUsersListFail;
