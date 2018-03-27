import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { MyClass } from '../../app.module';
import { MSG_TOKEN } from '../users.module';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component ( {
  selector   : 'msg-users',
  templateUrl: './users.component.html',
  styleUrls  : [ './users.component.scss' ],
  providers  : [ UserService ]
} )
export class UsersComponent implements OnInit {

  users: User[];

  constructor ( @Inject ( MSG_TOKEN ) msgValue: string,
                @Inject ( 'companies' ) companies: any[],
                @Inject ( 'endpoint' ) endpoint: string,
                @Inject ( 'condition' ) classInstance: MyClass,
                private router: Router,
                private route: ActivatedRoute ) {
    console.log ( classInstance );
  }

  ngOnInit () {

    this.route.data.subscribe ( next => {
      this.users = next.userList;
    } );

  }

  goHome () {
    this.router.navigate ( [ 'home' ] );
  }
}
