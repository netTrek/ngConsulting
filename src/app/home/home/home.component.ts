import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users/user.service';

@Component({
  selector: 'msg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public $user: UserService ) { }

  ngOnInit() {
  }

}
