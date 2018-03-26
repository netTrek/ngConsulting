import { Component, OnInit, SkipSelf } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'msg-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
  providers: [UserService]
})
export class DummyComponent implements OnInit {

  constructor( public $user: UserService ) { }

  ngOnInit() {
  }
  trace () {
    console.log ( this.$user );
  }


}
