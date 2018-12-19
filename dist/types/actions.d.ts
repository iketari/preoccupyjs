export declare enum ActionsName {
    MOVE_TO = "[Action] Move To",
    CLICK_TO = "[Action] Click To",
    DBL_CLICK_TO = "[Action] Double Click To",
    KEYPRESS = "[Action] Keypress",
    SCROLL_BY = "[Action] Scroll By"
}
export interface PreoccupyAction {
    type: string;
    payload?: any;
}
export declare class MoveToAction implements PreoccupyAction {
    payload: {
        x: number;
        y: number;
    };
    type: string;
    constructor(payload: {
        x: number;
        y: number;
    });
}
export declare class ClickToAction implements PreoccupyAction {
    payload: {
        x: number;
        y: number;
    };
    type: string;
    constructor(payload: {
        x: number;
        y: number;
    });
}
export declare class KeypressAction implements PreoccupyAction {
    payload: {
        which: number;
    };
    type: string;
    constructor(payload: {
        which: number;
    });
}
export declare class ScrollByAction implements PreoccupyAction {
    payload: {
        x: number;
        y: number;
        deltaX: number;
        deltaY: number;
    };
    type: string;
    constructor(payload: {
        x: number;
        y: number;
        deltaX: number;
        deltaY: number;
    });
}
export declare class DblClickToAction implements PreoccupyAction {
    payload: {
        x: number;
        y: number;
    };
    type: string;
    constructor(payload: {
        x: number;
        y: number;
    });
}
export declare type ActionUnion = MoveToAction | ClickToAction | DblClickToAction | KeypressAction | ScrollByAction;
