import { actionMap } from './actions';
import { AbstractTransport, TransportEvents } from './transports';

export interface Coordinates {
  x: number;
  y: number;
}

export class Host {
  private actions: Map<string, any> = actionMap;
  constructor(private transport: AbstractTransport, private el: HTMLElement) {}

  public start() {
    this.transport.on(TransportEvents.connect, event => {
      this.initEvents();
    });

    this.transport.handshake();
  }

  public stop() {
    this.transport.disconnect();
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
    const { clientHeight, clientWidth } = event.target as HTMLDivElement;

    return {
      x: offsetX / clientWidth,
      y: offsetY / clientHeight
    };
  }
}
