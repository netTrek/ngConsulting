import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent],
  providers: [UserService,
              <ValueProvider>{ provide: 'bezeichner', useValue: 'initial wert', multi: true}],
  exports: [UserComponent, UserListComponent]
})
export class UsersModule { }
