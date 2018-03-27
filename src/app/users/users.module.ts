import { ExistingProvider, FactoryProvider, NgModule, ValueProvider } from '@angular/core';
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
  <ValueProvider>{ provide: 'msg', useValue: 'msg AG'},
  <ValueProvider>{ provide: 'endpointProtocol', useValue: 'http'},
  <ValueProvider>{ provide: 'endpointUrl', useValue: 'netTrek.de'},
  <ValueProvider>{ provide: 'netTrek', useValue: 'netTrek GmbH'},
  <ExistingProvider>{ provide: 'companies', useExisting: 'msg', multi: true },
  <ExistingProvider>{ provide: 'companies', useExisting: 'netTrek', multi: true },
  <FactoryProvider>{ provide: 'endpoint', useFactory: ( protocol: string, url: string ) => {
    return `${protocol}://${url}`;
    }, deps: ['endpointProtocol', 'endpointUrl']}
  ]
})
export class UsersModule { }
