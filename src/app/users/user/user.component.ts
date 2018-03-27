import { Component, Inject, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MyClass } from '../../app.module';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  path: string;

  constructor( public $user: UserService,
               @Inject('myClass') myClass: MyClass[],
               private route: ActivatedRoute) {
    console.log ( myClass );
  }

  ngOnInit() {
    this.route.url.subscribe( url => {
      this.path = url[0].path;
      // console.log ( top.location.href );
    } );
  }

  changeUserName () {
    this.$user.userName = 'Hello World';
  }
}
