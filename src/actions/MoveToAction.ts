import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class MoveToAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.MOVE_TO;
  static eventName: string = 'mousemove';
  constructor(
    public payload: {
      x: number;
      y: number;
    }
  ) {
    super();
    this.type = MoveToAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.moveCursorTo(this.payload);
  }

  static handleEvent(host: Host, event: Event): PreoccupyAction {
    const payload = host.getRelativeCoordinate(event as MouseEvent);
    return new MoveToAction(payload);
  }
}
