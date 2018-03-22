import { Component, Inject, OnInit, ValueProvider } from '@angular/core';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'msg-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ],
  providers  : [ UserService,
                 <ValueProvider>{ provide: 'bezeichner', useValue: 'wert'}
  ]
} )
export class UserComponent implements OnInit {

  constructor ( public $user: UserService, @Inject('bezeichner') val: string ) {
    console.log ( val );
  }

  ngOnInit () {
  }

}
