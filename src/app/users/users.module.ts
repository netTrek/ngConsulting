import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UsersComponent, UserComponent],
  exports: [UsersComponent, UserComponent],
  providers: [UserService,
  <ValueProvider>{ provide: 'msg', useValue: 'defined in usersModule', multi: true}]
})
export class UsersModule { }
