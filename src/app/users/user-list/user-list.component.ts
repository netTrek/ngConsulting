import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  constructor ( private user$: UserService ) {

  }

  ngOnInit () {
    this.user$.name = 'geändert aus der Liste';
  }

}
