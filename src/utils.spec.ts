import { pick, css } from './utils';

describe('Utils', () => {
  describe('pick', () => {
    it('should return an object', () => {
      const obj = {
        foo: true,
        bar: true,
        baz: true
      };

      const actualt = pick(obj, ['foo', 'baz']);

      expect(actualt).toEqual({ foo: true, baz: true });
    });
  });

  describe('css', () => {
    it('should setup css props', () => {
      const el = document.createElement('div');
      css(el, { display: 'flex', 'font-size': '13px' });

      expect(el.style).toMatchInlineSnapshot(`
CSSStyleDeclaration {
  "0": "display",
  "1": "font-size",
  "_importants": Object {
    "display": undefined,
    "font-size": undefined,
  },
  "_length": 2,
  "_onChange": [Function],
  "_values": Object {
    "display": "flex",
    "font-size": "13px",
  },
}
`);
    });
  });
});
