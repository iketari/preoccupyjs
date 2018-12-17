export class DomController {

    private cursorEl: HTMLElement = document.createElement('div');

    constructor(private el: HTMLElement) {}

    public init() {
        this.createCursorEl();
        this.moveCursorTo(0, 0);
    }

    public moveCursorTo(x: number, y: number) {
        this.cursorEl.style.top = `${x}px`;
        this.cursorEl.style.left = `${y}px`;
    }

    public clickTo(x: number, y: number) {
        const el = <HTMLElement>this.getElementFromPoint(x, y);
        this.fireMouseEvent('click', el);
    }

    private css(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
        for (const [prop, value] of Object.entries(styles)) {
            el.style.setProperty(prop, value);
        }
    }

    private getElementFromPoint(x: number, y: number) {
        return document.elementFromPoint(x, y);
    }

    private fireMouseEvent(type: string, el: HTMLElement): boolean {
        const event = new MouseEvent(type, {
            bubbles: true,
            cancelable: true
        });

        return el.dispatchEvent(event);
    }

    private createCursorEl() {
        this.css(this.cursorEl, {
            'border': '1px solid red'
        });
        this.cursorEl.innerHTML = 'CURSOR';
        this.el.append(this.cursorEl);
    }

}