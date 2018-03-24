import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { LogClass } from '../log-class';

@Component({
  selector: 'msg-b',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <p>
      b works - {{fromA}}!
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

  constructor () {
    super ( 'b', true, '\t' );
  }

}
