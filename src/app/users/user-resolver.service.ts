import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class UserResolverService implements Resolve<User[]> {

  constructor( private $user: UserService ) { }

  resolve ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User[]> | Promise<User[]> | User[] {
    return this.$user.getUsers();
    // return [
    //   {
    //     'id': 1,
    //     'name': 'saban',
    //     'city': 'Dorsten'
    //   },
    //   {
    //     'id': 2,
    //     'name': 'frank',
    //     'city': 'Dorsten'
    //   }
    // ];
  }

}
