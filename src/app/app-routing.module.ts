import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'user', loadChildren: './users/users.module#UsersModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
