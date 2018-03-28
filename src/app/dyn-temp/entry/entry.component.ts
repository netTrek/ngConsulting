import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  name = 'test 234';

  constructor() { }

  ngOnInit() {
  }

}
