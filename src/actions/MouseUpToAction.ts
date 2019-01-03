import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class MouseUpToAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.MOUSE_UP_TO;
  static eventName: string = 'mouseup';
  constructor(
    public payload: {
      x: number;
      y: number;
    }
  ) {
    super();
    this.type = MouseUpToAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.mouseUpTo(this.payload);
  }

  static handleEvent(host: Host, event: Event): PreoccupyAction {
    const payload = host.getRelativeCoordinate(event as MouseEvent);
    return new MouseUpToAction(payload);
  }
}
