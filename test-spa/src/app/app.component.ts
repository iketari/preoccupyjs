import { Component } from '@angular/core';
import { start } from '@preoccupyjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-spa';
  activated = false;

  onActivate() {
    start(document.documentElement);
    this.activated = true;
  }
}
