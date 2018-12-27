import { PreoccupyAction, BaseAction } from './base';
import { DomController } from '../dom';
import { Host } from '../host';
export declare class ScrollByAction extends BaseAction implements PreoccupyAction {
    payload: {
        x: number;
        y: number;
        deltaX: number;
        deltaY: number;
    };
    static type: string;
    static eventName: string;
    constructor(payload: {
        x: number;
        y: number;
        deltaX: number;
        deltaY: number;
    });
    performEvent(dom: DomController, stack: PreoccupyAction[]): void;
    static handleEvent(host: Host, event: WheelEvent): PreoccupyAction;
}
