import { PreoccupyAction } from '../actions/base';
import { WebSocketSubject } from 'rxjs/webSocket';
import { filter } from 'rxjs/operators';
import { Message, AbstractTransport, Listener, TransportEvents } from './abstract';
import { Subscription } from 'rxjs/internal/Subscription';

export interface RxjsTransportOptions {
  subject: WebSocketSubject<Object>;
  filterFn?: (rawMsg: object) => boolean;
  wrapFn?: (data: Message) => object;
}

export class RxjsTransport implements AbstractTransport {
  private subscription: Subscription = null;
  private listeners: { [prop: string]: Listener[] } = {};
  private connected: boolean = false;
  private subject: WebSocketSubject<Object>;
  private filterFn: (rawMsg: object) => boolean;
  private wrapFn: (message: Message) => object;

  constructor(options: RxjsTransportOptions) {
    this.subject = options.subject;
    this.filterFn = options.filterFn === undefined ? rawData => Boolean(rawData) : options.filterFn;
    this.wrapFn =
      options.wrapFn === undefined ? message => ({ data: message.serialize() }) : options.wrapFn;
  }

  public disconnect() {
    this.listeners = {};
    this.subscription && this.subscription.unsubscribe();

    this.connected = false;
  }

  public on(eventName: TransportEvents, callback: Listener): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  public publish(action: PreoccupyAction): void {
    const message = new Message('action', action);
    this.subject.next(this.wrapFn(message));
  }

  public handshake() {
    if (this.connected) {
      this.trigger(TransportEvents.connect);
    } else {
      this.connect();
    }
  }

  public connect() {
    this.subscription = this.subject
      .pipe(filter(rawData => this.filterFn(rawData)))
      .subscribe((data: any) => {
        const message = Message.parse('|||' + data.data);
        this.trigger(TransportEvents.action, message);
      });

    this.trigger(TransportEvents.connect, null);
  }

  private trigger(type: TransportEvents, detail?: any) {
    if (Array.isArray(this.listeners[type])) {
      this.listeners[type].forEach(callback =>
        callback({
          type,
          detail
        })
      );
    }
  }
}
