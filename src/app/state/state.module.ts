import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule ( {
  imports     : [
    CommonModule,
    StoreModule.forRoot ( { routerReducer } ),
    StoreRouterConnectingModule.forRoot (),
    ! environment.production ? StoreDevtoolsModule.instrument () : []
  ],
  declarations: []
} )
export class StateModule {
  constructor ( @Optional () @SkipSelf () parentModule: StateModule ) {
    if ( parentModule ) {
      throw new Error ( 'StateModule only allowed (import) in AppModule' );
    }
  }

  static forRoot (): ModuleWithProviders {
    return {
      ngModule : StateModule,
      providers: []
    };
  }
}
