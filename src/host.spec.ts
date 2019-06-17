import { Host } from './host';
import { AbstractTransport } from './transports';
import { PreoccupyAction, BaseAction } from './actions/base';

const MOCK_ACTION_TYPE = 'superevent';

describe('Host', () => {
  let host: Host;
  let padEl: HTMLElement;
  let transportMock: AbstractTransport;

  let Action: typeof BaseAction;
  let performEventSpy: jest.SpyInstance;
  let handshakeSpy: jest.SpyInstance;
  let disconnectSpy: jest.SpyInstance;

  beforeEach(() => {
    padEl = document.createElement('div');

    handshakeSpy = jest.fn();
    disconnectSpy = jest.fn();

    transportMock = {
      on() {},
      publish() {},
      disconnect: disconnectSpy as any,
      handshake: handshakeSpy as any
    };

    host = new Host(transportMock, padEl);

    performEventSpy = jest.fn();

    Action = class implements PreoccupyAction {
      static type: string = MOCK_ACTION_TYPE;
      public type: string = MOCK_ACTION_TYPE;
      static eventName: string = MOCK_ACTION_TYPE;
      constructor(public payload: object) {}
      performEvent = performEventSpy as any;

      static handleEvent = jest.fn();
    };

    ((host as any).actions as Map<string, any>).set('abstract', Action);
  });

  afterEach(() => {
    padEl.remove();
  });

  describe('start', () => {
    it('should handshake the transport', () => {
      host.start();

      expect(handshakeSpy).toBeCalled();
    });

    it('should set up listeneres for Actions', () => {
      host.start();

      const event = new Event(MOCK_ACTION_TYPE);
      padEl.dispatchEvent(event);

      expect(Action.handleEvent).toHaveBeenCalledWith(host, event);
    });
  });

  describe('stop', () => {
    it('should disconnect the transport', () => {
      host.stop();

      expect(disconnectSpy).toBeCalled();
    });
  });

  describe('getRelativeCoordinate', () => {
    it('should translate coordinates', () => {
      const event = new MouseEvent('mousemove');

      ['clientWidth', 'clientHeight'].forEach(prop => {
        //  DOM object modidifcation
        Object.defineProperty(padEl, prop, {
          get() {
            return 100;
          }
        });
      });

      ['offsetX', 'offsetY'].forEach(prop => {
        // Event object modificatiob
        Object.defineProperty(event, prop, {
          get() {
            return 4200;
          }
        });
      });

      padEl.dispatchEvent(event);

      const actual = host.getRelativeCoordinate(event);

      expect(actual).toMatchInlineSnapshot(`
Object {
  "x": 42,
  "y": 42,
}
`);
    });
  });
});
