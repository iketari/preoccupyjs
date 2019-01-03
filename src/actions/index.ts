import { MoveToAction } from './MoveToAction';
import { ClickToAction } from './ClickToAction';
import { KeypressAction } from './KeypressAction';
import { ScrollByAction } from './ScrollByAction';
import { DblClickToAction } from './DblClickToAction';
import { KeydownAction } from './KeydownAction';
import { KeyupAction } from './KeyupAction';
import { RightClickToAction } from './RightClickToAction';

export const actionMap = new Map<string, any>([
  [MoveToAction.type, MoveToAction],
  [ClickToAction.type, ClickToAction],
  [KeydownAction.type, KeydownAction],
  [KeypressAction.type, KeypressAction],
  [KeyupAction.type, KeyupAction],
  [MoveToAction.type, MoveToAction],
  [ScrollByAction.type, ScrollByAction],
  [DblClickToAction.type, DblClickToAction],
  [RightClickToAction.type, RightClickToAction]
]);
