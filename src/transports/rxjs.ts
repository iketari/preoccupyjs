import { PreoccupyAction } from '../actions/base';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Message, AbstractTransport, Listener, TransportEvents } from './abstract';

export interface RxjsTransportOptions {
    subject: Subject<any>,
    filterFn?: (rawMsg: object) => boolean;
    wrapFn?: (data: Message) => object;
}

export class RxjsTransport implements AbstractTransport {
    private listeners: { [prop: string]: Listener[] } = {};
    private connected: boolean = false;
    private subject: Subject<any>;
    private filterFn: (rawMsg: object) => boolean;
    private wrapFn: (message: Message) => object;

    constructor(options: RxjsTransportOptions) {
        this.subject = options.subject;
        this.filterFn = options.filterFn || (rawData => rawData != null);
        this.wrapFn = options.wrapFn || (message => ({data: message.serialize()}));
    }

    public on(eventName: TransportEvents, callback: Listener): void {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    };

    public publish(action: PreoccupyAction): void {
        const message = new Message('action', action);
        this.subject.next(this.wrapFn(message));
    };

    public handshake() {
        if (this.connected) {
            this.trigger(TransportEvents.connect);
        } else {
            this.connect();
        }
    }

    public connect() {
        this.subject
        .pipe(
            filter(rawData => this.filterFn(rawData))
        )
        .subscribe((data:any) => {
            const message = Message.parse('|||' + data.data);
            this.trigger(TransportEvents.action, message);
        });

        this.trigger(TransportEvents.connect, null);
    }

    private trigger(type: TransportEvents, detail?: any) {
        if (Array.isArray(this.listeners[type])) {
            this.listeners[type].forEach((callback) => callback({
                type,
                detail
            }));
        };
    }
}
