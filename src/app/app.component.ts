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

  navInfo: {
    label: string,
    path: string | any[]
  }[] = [
    { label: 'home', path: ['home'] },
    { label: 'user', path: ['user', this.crrUserId] },
    { label: 'users', path: ['users'] },
    { label: 'contact', path: ['contact'] },
    { label: 'content child', path: ['contentChild'] }
  ];

  constructor ( public $user: UserService ) {
    // console.log ( environment.endpoint );
  }
}
