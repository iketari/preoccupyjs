import { PreoccupyAction, ActionsName, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
import { pick } from '../utils';
export class KeydownAction extends BaseAction implements PreoccupyAction {
  static type: string = ActionsName.KEYDOWN;
  static eventName: string = 'keydown';
  constructor(public payload: Partial<KeyboardEvent>) {
    super();
    this.type = KeydownAction.type;
  }

  performEvent(dom: DomController, stack: PreoccupyAction[]) {
    dom.keydown(this.payload);
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
    return new KeydownAction(eventData);
  }
}
