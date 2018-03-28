import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TmpDirective } from '../tmp.directive';

@Component ( {
  selector   : 'msg-use-tmp',
  templateUrl: './use-tmp.component.html',
  styleUrls  : [ './use-tmp.component.scss' ]
} )
export class UseTmpComponent implements OnInit, AfterContentInit {

  @Input()
  data: any[];

  @ContentChild ( TmpDirective, { read: TemplateRef } )
  tempRef: TemplateRef<any>;

  constructor ( private vcr: ViewContainerRef ) {
  }

  ngOnInit () {
  }

  ngAfterContentInit (): void {
    console.log ( this.tempRef );
    for ( let i = 0; i < this.data.length; i ++ ) {
      this.vcr.createEmbeddedView( this.tempRef );
    }
  }

}
