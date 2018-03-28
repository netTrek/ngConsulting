import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserItemComponent } from '../user-item/user-item.component';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ContentChildren ( UserItemComponent )
  items: QueryList<UserItemComponent>;

  constructor ( ) {
    console.log ( 'header im constructor', this.header );
  }

  showChildInfo ( next?: any ) {
    console.log ( this.items.toArray() );
  }

  ngAfterContentInit (): void {
    console.log ( 'header im ngAfterContentInit', this.header );
    this.showChildInfo();
    this.items.changes.subscribe( this.showChildInfo.bind(this) );
  }

  ngOnInit () {
  }

}
