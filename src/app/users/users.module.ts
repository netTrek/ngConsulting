import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [ {path: '', component: UserComponent} ] )
  ],
  declarations: [UserComponent, UserListComponent, UserItemComponent, UserHeaderComponent],
  providers: [],
  exports: [UserComponent, UserListComponent, UserItemComponent, UserHeaderComponent]
})
export class UsersModule { }
