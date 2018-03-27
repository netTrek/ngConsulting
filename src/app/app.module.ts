import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserService } from './users/user.service';
import { ChangeDetectModule } from './change-detect/change-detect.module';
import { StateModule } from './state/state.module';

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule, ChangeDetectModule, StateModule.forRoot()
  ],
  providers   : [
    UserService,
    <ValueProvider>{ provide: 'bezeichner', useValue: 'wert', multi: true }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
