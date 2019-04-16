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
      button: number;
    }
  ) {
    super();
    this.type = RightClickToAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.rightClickTo(this.payload);
  }

  static handleEvent(host: Host, event: Event): PreoccupyAction {
    let e = <MouseEvent>event;
    event.preventDefault();
    const payload = {
      ...host.getRelativeCoordinate(e),
      button: e.button
    };

    return new RightClickToAction(payload);
  }
}
