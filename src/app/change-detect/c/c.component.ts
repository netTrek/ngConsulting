import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LogClass } from '../log-class';
import { UserService } from '../../users/user.service';

let count = 0;

@Component ( {
  selector: 'msg-c',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <p>
      c works {{val}} {{$user.name}} <!--{{$user.name$ | async}}-->!
    </p>
    <button (click)="$user.name = 'toll'">$user</button>
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

  constructor ( public $user: UserService ) {
    super ( `c${++count}` , true, '\t\t');
    setInterval(() => ++this.val, 500 );
  }

}
