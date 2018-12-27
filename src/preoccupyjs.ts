import { Client } from './client';
import { DomController } from './dom';
import { Host } from './host';
import { AbstractTransport, LocalTransport, RxjsTransport } from './transports';

export * from './client';
export * from './host';
export * from './transports';

const localTransport = new LocalTransport();

export function createClient(el: HTMLElement, transport: AbstractTransport = localTransport): Client {
  const client = new Client(transport, new DomController(el));
  transport.handshake();
  return client;

}

export function createHost(el: HTMLElement, transport: AbstractTransport = localTransport): Host {
  const host = new Host(transport, el);
  transport.handshake();
  return host;
}
