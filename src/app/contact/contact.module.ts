import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../users/user.service';

@NgModule ( {
  imports     : [
    CommonModule,
    RouterModule.forChild( [{
      path: '',
      component: ContactComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'form' },
        { path: 'form', component: ContactFormComponent },
        { path: 'map', component: ContactMapComponent }
      ]
    }])
  ],
  providers: [UserService],
  declarations: [ ContactComponent,
                  ContactFormComponent,
                  ContactMapComponent
  ]
  // ],
  // exports     : [ ContactComponent,
  //                 ContactFormComponent,
  //                 ContactMapComponent
  // ]
} )
export class ContactModule {}
