import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'msg-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor( @Inject('msg') msgValue: string ) {
    console.log ( msgValue );
  }

  ngOnInit() {
  }

}
