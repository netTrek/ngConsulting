import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterReducerState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Params, RouterStateSnapshot } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

@NgModule ( {
  imports     : [
    CommonModule,
    StoreModule.forRoot ( { router: routerReducer } ),
    StoreRouterConnectingModule.forRoot ({
      stateKey: 'router'
    }),
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
      providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer }
      ]
    };
  }
}
