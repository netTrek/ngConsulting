import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'msg-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {

  items: number[] = [ 1,
                      2,
                      3,
                      4,
                      5
  ];

  constructor ( public $user: UserService ) {
  }

  ngOnInit () {
  }

  delItem () {
    this.items.pop();
  }
}
