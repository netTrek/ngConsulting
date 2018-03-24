import {
  Component,
  OnInit
} from '@angular/core';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  role = 'admin';

  items: string[] = [ 'saban',
                      'peter',
                      'franz'
  ];

  constructor () {}

  ngOnInit () {
  }

  changeFirstItem () {
    this.items[ 0 ] = this.items[ 0 ] = 'angular';
  }

  onNameSelected ( name: string ) {
    console.log ( 'selected Usr', name );
  }

  chgRole () {
    this.role = this.role === 'admin' ? 'user' : 'admin';
  }

}
