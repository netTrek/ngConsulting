import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './view-child/view-child.component';
import { RouterModule } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [ { path: '', component: ViewChildComponent }])
  ],
  declarations: [ViewChildComponent, UserHeaderComponent, UserListComponent, UserItemComponent]
})
export class ViewChildSampleModule { }
