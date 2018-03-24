import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

const logging = false;

export abstract class LogClass implements OnInit,
                                 OnChanges,
                                 OnInit,
                                 DoCheck,
                                 AfterContentInit,
                                 AfterContentChecked,
                                 AfterViewInit,
                                 AfterViewChecked,
                                 OnDestroy {
  constructor ( protected elemName: string, public showLogs: boolean = true, private preTabs: string = '' ) {
    this.log ( `${this.elemName} constructor` );
  }

  ngOnInit (): void {
    this.log ( `${this.preTabs} ${this.elemName} ngOnInit` );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    this.log ( `${this.preTabs} ${this.elemName} ngOnChanges`, changes );
  }

  ngDoCheck (): void {
    this.log ( `${this.preTabs} ${this.elemName} ngDoCheck`  );
  }

  ngAfterContentInit (): void {
    this.log ( `${this.preTabs}\t ${this.elemName} ngAfterContentInit` );
  }

  ngAfterContentChecked (): void {
    this.log ( `${this.preTabs}\t ${this.elemName} ngAfterContentChecked` );
  }

  ngAfterViewInit (): void {
    this.log ( `${this.preTabs}\t ${this.elemName} ngAfterViewInit` );
  }

  ngAfterViewChecked (): void {
    this.log ( `${this.preTabs}\t ${this.elemName} ngAfterViewChecked` );
  }

  ngOnDestroy (): void {
    this.log ( `${this.preTabs} ${this.elemName} ngOnDestroy` );
  }

  private log ( ...rest: any[] ) {
    if ( logging && this.showLogs ) {
      console.log.apply( null, rest );
    }
  }
}
