import { PreoccupyAction } from '../actions/base';
import { Subject } from 'rxjs';
import { Message, AbstractTransport, Listener, TransportEvents } from './abstract';
export interface RxjsTransportOptions {
    subject: Subject<any>;
    filterFn?: (rawMsg: object) => boolean;
    wrapFn?: (data: Message) => object;
}
export declare class RxjsTransport implements AbstractTransport {
    private listeners;
    private connected;
    private subject;
    private filterFn;
    private wrapFn;
    constructor(options: RxjsTransportOptions);
    on(eventName: TransportEvents, callback: Listener): void;
    publish(action: PreoccupyAction): void;
    handshake(): void;
    connect(): void;
    private trigger;
}
