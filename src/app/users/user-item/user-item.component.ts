import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'msg-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit, OnChanges {

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges ( changes: SimpleChanges ): void {
    console.log ( changes );
  }

}
