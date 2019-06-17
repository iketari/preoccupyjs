import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class DblClickToAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.DBL_CLICK_TO;
  static eventName: string = 'dblclick';
  constructor(
    public payload: {
      x: number;
      y: number;
    }
  ) {
    super();
    this.type = DblClickToAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.dblClickTo(this.payload);
  }

  static handleEvent(host: Host, event: Event): PreoccupyAction {
    const payload = host.getRelativeCoordinate(event as MouseEvent);
    return new DblClickToAction(payload);
  }
}
