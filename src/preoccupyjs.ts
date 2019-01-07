import { Client } from './client';
import { DomController } from './dom';
import { Host } from './host';
import { AbstractTransport, LocalTransport, RxjsTransport } from './transports';
import { DEBUG_FLAG } from './utils';

export * from './client';
export * from './host';
export * from './transports';

export { DEBUG_FLAG } from './utils';

const localTransport = new LocalTransport();

export function createClient(
  el: HTMLElement,
  transport: AbstractTransport = localTransport
): Client {
  return new Client(transport, new DomController(el));
}

export function createHost(el: HTMLElement, transport: AbstractTransport = localTransport): Host {
  return new Host(transport, el);
}
