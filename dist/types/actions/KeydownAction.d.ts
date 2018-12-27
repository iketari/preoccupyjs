import { PreoccupyAction, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export declare class KeydownAction extends BaseAction implements PreoccupyAction {
    payload: {
        which: number;
    };
    static type: string;
    static eventName: string;
    constructor(payload: {
        which: number;
    });
    performEvent(dom: DomController, stack: PreoccupyAction[]): void;
    static handleEvent(host: Host, event: KeyboardEvent): PreoccupyAction;
}
