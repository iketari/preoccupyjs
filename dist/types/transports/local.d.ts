import { AbstractTransport, TransportEvents, Listener } from './abstract';
import { PreoccupyAction } from '../actions';
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
    private connect;
    private onStorageMessage;
    private trigger;
    private isExternalMessage;
}
