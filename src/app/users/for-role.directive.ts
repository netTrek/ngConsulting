import { Directive, EmbeddedViewRef, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { isString } from 'util';
import { ROLE } from './users.module';

@Directive ( {
  selector: '[msgForRole]'
} )
export class ForRoleDirective {

  get msgForRole (): string {
    return this._msgForRole;
  }

  @Input ()
  set msgForRole ( value: string ) {
    if ( value && isString ( value ) && value.trim () !== '' && value !== this._msgForRole ) {
      this._msgForRole = value;
      if ( value === this.appRoleState ) {
        this.showTemplate();
      } else {
        this.hideTemplate();
      }
    }
  }

  private _msgForRole: string;
  private alreadyShown = false;
  private embeddedView: EmbeddedViewRef<any>;

  constructor ( @Inject ( ROLE ) private appRoleState: string,
                private viewContainerRef: ViewContainerRef,
                private tempRef: TemplateRef<any> ) {
  }

  private showTemplate () {
    if ( !this.embeddedView ) {
      this.embeddedView = this.viewContainerRef.createEmbeddedView( this.tempRef );
      // console.log ( this.viewContainerRef.indexOf( this.embeddedView ) );
    }
  }

  private hideTemplate () {
    if ( this.embeddedView ) {
      this.viewContainerRef.remove( this.viewContainerRef.indexOf( this.embeddedView ) );
      // this.viewContainerRef.clear();
      this.embeddedView = undefined;
    }
  }
}
