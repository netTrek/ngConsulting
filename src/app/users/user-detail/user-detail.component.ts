import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'msg-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {


  userId: number;
  user: User;
  private subscription: Subscription;

  constructor( private route: ActivatedRoute, private router: Router,
               private $user: UserService ) { }

  ngOnDestroy (): void {
    if ( this.subscription ) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe( next => {
      this.userId = parseInt( next.get('userId'), 10 );
      // if ( isNaN( this.userId ) ) {
      //   throw new Error( 'numbers only');
      // }
      if ( isNaN( this.userId ) ) {
        this.router.navigate( ['users'] );
      } else {
        this.$user.getUserById(this.userId).subscribe( user => {
          this.user = user;
        } );
      }
    });
  }
}
