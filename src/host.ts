import { AbstractTransport, TransportEvents } from './transports';
import { MoveToAction, ClickToAction, KeypressAction, ScrollByAction, DblClickToAction } from './actions';

export interface Coordinates {
    x: number;
    y: number;
}

export class Host {
    constructor(private transport: AbstractTransport, private el: HTMLElement) {
        transport.on(TransportEvents.connect, (event) => {
            console.log('HOST', event);
        });

        this.initEvents();
    }

    public moveCursorTo(event: MouseEvent) {
        const coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new MoveToAction(coordinates));
    }

    public clickTo(event: MouseEvent) {
        const coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new ClickToAction(coordinates));
    }

    public dblClickTo(event: MouseEvent) {
        const coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new DblClickToAction(coordinates));
    }

    public keypress(which: number) {
        this.transport.publish(new KeypressAction({which}));
    }

    public wheel(event: WheelEvent) {
        const coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new ScrollByAction({
            ...coordinates,
            deltaX: event.deltaX,
            deltaY: event.deltaY
        }));
    }

    private initEvents() {
        this.el.addEventListener('mousemove', (event) => {
            this.moveCursorTo(event);
        });

        this.el.addEventListener('click', (event) => {
            this.clickTo(event);
        });

        this.el.addEventListener('keypress', (event) => {
            this.keypress(event.which);
        });

        this.el.addEventListener('wheel', (event) => {
            this.wheel(event);
        });

        this.el.addEventListener('dblclick', (event) => {
            this.dblClickTo(event);
        })
    }

    private getRelativeCoordinate(event: MouseEvent): {x: number, y: number} {
        const { offsetX, offsetY } = event;
        const { clientHeight, clientWidth } = <HTMLDivElement>event.target;

        return {
            x: offsetX / clientWidth,
            y: offsetY / clientHeight
        };
    }
}
