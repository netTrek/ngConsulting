import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { MyClass } from '../../app.module';
import { MSG_TOKEN } from '../users.module';
import { Router } from '@angular/router';

@Component({
  selector: 'msg-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  users: any[] = [
    {id: 1, name: 'saban', city: 'dorsten' },
    {id: 2, name: 'frank', city: 'dorsten' }
  ];


  constructor( @Inject( MSG_TOKEN ) msgValue: string,
               @Inject('companies') companies: any[],
               @Inject('endpoint') endpoint: string,
               @Inject('condition') classInstance: MyClass,
               private router: Router ) {
    console.log ( classInstance );
  }

  ngOnInit() {}

  goHome () {
    this.router.navigate( ['home'] );
  }
}
