import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'msg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'msg';
  constructor () {
    console.log ( environment.endpoint );
  }
}
// ng build --stats-json
// npm i webpack-bundle-analyzer --save-dev
// package.json erweitern (neuer Task)
// "webpack-bundle-analyzer": "webpack-bundle-analyzer dist/stats.json"
