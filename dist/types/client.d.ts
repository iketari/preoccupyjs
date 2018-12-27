import { RawPreoccupyAction } from './actions/base';
import { DomController } from './dom';
import { AbstractTransport } from './transports';
export declare class Client {
    private dom;
    private actionStack;
    private actions;
    constructor(transport: AbstractTransport, dom: DomController);
    perform(rawAction: RawPreoccupyAction): void;
}
