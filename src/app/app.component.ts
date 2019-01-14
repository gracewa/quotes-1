import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    new Quote(1,'My Quote 1'),
    new Quote(2,'My Quote 2'),
    new Quote(3,'My Quote 3')
  ]
}
