import { ClassProvider, ExistingProvider, FactoryProvider, forwardRef, InjectionToken, NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

export class MyClass {
  name = 'MyClass';
}

export const FACTORY_VALUE: InjectionToken<string> = new InjectionToken('fact');

@NgModule ( {
  imports     : [
    CommonModule
  ],
  declarations: [ UserComponent,
                  UserListComponent
  ],
  providers   : [
    UserService,
    <ValueProvider>{ provide: 'bezeichner', useValue: 'initial wert', multi: true },
    <ClassProvider>{ provide: MyClass, useClass: MyClass },
    <ExistingProvider>{ provide: 'userService', useExisting: UserService  },
    <FactoryProvider>{ provide: FACTORY_VALUE, useFactory: ( werte: string[]) => {
      return werte[0];
      }, deps: ['bezeichner'] }
  ],
  exports     : [ UserComponent,
                  UserListComponent
  ]
} )
export class UsersModule {
}
