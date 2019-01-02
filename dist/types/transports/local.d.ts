import { PreoccupyAction } from './../actions/base';
import { AbstractTransport, Listener, TransportEvents } from './abstract';
export declare class LocalTransport implements AbstractTransport {
    private preifx;
    private stackSize;
    private connected;
    private listeners;
    private publishedMessages;
    private storage;
    constructor(preifx?: string, stackSize?: number);
    handshake(): void;
    on(eventName: TransportEvents, callback: Listener): void;
    publish(action: PreoccupyAction): void;
    handleEvent(event: Event): void;
    private connect;
    private cleanUp;
    private onStorageMessage;
    private trigger;
    private isExternalMessage;
}
