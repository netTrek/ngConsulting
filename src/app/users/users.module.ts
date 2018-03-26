import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [UserService]
})
export class UsersModule { }
