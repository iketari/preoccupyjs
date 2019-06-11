import { MoveToAction } from './MoveToAction';
import { ClickToAction } from './ClickToAction';
import { KeypressAction } from './KeypressAction';
import { ScrollByAction } from './ScrollByAction';
import { DblClickToAction } from './DblClickToAction';
import { KeydownAction } from './KeydownAction';
import { KeyupAction } from './KeyupAction';
import { RightClickToAction } from './RightClickToAction';
import { MouseDownToAction } from './MouseDownToAction';
import { MouseUpToAction } from './MouseUpToAction';

export * from './base';
export { MoveToAction } from './MoveToAction';
export { ClickToAction } from './ClickToAction';
export { KeypressAction } from './KeypressAction';
export { ScrollByAction } from './ScrollByAction';
export { DblClickToAction } from './DblClickToAction';
export { KeydownAction } from './KeydownAction';
export { KeyupAction } from './KeyupAction';
export { RightClickToAction } from './RightClickToAction';
export { MouseDownToAction } from './MouseDownToAction';
export { MouseUpToAction } from './MouseUpToAction';

export const actionMap = new Map<string, any>(
  [
    MoveToAction,
    ClickToAction,
    KeydownAction,
    KeypressAction,
    KeyupAction,
    MoveToAction,
    ScrollByAction,
    DblClickToAction,
    RightClickToAction,
    MouseDownToAction,
    MouseUpToAction
  ].map<[string, any]>(Action => [Action.type, Action])
);
