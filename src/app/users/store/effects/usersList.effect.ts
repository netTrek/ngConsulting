/**
 * File created by suenlue on 27.03.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LOAD_USERS_LIST, LoadUsersListFail, LoadUsersListSuccess } from '../actions/users-list.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../user.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable ()
export class UsersListEffect {

  @Effect ()  // optional mit option { dispatch: false} damit kein fertig/fail Event gefeuert wird
  loadUsersList$: Observable<LoadUsersListSuccess | LoadUsersListFail>
    = this.actions$.ofType ( LOAD_USERS_LIST )
          .pipe (
            switchMap ( () => {
              return this.$user.getUsers ()
                         .pipe (
                           map ( usersList => new LoadUsersListSuccess ( usersList ) ),
                           catchError( err => of ( new LoadUsersListFail(err) ) )
                         );
            } )
          );

  constructor ( private actions$: Actions, private $user: UserService ) {
  }

}
