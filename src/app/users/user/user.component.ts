import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'msg-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ],
  providers  : [ UserService ]
} )
export class UserComponent implements OnInit {

  constructor ( public $user: UserService ) {
  }

  ngOnInit () {
  }

}
