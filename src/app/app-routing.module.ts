import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  { path      : '',  pathMatch : 'full', redirectTo: 'home' },
  { path     : 'home', component: HomeComponent },
  { path     : 'users', component: UsersComponent },
  { path      : '**', redirectTo: 'home' }

];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
