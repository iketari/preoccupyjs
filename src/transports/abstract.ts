import { PreoccupyAction } from "../actions";
export enum TransportEvents {
    connect,
    disconnect,
    action
}

export type Listener = (event: TransportEvent) => void;

export interface TransportEvent {
    type: TransportEvents;
    detail: any;
}

export interface PreoccupyTransport {
    on(type: TransportEvents, callback: Listener): void;
    publish(action: PreoccupyAction): void;
}

export class Message {
    public hash: string;

    constructor(public type: string, public data: object, hash?: string) {
        this.hash = hash || Math.random() * 10e6 + '';
    }

    public serialize(): string {
        return JSON.stringify(this.data);
    }

    static parse(src: string): Message {
        const [type, hash, dataSrc] =  src.split('|');
        return new Message(type, JSON.parse(dataSrc), hash);
    }
};