import { Component, OnInit } from '@angular/core';
import { EntryComponent } from '../entry/entry.component';

@Component({
  selector: 'msg-tmp-via-dir',
  templateUrl: './tmp-via-dir.component.html',
  styleUrls: ['./tmp-via-dir.component.scss']
})
export class TmpViaDirComponent implements OnInit {
  role = 'user';
  comp = EntryComponent;

  constructor() { }

  ngOnInit() {
  }

  toggleRole () {
    if ( this.role === 'admin') {
      this.role = 'user';
    } else {
      this.role = 'admin';
    }
  }
}
