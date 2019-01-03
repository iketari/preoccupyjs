import { PreoccupyAction, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export declare class MouseDownToAction extends BaseAction implements PreoccupyAction {
    payload: {
        x: number;
        y: number;
    };
    static type: string;
    static eventName: string;
    constructor(payload: {
        x: number;
        y: number;
    });
    performEvent(dom: DomController, stack: PreoccupyAction[]): void;
    static handleEvent(host: Host, event: Event): PreoccupyAction;
}
