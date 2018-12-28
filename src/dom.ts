import { Coordinates } from './host';
import { Cursor } from './cursor';

const CURSOR = 1;

export class DomController {

  private cursor: Cursor = new Cursor;
  constructor(private el: Element) {}

  public init() {
    this.cursor.moveTo({ x: 0, y: 0 });

    const bodyEl = <HTMLBodyElement>this.el.querySelector('body');
    if (getComputedStyle(this.el).position !== 'static') {
      this.el.appendChild(this.cursor.getEl());
    } else {
      bodyEl.appendChild(this.cursor.getEl());
    }
  }

  public moveCursorTo(coordinates: Coordinates) {
    const absCoordinates = this.getAbsoluteCoordinates(coordinates);

    this.cursor.moveTo(absCoordinates);
  }

  public clickTo(coordinates: Coordinates) {
    const absCoordinates = this.getAbsoluteCoordinates(coordinates);
    const el = <HTMLElement>this.getElementFromPoint(absCoordinates);

    switch (el.tagName.toLowerCase()) {
      case 'textarea':
      case 'input':
        this.setFocus(<HTMLTextAreaElement>el);
      default:
        const options = {
          clientX: absCoordinates.x,
          clientY: absCoordinates.y,
          view: window
        };
        this.fireEvent('mousedown', el, options);
        this.fireEvent('mouseup', el, options);
        this.fireEvent('click', el, options);
        break;
    }
  }

  public dblClickTo(coordinates: Coordinates) {
    const el = <HTMLElement>this.getElementFromPoint(this.getAbsoluteCoordinates(coordinates));
    this.fireEvent('dblclick', el);
  }

  public keypress({ which }: { which: number }) {
    const el = document.activeElement;
    if (el == null) {
      return;
    }

    switch (el.tagName.toLowerCase()) {
      case 'textarea':
      case 'input':
        this.fireEvent('keydown', <HTMLTextAreaElement>el);
        this.fireEvent('keypress', <HTMLTextAreaElement>el);
        (<HTMLTextAreaElement>el).value += String.fromCharCode(which);
        this.fireEvent('input', <HTMLTextAreaElement>el);
        this.fireEvent('keyup', <HTMLTextAreaElement>el);
      default:
        break;
    }
  }

  public scroll({
    x,
    y,
    deltaX,
    deltaY
  }: {
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
  }) {
    let initialEl = <HTMLElement>this.getElementFromPoint(this.getAbsoluteCoordinates({ x, y }));
    let scrollableEl: HTMLElement | undefined;
    let el = initialEl;

    while (el.parentElement) {
      if (this.isScrollable(el)) {
        scrollableEl = el;
        break;
      }

      el = el.parentElement;
    }

    if (scrollableEl) {
      scrollableEl.scrollBy({
        left: deltaX,
        top: deltaY
      });
    }

    this.fireEvent('wheel', el);
    this.fireEvent('scroll', el);
  }

  private getAbsoluteCoordinates({ x, y }: Coordinates): Coordinates {
    const { clientHeight, clientWidth } = this.el as HTMLBodyElement;

    return {
      x: x * clientWidth,
      y: y * clientHeight
    };
  }

  private getElementFromPoint({ x, y }: Coordinates) {
    return document.elementFromPoint(x - CURSOR, y - CURSOR);
  }

  private setFocus(el: HTMLTextAreaElement | HTMLInputElement) {
    el.focus();
    el.select();
  }

  private fireEvent(type: string, el: HTMLElement, options: object = {}): boolean {
    let event: Event;

    switch (type) {
      case 'click':
      case 'dblclick':
      case 'mousedown':
      case 'mouseup':
        event = new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          ...options
        });
        break;
      default:
        event = new Event(type, {
          bubbles: true,
          cancelable: true
        });
        break;
    }

    return el.dispatchEvent(event);
  }

  private isScrollable(el: HTMLElement) {
    return el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
  }
}
