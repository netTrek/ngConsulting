import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component ( {
  selector   : 'msg-dyn-temp',
  templateUrl: './dyn-temp.component.html',
  styleUrls  : [ './dyn-temp.component.scss' ]
} )
export class DynTempComponent implements OnInit, AfterViewInit {

  @ViewChild ( 'tmp1' )
  tempRef: TemplateRef<any>;

  @ViewChild ( 'tmp1' ) tmp1: TemplateRef<any>;
  @ViewChild ( 'tmp2' ) tmp2: TemplateRef<any>;

  constructor () {
  }

  ngOnInit () {
  }

  ngAfterViewInit (): void {
    // console.log ( this.tmp1, this.tmp2 );
  }

  toggle () {
    if ( this.tempRef === this.tmp1 ) {
      this.tempRef = this.tmp2;
    } else {
      this.tempRef = this.tmp1;
    }
  }

}
