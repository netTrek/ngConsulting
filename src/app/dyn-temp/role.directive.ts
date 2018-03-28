import { AfterViewInit, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { environment } from '../../environments/environment';

@Directive ( {
  selector: '[msgRole]'
} )
export class RoleDirective implements AfterViewInit {

  get msgRole (): string {
    return this._role;
  }

  @Input ()
  set msgRole ( value: string ) {
    if ( this._role !== value ) {
      this._role = value;
      this.updateView ();
    }
  }

  private isOnStage = false;
  private _role: string;

  constructor ( private tempRef: TemplateRef<any>,
                private vcr: ViewContainerRef ) {

  }

  ngAfterViewInit (): void {
    this.updateView ();
  }

  private updateView () {
    if ( this.msgRole === environment.role ) {
      this.showTemp ();
    } else {
      this.removeTemp ();
    }
  }

  private showTemp () {
    if ( !this.isOnStage ) {
      this.vcr.createEmbeddedView ( this.tempRef );
      this.isOnStage = true;
    }
  }

  private removeTemp () {
    if ( this.isOnStage ) {
      this.vcr.clear();
      this.isOnStage = false;
    }
  }
}
