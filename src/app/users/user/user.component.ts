import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersState } from '../store/model/users.state';
import { getUsersList } from '../store/reducers/users.reducer';
import { Observable } from 'rxjs/Observable';
import { User } from '../store/model/user';
import { LoadUsersList } from '../store/actions/users-list.action';

@Component ( {
  selector   : 'msg-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {
  usersList$: Observable<User[]>;

  constructor ( private store: Store<UsersState> ) {
  }

  ngOnInit () {
    // this.store.select<any>( getUsersList ).subscribe( state => {
    //   console.log ( state );
    // });

    // holt im mpment nur den init State von usersList - im ersten schritt als Array
    this.usersList$ = this.store.select ( getUsersList );

    // hole die Daten über effects vom Server
    this.store.dispatch ( new LoadUsersList () );

  }
}
