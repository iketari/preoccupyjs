import { DomController } from '../dom';
import { Host } from '../host';
export declare enum ActionsName {
    BASE = "[Action] Base",
    MOVE_TO = "[Action] Move To",
    CLICK_TO = "[Action] Click To",
    DBL_CLICK_TO = "[Action] Double Click To",
    KEYPRESS = "[Action] Keypress",
    KEYDOWN = "[Action] Keydown",
    KEYUP = "[Action] Keyup",
    SCROLL_BY = "[Action] Scroll By"
}
export interface RawPreoccupyAction {
    type: string;
    payload?: object;
}
export interface PreoccupyAction {
    payload?: object;
    performEvent(dom: DomController, stack: PreoccupyAction[]): void;
}
export declare abstract class BaseAction implements PreoccupyAction {
    payload: object;
    type: string;
    static type: string;
    abstract performEvent(dom: DomController, stack: PreoccupyAction[]): void;
    static handleEvent(host: Host, event: Event): PreoccupyAction;
    constructor(payload?: object);
}
