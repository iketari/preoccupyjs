import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { createHost } from 'preoccupyjs';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  host: any;
  @ViewChild('pad') padView: ElementRef;
  constructor() { }

  ngOnInit() {}

  public onConnectClick() {
    this.host = createHost(this.padView.nativeElement);
    this.host.start();
  }
}
