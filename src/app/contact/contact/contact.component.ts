import { Component, Host, Injector, OnInit } from '@angular/core';
import { UserService } from '../../users/user.service';

@Component({
  selector: 'msg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( $user: UserService, injector: Injector  ) {
  }

  ngOnInit() {
  }

}
