import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UsersComponent } from './users/users/users.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

const routes: Routes = [
  { path      : '',  pathMatch : 'full', redirectTo: 'home' },
  { path     : 'home', component: HomeComponent },
  { path     : 'users', component: UsersComponent },
  { path     : 'contact', component: ContactComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'form' },
      { path: 'form', component: ContactFormComponent },
      { path: 'map', component: ContactMapComponent }
    ]
  },
  { path      : '**', redirectTo: 'home' }

];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
