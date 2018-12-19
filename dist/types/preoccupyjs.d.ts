import { Client } from './client';
import { Host } from './host';
export * from './client';
export * from './host';
export declare function start(el: HTMLElement): Client;
export declare function connect(el: HTMLElement): Host;
