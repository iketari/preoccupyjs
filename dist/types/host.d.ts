import { AbstractTransport } from './transports';
export interface Coordinates {
    x: number;
    y: number;
}
export declare class Host {
    private transport;
    private el;
    private actions;
    constructor(transport: AbstractTransport, el: HTMLElement);
    private initEvents;
    getRelativeCoordinate(event: MouseEvent): {
        x: number;
        y: number;
    };
}
