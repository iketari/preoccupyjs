export enum ActionsName {
    MOVE_TO = '[Action] Move To',
    CLICK_TO = '[Action] Click To',
    DBL_CLICK_TO = '[Action] Double Click To',
    KEYPRESS = '[Action] Keypress',
    KEYDOWN = '[Action] Keydown',
    KEYUP = '[Action] Keyup',
    SCROLL_BY = '[Action] Scroll By'
}

export interface PreoccupyAction {
    type: string;
    payload?: any;
}

export class MoveToAction implements PreoccupyAction {
    public type:string = ActionsName.MOVE_TO;
    constructor(public payload: {x: number, y: number}) {};
}

export class ClickToAction implements PreoccupyAction {
    public type:string = ActionsName.CLICK_TO;
    constructor(public payload: {x: number, y: number}) {};
}

export class KeypressAction implements PreoccupyAction {
    public type:string = ActionsName.KEYPRESS;
    constructor(public payload: {which: number}) {};
}

export class KeydownAction implements PreoccupyAction {
    public type:string = ActionsName.KEYDOWN;
    constructor(public payload: {which: number}) {};
}

export class KeyupAction implements PreoccupyAction {
    public type:string = ActionsName.KEYUP;
    constructor(public payload: {which: number}) {};
}

export class ScrollByAction implements PreoccupyAction {
    public type:string = ActionsName.SCROLL_BY;
    constructor(public payload: {x: number, y: number, deltaX: number, deltaY: number}) {};
}

export class DblClickToAction implements PreoccupyAction {
    public type:string = ActionsName.DBL_CLICK_TO;
    constructor(public payload: {x: number, y: number}) {};
}

export type ActionUnion = MoveToAction |
    ClickToAction |
    DblClickToAction |
    KeypressAction |
    ScrollByAction;