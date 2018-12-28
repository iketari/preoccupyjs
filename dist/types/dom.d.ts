import { Coordinates } from './host';
export declare class DomController {
    private el;
    private cursor;
    constructor(el: Element);
    init(): void;
    moveCursorTo(coordinates: Coordinates): void;
    clickTo(coordinates: Coordinates): void;
    dblClickTo(coordinates: Coordinates): void;
    keydown(payload: object): any;
    keyup(payload: object): any;
    keypress({ which }: {
        which: number;
    }): void;
    scroll({ x, y, deltaX, deltaY }: {
        x: number;
        y: number;
        deltaX: number;
        deltaY: number;
    }): void;
    private getAbsoluteCoordinates;
    private getElementFromPoint;
    private setFocus;
    private fireEvent;
    private isScrollable;
}
