import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent],
  providers: [UserService],
  exports: [UserComponent]
})
export class UsersModule { }
