import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LogClass } from '../log-class';

@Component ( {
  selector: 'msg-c',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <p>
      c works {{val}}!
    </p>
    <button (click)="1+1">1+1</button>
  `,
  styles: [
    `:host {
      display: block;
      background-color: blue;
      margin: 5px;
    }`
  ]
} )
export class CComponent extends LogClass {

  val = 1;

  constructor () {
    super ( 'c' , true, '\t\t');
    setInterval(() => ++this.val, 500 );
  }

}
