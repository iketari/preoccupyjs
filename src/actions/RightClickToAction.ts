import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';

export class RightClickToAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.RIGHT_CLICK_TO;
  static eventName: string = 'contextmenu';
  constructor(
    public payload: {
      x: number;
      y: number;
    }
  ) {
    super();
    this.type = RightClickToAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.rightClickTo(this.payload);
  }

  static handleEvent(host: Host, event: Event): PreoccupyAction {
    event.preventDefault();
    const payload = host.getRelativeCoordinate(event as MouseEvent);
    return new RightClickToAction(payload);
  }
}
