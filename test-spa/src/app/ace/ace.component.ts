import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css']
})
export class AceComponent implements OnInit {
  text: string = 'SELECT * FROM users;';
  constructor() { }

  ngOnInit() {
  }

}

// beh-select