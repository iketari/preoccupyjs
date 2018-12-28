import { PreoccupyAction, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export declare class KeyupAction extends BaseAction implements PreoccupyAction {
    payload: object;
    static type: string;
    static eventName: string;
    constructor(payload: object);
    performEvent(dom: DomController, stack: PreoccupyAction[]): void;
    static handleEvent(host: Host, event: KeyboardEvent): PreoccupyAction;
}
