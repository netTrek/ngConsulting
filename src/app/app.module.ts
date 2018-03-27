import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, NgModule, ValueProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { environment } from '../environments/environment';
import { HomeModule } from './home/home.module';
// import { ContactModule } from './contact/contact.module';

export interface MyClass {
  val: string;
}

export class MyClass1 implements MyClass {
  val = 'hello world 1';
  constructor () {
    console.log ( 'myClass Constr' );
  }
}

export class MyClass2 implements MyClass {
  val = 'hello world 2';
  constructor () {
    console.log ( 'myClass Constr' );
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HomeModule/*,
    ContactModule*/
  ],
  providers: [
    <ClassProvider>{ provide: 'myClass', useClass: MyClass1, multi: true },
    <ClassProvider>{ provide: 'myClass', useClass: MyClass2, multi: true },
    <ClassProvider>{ provide: 'condition', useClass: environment.production ? MyClass1 : MyClass2 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
