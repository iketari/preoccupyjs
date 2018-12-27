import { AbstractTransport, TransportEvents } from './transports';
import { DblClickToAction } from './actions/DblClickToAction';
import { ScrollByAction } from './actions/ScrollByAction';
import { KeypressAction } from './actions/KeypressAction';
import { ClickToAction } from './actions/ClickToAction';
import { MoveToAction } from './actions/MoveToAction';
import { actionMap } from './actions';
import { PreoccupyAction } from './actions/base';

export interface Coordinates {
  x: number;
  y: number;
}

export class Host {
  private actions: Map<string, any> = actionMap;
  constructor(private transport: AbstractTransport, private el: HTMLElement) {
    transport.on(TransportEvents.connect, event => {
      console.log('HOST', event);
      this.initEvents();
    });
  }

  private initEvents() {
    this.actions.forEach(Action => {
      this.el.addEventListener(Action.eventName, (event: Event) => {
        const action = Action.handleEvent(this, event);
        this.transport.publish(action);
      });
    });
  }

  public getRelativeCoordinate(event: MouseEvent): { x: number; y: number } {
    const { offsetX, offsetY } = event;
    const { clientHeight, clientWidth } = <HTMLDivElement>event.target;

    return {
      x: offsetX / clientWidth,
      y: offsetY / clientHeight
    };
  }
}
