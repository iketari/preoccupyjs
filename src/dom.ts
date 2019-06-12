import { Coordinates } from './host';
import { Cursor } from './cursor';
import { DEBUG_FLAG } from './utils';

const CURSOR = 1;

export class DomController {
  private cursor: Cursor = new Cursor();
  constructor(private el: Element) {}

  public init() {
    this.cursor.moveTo({ x: 0, y: 0 });

    const bodyEl = document.body;
    if (getComputedStyle(this.el).position !== 'static') {
      this.el.appendChild(this.cursor.getEl());
    } else {
      bodyEl.appendChild(this.cursor.getEl());
    }
  }

  public destroy() {
    this.cursor.destroy();
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

    if (document.activeElement !== null) {
      this.fireEvent('blur', document.activeElement as HTMLElement);
    }

    this.setFocus(el);
    this.fireEvent('focus', el);
    this.fireEvent('click', el, options);
  }

  public rightClickTo(event: Partial<MouseEvent>) {
    const { x, y, button } = event;
    const payload = this.getMouseEventPayload({ x, y });

    if (payload === null) {
      return;
    }

    let [el, options] = payload;
    options = {
      ...options,
      button
    };

    this.fireEvent('contextmenu', el, options);
  }

  public dblClickTo(coordinates: Coordinates) {
    const el = this.getElementFromPoint(this.getAbsoluteCoordinates(coordinates)) as HTMLElement;

    if (!el) {
      return;
    }

    switch (el.tagName.toLowerCase()) {
      case 'textarea':
      case 'input':
        (el as HTMLInputElement).select();
        break;
      default:
        break;
    }
    this.fireEvent('dblclick', el);
  }

  public keydown(payload: Partial<KeyboardEvent>): any {
    const el = document.activeElement;
    if (!el) {
      return;
    }

    if (payload.code === 'Backspace') {
      switch (el.tagName.toLowerCase()) {
        case 'textarea':
        case 'input':
          const inputEl = el as HTMLInputElement;
          if (['checkbox', 'radio'].includes(inputEl.type) || !inputEl.value) {
            break;
          }
          inputEl.value = (el as HTMLTextAreaElement).value.slice(0, -1);
          break;
        default:
          if ((el as HTMLElement).isContentEditable) {
            el.innerHTML = el.innerHTML.slice(0, -1);
          }
          break;
      }
    }

    this.fireEvent('keydown', el as HTMLElement, payload);
  }

  public keyup(payload: object): any {
    const el = document.activeElement;
    if (!el) {
      return;
    }

    this.fireEvent('keyup', el as HTMLElement, payload);
  }

  public keypress(event: Partial<KeyboardEvent>) {
    const el = document.activeElement as HTMLElement;
    if (!el || event.keyCode === undefined) {
      return;
    }

    this.fireEvent('keypress', el, event);
    switch (el.tagName.toLowerCase()) {
      case 'textarea':
      case 'input':
        (el as HTMLTextAreaElement).value += String.fromCharCode(event.keyCode);
        break;
      default:
        el.innerHTML += String.fromCharCode(event.keyCode);
        break;
    }

    this.fireEvent('input', el, event);
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
    let initialEl = this.getElementFromPoint(this.getAbsoluteCoordinates({ x, y })) as HTMLElement;
    let scrollableEl: HTMLElement | undefined;
    let el = initialEl;

    if (!el) {
      return;
    }

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
    const el = this.getElementFromPoint(absCoordinates) as HTMLElement;

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
    if (el.focus) {
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

    if ((window as any)[DEBUG_FLAG]) {
      console.log('fired', event);
    }

    return el.dispatchEvent(event);
  }

  private isScrollable(el: HTMLElement) {
    return this.isScrollableY(el) || this.isScrollableX(el);
  }

  private isScrollableX(el: HTMLElement) {
    const style = getComputedStyle(el);
    return ['auto', 'scroll'].includes(style.overflowX) && el.scrollWidth > el.clientWidth;
  }

  private isScrollableY(el: HTMLElement) {
    const style = getComputedStyle(el);
    return ['auto', 'scroll'].includes(style.overflowY) && el.scrollHeight > el.clientHeight;
  }
}
