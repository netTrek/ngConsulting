import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  constructor ( ) {
    console.log ( 'header im constructor', this.header );
  }

  ngAfterContentInit (): void {
    console.log ( 'header im ngAfterContentInit', this.header );
  }

  ngOnInit () {
  }

}
