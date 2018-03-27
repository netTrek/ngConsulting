import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterReducerState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateUrl } from './model/router-state-url.interface';
import { AppEffectsService } from './app-effects.service';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateUrlSerializer } from './model/router-state-url-serializer';
import { appMetaReducers, appReducer } from './app.reducer';

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

@NgModule ( {
  imports     : [
    CommonModule,
    StoreModule.forRoot ( appReducer, { metaReducers: appMetaReducers } ),
    StoreRouterConnectingModule.forRoot ({
      stateKey: 'router'
    }),
    EffectsModule.forRoot( [ AppEffectsService ] ),
    ! environment.production ? StoreDevtoolsModule.instrument () : []
  ],
  declarations: [],
  providers: [  ]
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
      providers: [
        { provide: RouterStateSerializer, useClass: RouterStateUrlSerializer }
      ]
    };
  }
}
