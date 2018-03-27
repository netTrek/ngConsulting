import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserResolverService implements Resolve<User[]> {

  constructor() { }

  resolve ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User[]> | Promise<User[]> | User[] {
    return [
      {
        'id': 1,
        'name': 'saban',
        'city': 'Dorsten'
      },
      {
        'id': 2,
        'name': 'frank',
        'city': 'Dorsten'
      }
    ];
  }

}
