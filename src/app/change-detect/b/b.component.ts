import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { LogClass } from '../log-class';

let count = 0;

@Component({
  selector: 'msg-b',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <p>
      b works - {{fromA}} -  {{name}}!
    </p>
    <msg-c></msg-c><button (click)="1+1">1+1</button>
  `,
  styles: [
    `:host {
      display: block;
      background-color: green;
      margin: 5px;
    }`
  ]
})
export class BComponent extends LogClass {

  @Input()
  fromA: any;

  @Input()
  name: string;

  constructor () {
    super ( `b${++count}`, true, '\t' );
  }

}
