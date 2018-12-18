import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

const SCROLL_OFFSET = 20;

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  @ViewChild('scrollable') scrollableElRef: ElementRef;
  dates: Date[] = [];
  constructor() { }

  ngOnInit() {
    this.dates = this.generate(10);
  }

  onScroll(event) {
    console.log(event)
    const {scrollHeight, scrollTop, clientHeight} = <HTMLDivElement>event.target;

    if (clientHeight + scrollTop + SCROLL_OFFSET >= scrollHeight) {
      this.dates.push(...this.generate(10));
    }
  }

  generate(n: number) {
    return Array.from(Array(n).keys()).map(i => new Date());
  }

}
