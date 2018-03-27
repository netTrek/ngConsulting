import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { UserService } from './users/user.service';

@Component ( {
  selector   : 'msg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title = 'msg';

  crrUserId = 1;

  constructor ( public $user: UserService ) {
    // console.log ( environment.endpoint );
  }
}
