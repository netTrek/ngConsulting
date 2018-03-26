import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  userName = 'Saban Ünlü';

  constructor( ) {
    console.log ( 'userService generated' );
  }

}
