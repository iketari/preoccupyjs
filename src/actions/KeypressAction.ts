import { PreoccupyAction, ActionsName, BaseAction }  from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export class KeypressAction extends BaseAction implements PreoccupyAction {
    static type: string = ActionsName.KEYPRESS;
    static eventName: string = 'keypress';
    constructor(public payload: {
        which: number;
    }) {
        super();
        this.type = KeypressAction.type;
    }

    performEvent(dom: DomController, stack: PreoccupyAction[]) {
        dom.keypress(this.payload);
    }

    static handleEvent(host: Host, event: KeyboardEvent): PreoccupyAction {
        return new KeypressAction({
            which: event.which
        });
    }
}
