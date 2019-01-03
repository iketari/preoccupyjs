import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class ScrollByAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.SCROLL_BY;
  static eventName: string = 'mousewheel';
  constructor(
    public payload: {
      x: number;
      y: number;
      deltaX: number;
      deltaY: number;
    }
  ) {
    super();
    this.type = ScrollByAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.scroll(this.payload);
  }

  static handleEvent(host: Host, event: WheelEvent): PreoccupyAction {
    const coordinates = host.getRelativeCoordinate(<MouseEvent>event);

    return new ScrollByAction({
      ...coordinates,
      deltaX: event.shiftKey ? event.deltaY : 0,
      deltaY: event.shiftKey ? 0 : event.deltaY
    });
  }
}
