import { ExistingProvider, FactoryProvider, InjectionToken, NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

export const MSG_TOKEN: InjectionToken<string> = new InjectionToken<string>( 'msgToken' );

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UsersComponent, UserComponent],
  exports: [UsersComponent, UserComponent],
  providers: [UserService,
  <ValueProvider>{ provide: MSG_TOKEN, useValue: 'msg AG'},
  <ValueProvider>{ provide: 'endpointProtocol', useValue: 'http'},
  <ValueProvider>{ provide: 'endpointUrl', useValue: 'netTrek.de'},
  <ValueProvider>{ provide: 'netTrek', useValue: 'netTrek GmbH'},
  <ExistingProvider>{ provide: 'companies', useExisting: MSG_TOKEN, multi: true },
  <ExistingProvider>{ provide: 'companies', useExisting: 'netTrek', multi: true },
  <FactoryProvider>{ provide: 'endpoint', useFactory: ( protocol: string, url: string ) => {
    return `${protocol}://${url}`;
    }, deps: ['endpointProtocol', 'endpointUrl']}
  ]
})
export class UsersModule { }
