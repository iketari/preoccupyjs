import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';

import { PreoccupyAction } from '../actions/base';
import { AbstractTransport, TransportEvents } from './abstract';
import { EventEmitter } from './EventEmitter';
import { Message } from './Message';

export interface RxjsTransportOptions {
  subject: WebSocketSubject<Object>;
  filterFn?: (rawMsg: object) => boolean;
  wrapFn?: (data: Message) => object;
}

export class RxjsTransport extends EventEmitter implements AbstractTransport {
  private subscription: Subscription = null;
  private connected: boolean = false;
  private subject: WebSocketSubject<Object>;
  private filterFn: (rawMsg: object) => boolean;
  private wrapFn: (message: Message) => object;

  constructor(options: RxjsTransportOptions) {
    super();
    this.subject = options.subject;
    this.filterFn = options.filterFn === undefined ? rawData => Boolean(rawData) : options.filterFn;
    this.wrapFn =
      options.wrapFn === undefined ? message => ({ data: message.serialize() }) : options.wrapFn;
  }

  public disconnect() {
    this.off();
    this.subscription && this.subscription.unsubscribe();

    this.connected = false;
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
}
