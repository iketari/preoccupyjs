import { Coordinates } from './host';
export declare class Cursor {
    private el;
    constructor();
    moveTo({ x, y }: Coordinates): void;
    getEl(): HTMLElement;
    private createCursorEl;
}
