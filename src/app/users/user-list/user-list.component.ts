import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MyClass } from '../users.module';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  constructor ( private user$: UserService, @Inject(MyClass) myClass: MyClass, @Inject('userService') userService: any ) {
    console.log ( myClass, userService );
  }

  ngOnInit () {
    this.user$.name = 'geändert aus der Liste';
  }

}
