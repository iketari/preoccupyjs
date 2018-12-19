import { AbstractTransport } from './transports';
export interface Coordinates {
    x: number;
    y: number;
}
export declare class Host {
    private transport;
    private el;
    constructor(transport: AbstractTransport, el: HTMLElement);
    moveCursorTo(event: MouseEvent): void;
    clickTo(event: MouseEvent): void;
    dblClickTo(event: MouseEvent): void;
    keypress(which: number): void;
    wheel(event: WheelEvent): void;
    private initEvents;
    private getRelativeCoordinate;
}
