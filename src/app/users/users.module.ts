import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserHeaderDirective } from './user-header.directive';
import { UserDynamicComponent } from './user-dynamic/user-dynamic.component';
import { ForRoleDirective } from './for-role.directive';
import { ROLE } from './users.token';

@NgModule ( {
  imports        : [
    CommonModule,
    RouterModule.forChild ( [ { path: '', component: UserComponent } ] )
  ],
  declarations   : [ UserComponent,
                     UserListComponent,
                     UserItemComponent,
                     UserHeaderComponent,
                     UserHeaderDirective,
                     UserDynamicComponent,
                     ForRoleDirective
  ],
  providers      : [ <ValueProvider>{ provide: ROLE, useValue: 'admin' } ],
  exports        : [ UserComponent,
                     UserListComponent,
                     UserItemComponent,
                     UserHeaderComponent,
                     UserHeaderDirective,
                     UserDynamicComponent,
                     ForRoleDirective
  ],
  entryComponents: [ UserDynamicComponent ]
} )
export class UsersModule {
}
