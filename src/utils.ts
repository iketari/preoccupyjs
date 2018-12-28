export function css(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
    for (const [prop, value] of Object.entries(styles)) {
        el.style.setProperty(prop, value);
    }
}
