import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable ()
export class UserService {

  public name$: BehaviorSubject<string> = new BehaviorSubject<string> ( 'saban' );

  get name (): string {
    return this.name$.getValue ();
  }

  set name ( value: string ) {
    if ( this.name !== value ) {
      this.name$.next ( value );
    }
  }

  constructor () {
    // console.log('create user service', name);
  }

}
