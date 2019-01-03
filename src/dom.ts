import { Coordinates } from './host';
import { Cursor } from './cursor';
import { DEBUG_FLAG } from './utils';

const CURSOR = 1;

export class DomController {
  private cursor: Cursor = new Cursor();
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
    const payload = this.getMouseEventPayload(coordinates);

    if (payload === null) {
      return;
    }

    this.fireEvent('mousemove', ...payload);

    this.cursor.moveTo(absCoordinates);
  }

  public mouseDownTo(coordinates: Coordinates) {
    const payload = this.getMouseEventPayload(coordinates);

    if (payload === null) {
      return;
    }

    this.fireEvent('mousedown', ...payload);
  }

  public mouseUpTo(coordinates: Coordinates) {
    const payload = this.getMouseEventPayload(coordinates);

    if (payload === null) {
      return;
    }

    this.fireEvent('mouseup', ...payload);
  }

  public clickTo(coordinates: Coordinates) {
    const payload = this.getMouseEventPayload(coordinates);

    if (payload === null) {
      return;
    }

    const [el, options] = payload;

    if (document.activeElement != null) {
      this.fireEvent('blur', <HTMLElement>document.activeElement);
    }

    this.setFocus(el);
    this.fireEvent('focus', el);
    this.fireEvent('click', el, options);
  }

  public rightClickTo(coordinates: Coordinates) {
    const payload = this.getMouseEventPayload(coordinates);

    if (payload === null) {
      return;
    }

    this.fireEvent('contextmenu', ...payload);
  }

  public dblClickTo(coordinates: Coordinates) {
    const el = <HTMLElement>this.getElementFromPoint(this.getAbsoluteCoordinates(coordinates));
    switch (el.tagName.toLowerCase()) {
      case 'textarea':
      case 'input':
        (<HTMLInputElement>el).select();
      default:
        break;
    }
    this.fireEvent('dblclick', el);
  }

  public keydown(payload: Partial<KeyboardEvent>): any {
    const el = document.activeElement;
    if (el == null) {
      return;
    }

    if (payload.which === 8) {
      switch (el.tagName.toLowerCase()) {
        case 'textarea':
        case 'input':
          (<HTMLTextAreaElement>el).value = (<HTMLTextAreaElement>el).value.slice(0, -1);
        default:
          if ((<HTMLElement>el).isContentEditable) {
            el.innerHTML = el.innerHTML.slice(0, -1);
          }
          break;
      }
    }

    this.fireEvent('keydown', <HTMLElement>el, payload);
  }

  public keyup(payload: object): any {
    const el = document.activeElement;
    if (el == null) {
      return;
    }

    this.fireEvent('keyup', <HTMLElement>el, payload);
  }

  public keypress({ which }: { which: number }) {
    const el = document.activeElement;
    if (el == null) {
      return;
    }

    this.fireEvent('keypress', <HTMLElement>el);
    switch (el.tagName.toLowerCase()) {
      case 'textarea':
      case 'input':
        (<HTMLTextAreaElement>el).value += String.fromCharCode(which);
      default:
        (<HTMLElement>el).innerHTML += String.fromCharCode(which);
        break;
    }

    this.fireEvent('input', <HTMLElement>el);
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

    while (el && el.parentElement) {
      if (this.isScrollable(el)) {
        scrollableEl = el;
        break;
      }

      el = el.parentElement;
    }

    if (!scrollableEl) {
      scrollableEl = document.body;
    }

    scrollableEl.scrollBy({
      left: deltaX,
      top: deltaY
    });

    this.fireEvent('wheel', el);
    this.fireEvent('scroll', el);
  }

  private getMouseEventPayload(
    coordinates: Coordinates
  ): [HTMLElement, Partial<MouseEvent>] | null {
    const absCoordinates = this.getAbsoluteCoordinates(coordinates);
    const el = <HTMLElement>this.getElementFromPoint(absCoordinates);

    if (!el) {
      return null;
    }

    const options = {
      clientX: absCoordinates.x,
      clientY: absCoordinates.y,
      view: window
    };

    return [el, options];
  }

  private getAbsoluteCoordinates({ x, y }: Coordinates): Coordinates {
    const { innerHeight, innerWidth } = window;

    return {
      x: x * innerWidth,
      y: y * innerHeight
    };
  }

  private getElementFromPoint({ x, y }: Coordinates) {
    return document.elementFromPoint(x - CURSOR, y - CURSOR);
  }

  private setFocus(el: HTMLElement) {
    if (typeof el.focus === 'function') {
      el.focus();
    }
  }

  private fireEvent(type: string, el: HTMLElement, options: object = {}): boolean {
    let event: Event;
    const defaultOptions = {
      bubbles: true,
      cancelable: true
    };

    switch (type) {
      case 'click':
      case 'dblclick':
      case 'mousedown':
      case 'mouseup':
      case 'contextmenu':
      case 'mousemove':
        event = new MouseEvent(type, {
          ...defaultOptions,
          ...options
        });
        break;
      case 'keypress':
      case 'keydown':
      case 'keyup':
        event = new KeyboardEvent(type, {
          ...defaultOptions,
          ...options
        });
        break;
      default:
        event = new Event(type, {
          ...defaultOptions,
          ...options
        });
        break;
    }

    if ((<any>window)[DEBUG_FLAG]) {
      console.log('fired', event);
    }

    return el.dispatchEvent(event);
  }

  private isScrollable(el: HTMLElement) {
    return this.isScrollableY(el) || this.isScrollableX(el);
  }

  private isScrollableX(el: HTMLElement) {
    const style = getComputedStyle(el);
    return ['auto', 'scroll'].includes(<string>style.overflowX) && el.scrollWidth > el.clientWidth;
  }

  private isScrollableY(el: HTMLElement) {
    const style = getComputedStyle(el);
    return (
      ['auto', 'scroll'].includes(<string>style.overflowY) && el.scrollHeight > el.clientHeight
    );
  }
}
