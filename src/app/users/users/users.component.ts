import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { MyClass } from '../../app.module';
import { MSG_TOKEN } from '../users.module';

@Component({
  selector: 'msg-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor( @Inject( MSG_TOKEN ) msgValue: string,
               @Inject('companies') companies: any[],
               @Inject('endpoint') endpoint: string,
               @Inject('condition') classInstance: MyClass) {
    console.log ( classInstance );
  }

  ngOnInit() {
  }

}
