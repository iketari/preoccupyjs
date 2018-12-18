import { Client } from './client';
import { LocalTransport } from './transports/local';
import { DomController } from './dom';
import { Host } from './host';

export * from './client';
export * from './host';

const transport = new LocalTransport();

export function start(el: HTMLElement): Client {
  const client = new Client(transport, new DomController(el));
  transport.handshake();
  return client;

}

export function connect(el: HTMLElement): Host {
  const host = new Host(transport, el);
  transport.handshake();
  return host;
}