import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [ {path: '', component: UserComponent} ] )
  ],
  declarations: [UserComponent, UserListComponent],
  providers: [],
  exports: [UserComponent, UserListComponent]
})
export class UsersModule { }
