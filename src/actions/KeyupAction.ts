import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
import { pick } from '../utils';
export class KeyupAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.KEYUP;
  static eventName: string = 'keyup';
  constructor(public payload: object) {
    super();
    this.type = KeyupAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.keyup(this.payload);
  }

  static handleEvent(host: Host, event: KeyboardEvent): PreoccupyAction {
    const eventData = pick<KeyboardEvent>(event, [
      'which',
      'key',
      'code',
      'ctrlKey',
      'keyCode',
      'metaKey',
      'shiftKey',
      'type'
    ]);
    return new KeyupAction(eventData);
  }
}
