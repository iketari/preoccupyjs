import { actionMap } from './actions';
import { AbstractTransport, TransportEvents } from './transports';
import { PreoccupyAction } from './actions/base';

export interface Coordinates {
  x: number;
  y: number;
}

export class Host {
  private actions: Map<string, any> = actionMap;
  private eventCallbacks: WeakMap<
    PreoccupyAction,
    EventListenerOrEventListenerObject
  > = new WeakMap();
  constructor(private transport: AbstractTransport, private el: HTMLElement) {}

  public start() {
    this.transport.on(TransportEvents.connect, event => {
      this.initEvents();
    });

    this.transport.handshake();
  }

  public stop() {
    this.transport.disconnect();
    this.disableEvents();
  }

  private initEvents() {
    this.actions.forEach(Action => {
      this.eventCallbacks.set(Action, (event: Event) => {
        const action = Action.handleEvent(this, event);
        this.transport.publish(action);
      });

      this.el.addEventListener(Action.eventName, this.eventCallbacks.get(Action));
    });
  }

  private disableEvents() {
    this.actions.forEach(Action =>
      this.el.removeEventListener(Action.eventName, this.eventCallbacks.get(Action))
    );
  }

  public getRelativeCoordinate(event: MouseEvent): { x: number; y: number } {
    const { offsetX, offsetY } = event;
    const { clientHeight, clientWidth } = event.target as HTMLDivElement;

    return {
      x: offsetX / clientWidth,
      y: offsetY / clientHeight
    };
  }
}
