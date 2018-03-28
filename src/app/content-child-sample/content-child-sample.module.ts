import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenChildComponent } from './conten-child/conten-child.component';
import { RouterModule } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [{
      path: '', component: ContenChildComponent
    }] )
  ],
  declarations: [ContenChildComponent, UserHeaderComponent, UserListComponent, UserItemComponent]
})
export class ContentChildSampleModule { }
