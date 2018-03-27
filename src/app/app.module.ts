import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserService } from './users/user.service';
import { ChangeDetectModule } from './change-detect/change-detect.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './_store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterStateUrlSerializer } from './_store/model/router-state-url-serializer';

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, ChangeDetectModule,
    StoreModule.forRoot( appReducer, { metaReducers: [] } ),
    EffectsModule.forRoot( [] ),
    StoreRouterConnectingModule,
    ! environment.production ? StoreDevtoolsModule.instrument () : []
    // StateModule.forRoot()
  ],
  providers   : [
    UserService,
    { provide: RouterStateSerializer, useClass: RouterStateUrlSerializer },
    <ValueProvider>{ provide: 'bezeichner', useValue: 'wert', multi: true }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
