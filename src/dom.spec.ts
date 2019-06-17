import { DomController } from './dom';

describe('DomController', () => {
  let dom: DomController;
  let domEl: HTMLElement;
  let elementUnderCursor: HTMLElement = null;

  beforeEach(() => {
    domEl = document.createElement('div');
    domEl.style.position = 'relative';

    dom = new DomController(domEl);

    document.elementFromPoint = () => elementUnderCursor;
  });

  afterEach(() => {});

  describe('init', () => {
    it('should init cursor', () => {
      (dom as any).cursor.moveTo = jest.fn();

      dom.init();

      expect((dom as any).cursor.moveTo).toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    it('shoud get rid of cursor element', () => {
      (dom as any).cursor.destroy = jest.fn();

      dom.destroy();

      expect((dom as any).cursor.destroy).toHaveBeenCalled();
    });
  });

  describe('moveCursorTo', () => {
    it('shoud move the cursor', () => {
      (dom as any).cursor.moveTo = jest.fn();
      elementUnderCursor = document.createElement('div');

      dom.moveCursorTo({ x: 100, y: 100 });

      expect((dom as any).cursor.moveTo).toHaveBeenCalled();
    });

    it('shoud not move the cursor if there is no element under it', () => {
      (dom as any).cursor.moveTo = jest.fn();
      elementUnderCursor = null;

      dom.moveCursorTo({ x: 100, y: 100 });

      expect((dom as any).cursor.moveTo).not.toHaveBeenCalled();
    });
  });

  describe('all public methods', () => {
    it('should not throw exceptions if there is no element', () => {
      elementUnderCursor = null;
      Object.defineProperty(document, 'activeElement', {
        get() {
          return null;
        }
      });

      dom.clickTo({ x: 0, y: 0 });
      dom.mouseDownTo({ x: 0, y: 0 });
      dom.mouseUpTo({ x: 0, y: 0 });
      dom.rightClickTo({ x: 0, y: 0, button: 1 });
      dom.dblClickTo({ x: 0, y: 0 });

      dom.keydown({});
      dom.keyup({});
      dom.keypress({});

      dom.scroll({ x: 0, y: 0, deltaX: 10, deltaY: 10 });
    });
  });
});
