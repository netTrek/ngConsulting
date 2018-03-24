import { Component, Input, Output, OnChanges, OnInit, SimpleChanges, EventEmitter, HostListener } from '@angular/core';

@Component ( {
  selector   : 'msg-user-item',
  templateUrl: './user-item.component.html',
  styleUrls  : [ './user-item.component.scss' ]
} )
export class UserItemComponent implements OnInit, OnChanges {

  @Input ()
  name: string;

  @Output ()
  selectedName: EventEmitter<string> = new EventEmitter<string> ();

  constructor () {
  }

  ngOnInit () {
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    // console.log ( changes );
  }

  @HostListener('click')
  private click () {
    this.selectedName.emit( this.name );
  }

}
