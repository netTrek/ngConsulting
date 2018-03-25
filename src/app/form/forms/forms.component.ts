import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-forms',
  template: `
    <p>
      forms works!
    </p>
    <!--<msg-template-driven></msg-template-driven>-->
    <msg-model-driven></msg-model-driven>
  `,
  styles: []
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
