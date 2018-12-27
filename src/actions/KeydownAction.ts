import { PreoccupyAction, ActionsName, BaseAction }  from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class KeydownAction extends BaseAction implements PreoccupyAction {
    static type: string = ActionsName.KEYDOWN;
    static eventName: string = 'keydown';
    constructor(public payload: {
        which: number;
    }) {
        super();
        this.type = KeydownAction.type;
    }

    performEvent(dom: DomController, stack: PreoccupyAction[]) {
        // TBI
    }

    static handleEvent(host: Host, event: KeyboardEvent): PreoccupyAction {
        return new KeydownAction({
            which: event.which
        });
    }
}
