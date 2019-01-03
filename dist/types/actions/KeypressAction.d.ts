import { PreoccupyAction, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export declare class KeypressAction extends BaseAction implements PreoccupyAction {
    payload: Partial<KeyboardEvent>;
    static type: string;
    static eventName: string;
    constructor(payload: Partial<KeyboardEvent>);
    performEvent(dom: DomController, stack: PreoccupyAction[]): void;
    static handleEvent(host: Host, event: KeyboardEvent): PreoccupyAction;
}
