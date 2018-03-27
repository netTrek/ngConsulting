import { Component, Inject, Input, OnInit, SkipSelf } from '@angular/core';
import { UserService } from '../user.service';
import { MyClass } from '../../app.module';
import { User } from '../user';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor( public $user: UserService,
               @Inject('myClass') myClass: MyClass[]) {
    console.log ( myClass );
  }

  ngOnInit() {
  }

  changeUserName () {
    this.$user.userName = 'Hello World';
  }
}
