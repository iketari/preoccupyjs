import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class MouseDownToAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.MOUSE_DOWN_TO;
  static eventName: string = 'mousedown';
  constructor(
    public payload: {
      x: number;
      y: number;
    }
  ) {
    super();
    this.type = MouseDownToAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.mouseDownTo(this.payload);
  }

  static handleEvent(host: Host, event: Event): PreoccupyAction {
    const payload = host.getRelativeCoordinate(event as MouseEvent);
    return new MouseDownToAction(payload);
  }
}
