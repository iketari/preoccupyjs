import { PreoccupyAction } from './../actions/base';

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

export interface AbstractTransport {
  on(type: TransportEvents, callback: Listener): void;
  publish(action: PreoccupyAction): void;
  handshake(): void;
  disconnect(): void;
}


