import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LogClass } from '../log-class';

@Component({
  selector: 'msg-a',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      a works {{aVal}}!
    </p>
    <msg-b [fromA]="aVal"></msg-b><button (click)="chgVal()">change aVal</button><button (click)="1+1">1+1</button>
  `,
  styles: [
    `:host {
      display: block;
      background-color: red;
    }`
  ]
})
export class AComponent extends LogClass {

  val = 1;
  aVal = 'aVal';

  constructor () {
    super ( 'a' );
  }

  chgVal () {
    this.aVal = `changed ${++this.val}`;
    console.log ( this.aVal );
  }
}
