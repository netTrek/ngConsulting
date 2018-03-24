import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LogClass } from '../log-class';
import { setInterval } from 'timers';
import { UserService } from '../../users/user.service';

let count = 0;

@Component({
  selector: 'msg-a',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      a works {{aVal}}!
    </p>
    <msg-b [fromA]="aVal" [name]="$user.name"></msg-b> <!--   $ | async   -->
    <button (click)="chgVal()">change aVal</button><button (click)="1+1">1+1</button>
  `,
  styles: [
    `:host {
      display: inline-block;
      background-color: red;
      width: 40%;
    }`
  ]
})
export class AComponent extends LogClass {

  val = 1;
  aVal = 'aVal';

  constructor ( public $user: UserService ) {
    super ( `a${++count}` );
    let c = count;
    setInterval( () => {
      if ( this.aVal.indexOf('aVal') !== -1 ) {
        this.aVal = 'aVal' + (++c);
      }
    }, 500 );
  }

  chgVal () {
    this.aVal = `changed ${++this.val}`;
    console.log ( this.aVal );
  }
}
