export function css(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  for (const [prop, value] of Object.entries(styles)) {
    el.style.setProperty(prop, value);
  }
}

export function pick<T>(src: any, fields: string[] = []): Partial<T> {
  return fields.reduce(
    (result: any, field: string) => {
      result[field] = src[field];
      return result;
    },
    {} as Partial<T>
  );
}

export const DEBUG_FLAG = 'preoccupydebug';
