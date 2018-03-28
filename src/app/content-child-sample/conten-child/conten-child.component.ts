import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-conten-child',
  templateUrl: './conten-child.component.html',
  styleUrls  : [ './conten-child.component.scss' ]
} )
export class ContenChildComponent implements OnInit {

  items: number[] = [ 1, 2, 3, 4, 5 ];

  constructor () {
  }
  removeLast () {
    this.items.pop();
  }

  ngOnInit () {
  }

}
