import { PreoccupyAction, ActionsName, BaseAction }  from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class KeyupAction extends BaseAction implements PreoccupyAction {
    static type: string = ActionsName.KEYUP;
    static eventName: string = 'keyup';
    constructor(public payload: {
        which: number;
    }) {
        super();
        this.type = KeyupAction.type;
    }

    performEvent(dom: DomController, stack: PreoccupyAction[]) {
        // dom.k
    }

    static handleEvent(host: Host, event: KeyboardEvent): PreoccupyAction {
        return new KeyupAction({
            which: event.which
        });
    }
}
