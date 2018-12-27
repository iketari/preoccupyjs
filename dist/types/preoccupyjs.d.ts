import { Client } from './client';
import { Host } from './host';
import { AbstractTransport } from './transports';
export * from './client';
export * from './host';
export * from './transports';
export declare function createClient(el: HTMLElement, transport?: AbstractTransport): Client;
export declare function createHost(el: HTMLElement, transport?: AbstractTransport): Host;
