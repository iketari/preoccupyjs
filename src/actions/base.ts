import { DomController } from '../dom';
import { Host } from '../host';
export enum ActionsName {
  BASE = '[Action] Base',
  MOVE_TO = '[Action] Move To',
  MOUSE_DOWN_TO = '[Action] MouseDown To',
  MOUSE_UP_TO = '[Action] MouseUp To',
  CLICK_TO = '[Action] Click To',
  RIGHT_CLICK_TO = '[Action] Right Click To',
  DBL_CLICK_TO = '[Action] Double Click To',
  KEYPRESS = '[Action] Keypress',
  KEYDOWN = '[Action] Keydown',
  KEYUP = '[Action] Keyup',
  SCROLL_BY = '[Action] Scroll By'
}

export interface RawPreoccupyAction {
  type: string;
  payload?: object;
}

export interface PreoccupyAction {
  payload?: object;
  performEvent(dom: DomController, stack: PreoccupyAction[]): void;
}

export abstract class BaseAction implements PreoccupyAction {
  public type: string;
  static type: string = ActionsName.BASE;

  abstract performEvent(dom: DomController, stack: PreoccupyAction[]): void;
  static handleEvent(host: Host, event: Event): PreoccupyAction {
    console.warn(`You have to implement a static method handleEvent for ${this.type} action`);
    return {} as PreoccupyAction;
  }

  constructor(public payload: object = {}) {
    this.type = BaseAction.type;
  }
}
