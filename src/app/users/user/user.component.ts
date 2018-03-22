import { Component, Host, Inject, OnInit, SkipSelf, ValueProvider } from '@angular/core';
import { UserService } from '../user.service';

let counter = 0;

@Component ( {
  selector   : 'msg-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ],
  providers  : [ UserService ]
} )
export class UserComponent implements OnInit {

  name = `userComp ${++counter}`;

  constructor ( @SkipSelf() public $user: UserService, @Inject('bezeichner') val: string[] ) {
    console.log ( val );
  }

  ngOnInit () {
  }

}
