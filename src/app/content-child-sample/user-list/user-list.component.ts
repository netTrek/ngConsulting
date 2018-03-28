import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, Renderer2,
  ViewChild
} from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserItemComponent } from '../user-item/user-item.component';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ContentChildren ( UserItemComponent )
  items: QueryList<UserItemComponent>;

  @ViewChild ( 'line' )
  line: ElementRef;

  constructor ( private render: Renderer2 ) {
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

  ngAfterViewInit (): void {
    console.log ( this.line  );
    this.render.setStyle( this.line.nativeElement, 'border-color', 'blue' );
  }

  ngOnInit () {
  }

}
