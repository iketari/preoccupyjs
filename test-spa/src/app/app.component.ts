import { Component } from '@angular/core';
import { createClient } from 'preoccupyjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-spa';
  activated = false;

  onActivate() {
    const client = createClient(document.documentElement);
    client.start();
    this.activated = true;
  }
}
