export enum ActionsName {
    MOVE_TO = '[Action] Move To',
    CLICK_TO = '[Action] Click To'
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

export type ActionUnion = MoveToAction |
    ClickToAction;