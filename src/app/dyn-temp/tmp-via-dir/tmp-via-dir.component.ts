import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { EntryComponent } from '../entry/entry.component';

@Component({
  selector: 'msg-tmp-via-dir',
  templateUrl: './tmp-via-dir.component.html',
  styleUrls: ['./tmp-via-dir.component.scss']
})
export class TmpViaDirComponent implements OnInit, AfterViewInit  {

  role = 'user';
  comp = EntryComponent;

  constructor( private vcr: ViewContainerRef,
               private componentFactoryResolver: ComponentFactoryResolver ) { }

  ngOnInit() {
    const compFactory = this.componentFactoryResolver.resolveComponentFactory( EntryComponent );
    const compRef = this.vcr.createComponent( compFactory );
    compRef.instance.name = 'hurra';
  }

  ngAfterViewInit (): void {
  }

  toggleRole () {
    if ( this.role === 'admin') {
      this.role = 'user';
    } else {
      this.role = 'admin';
    }
  }
}
