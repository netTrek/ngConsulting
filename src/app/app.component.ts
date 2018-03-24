import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { UserService } from './users/user.service';
import { LogClass } from './change-detect/log-class';

@Component ( {
  selector       : 'msg-root',
  templateUrl    : './app.component.html',
  styleUrls      : [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AppComponent extends LogClass {
  title = 'msg';
  val   = 1;

  constructor ( public $user: UserService, cdr: ChangeDetectorRef, ngZone: NgZone ) {
    super ( 'msg-root', false );

    // ngZone.runOutsideAngular ( () => {
    //   setInterval ( () => {
    //     console.log ( ++ this.val );
    //     cdr.detectChanges();
    //   } , 1000 );
    // } );

    // setInterval ( () => {
    //   console.log ( ++ this.val );
    //   // cdr.detectChanges();
    // }, 500 );

    // setInterval ( () => {
    //   console.log ( ++ this.val );
    //   // cdr.detectChanges();
    //   if ( this.val === 2 ) {
    //     console.log ( 'detach' );
    //     cdr.detach();
    //   }
    //   if ( this.val === 5 ) {
    //     console.log ( 'reattach' );
    //     cdr.reattach();
    //   }
    // }, 1000 );

  }

  setName () {
    this.$user.name = 'Saban Ünlü';
  }
}
