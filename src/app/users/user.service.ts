import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from './_store/model/user';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

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

  constructor ( private http: HttpClient ) {
    // console.log('create user service', name);
  }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]> ( 'api/users' ).pipe(
      catchError( err => Observable.throw(err.json() ))
    );
  }

}
