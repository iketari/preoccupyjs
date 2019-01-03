import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class ClickToAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.CLICK_TO;
  static eventName: string = 'click';
  constructor(
    public payload: {
      x: number;
      y: number;
    }
  ) {
    super();
    this.type = ClickToAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.clickTo(this.payload);
  }

  static handleEvent(host: Host, event: Event): PreoccupyAction {
    const payload = host.getRelativeCoordinate(event as MouseEvent);
    return new ClickToAction(payload);
  }
}
