import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  userName = 'Saban Ünlü';

  constructor( private http: HttpClient ) {
    console.log ( 'userService generated' );
  }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>( '/api' );
  }

  getUserById ( userId: number ): Observable<User> {
    return this.http.get<User>( `/api/${userId}`);
  }
}
