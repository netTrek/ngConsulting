import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationEnd } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UsersComponent } from './users/users/users.component';
// import { ContactComponent } from './contact/contact/contact.component';
// import { ContactMapComponent } from './contact/contact-map/contact-map.component';
// import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserResolverService } from './users/user-resolver.service';
import { UserGuard } from './users/user.guard';
import { filter } from 'rxjs/operators';
import { ContactModule } from './contact/contact.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: { key: 'saban' } },
  {
    path       : 'users', component: UsersComponent,
    canActivate: [ UserGuard ],
    resolve    : {
      userList: UserResolverService
    }
  },
  { path: 'user/:userId', component: UserDetailComponent },
  {
    path    : 'contact',
    loadChildren: './contact/contact.module#ContactModule'
    // component: ContactComponent,
    // children: [
    //   { path: '', pathMatch: 'full', redirectTo: 'form' },
    //   { path: 'form', component: ContactFormComponent },
    //   { path: 'map', component: ContactMapComponent }
    // ]
  },
  { path: '**', redirectTo: 'home' }

];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
  constructor ( router: Router ) {
    router.events.pipe (
      filter ( event => {
        return event instanceof NavigationEnd;
      } )
    ).
    subscribe ( event => {
      console.log ( event );
    } );
  }
}
