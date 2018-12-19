import { AbstractTransport } from './transports';
import { ActionUnion } from './actions';
import { DomController } from './dom';
export declare class Client {
    private dom;
    constructor(transport: AbstractTransport, dom: DomController);
    calibrate(): void;
    perform(action: ActionUnion): void;
}
