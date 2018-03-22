import { Component, Inject, OnInit, Optional } from '@angular/core';
import { UserService } from '../user.service';
import { FACTORY_VALUE, MyClass } from '../users.module';
import { UserComponent } from '../user/user.component';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  constructor ( private user$: UserService, @Inject(MyClass) myClass: MyClass,
                @Inject( FACTORY_VALUE ) fact: string, @Optional() @Inject('fact') wert: string = 'nicht provided',
                userComponent: UserComponent ) {
    console.log ( myClass, fact, wert, userComponent );
  }

  ngOnInit () {
    this.user$.name = 'geändert aus der Liste';
  }

}
