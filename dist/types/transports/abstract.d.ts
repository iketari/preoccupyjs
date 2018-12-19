import { PreoccupyAction } from "../actions";
export declare enum TransportEvents {
    connect = 0,
    disconnect = 1,
    action = 2
}
export declare type Listener = (event: TransportEvent) => void;
export interface TransportEvent {
    type: TransportEvents;
    detail: any;
}
export interface AbstractTransport {
    on(type: TransportEvents, callback: Listener): void;
    publish(action: PreoccupyAction): void;
}
export declare class Message {
    type: string;
    data: object;
    hash: string;
    constructor(type: string, data: object, hash?: string);
    serialize(): string;
    static parse(src: string): Message;
}
