import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserItemComponent } from '../user-item/user-item.component';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ViewChildren ( UserItemComponent )
  items: QueryList<UserItemComponent>;

  @ViewChild ( 'line' )
  line: ElementRef;

  constructor ( private render: Renderer2 ) {
  }

  ngAfterViewInit (): void {
    console.log ( this.header );
    console.log ( this.items.toArray () );
    console.log ( this.line );

    this.render.setStyle( this.line.nativeElement, 'border-color', 'red' );
    this.render.addClass( this.line.nativeElement, 'saban' );
  }

  ngOnInit () {
  }

}
