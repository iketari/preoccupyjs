import { Coordinates } from './host';
export declare class DomController {
    private el;
    private cursor;
    constructor(el: Element);
    init(): void;
    moveCursorTo(coordinates: Coordinates): void;
    mouseDownTo(coordinates: Coordinates): void;
    mouseUpTo(coordinates: Coordinates): void;
    clickTo(coordinates: Coordinates): void;
    rightClickTo(coordinates: Coordinates): void;
    dblClickTo(coordinates: Coordinates): void;
    keydown(payload: Partial<KeyboardEvent>): any;
    keyup(payload: object): any;
    keypress(event: Partial<KeyboardEvent>): void;
    scroll({ x, y, deltaX, deltaY }: {
        x: number;
        y: number;
        deltaX: number;
        deltaY: number;
    }): void;
    private getMouseEventPayload;
    private getAbsoluteCoordinates;
    private getElementFromPoint;
    private setFocus;
    private fireEvent;
    private isScrollable;
    private isScrollableX;
    private isScrollableY;
}
