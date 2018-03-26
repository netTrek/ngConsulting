import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UsersComponent, UserComponent, DummyComponent],
  exports: [UsersComponent, UserComponent, DummyComponent],
  providers: [UserService]
})
export class UsersModule { }
