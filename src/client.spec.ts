import { Client } from "./client";
import { AbstractTransport } from "./transports";
import { DomController } from "./dom";
import { PreoccupyAction } from "./actions/base";

describe('Client', () => {
    let client: Client;
    let transportMock: AbstractTransport;
    let domMock: DomController;

    let Action;
    let performEventSpy: jest.SpyInstance;
    let handshakeSpy: jest.SpyInstance;
    let disconnectSpy: jest.SpyInstance;

    beforeEach(() => {
        handshakeSpy = jest.fn();
        disconnectSpy = jest.fn();

        transportMock = {
            on() {},
            publish() {},
            disconnect: <any>disconnectSpy,
            handshake: <any>handshakeSpy
        };

        domMock = {
            clickTo: jest.fn() as any,
            destroy: jest.fn() as any
        } as DomController;

        client = new Client(transportMock, domMock);

        performEventSpy = jest.fn();

        Action = class implements PreoccupyAction {
            constructor(payload: object) {}
            performEvent = <any>performEventSpy;
        };

        ((<any>client).actions as Map<string, any>).set('abstract', Action);
    });


    describe('start', () => {
        it('should handshake the transport', () => {
            client.start();

            expect(handshakeSpy).toBeCalled();
        });
    });

    describe('stop', () => {
        it('should disconnect the transport', () => {
            client.stop();

            expect(disconnectSpy).toBeCalled();
        });

        it('should destroy the DOM Controller', () => {
            client.stop();

            expect(domMock.destroy).toBeCalled();
        });
    });

    describe('perform', () => {
        it('should call action methods', () => {
            client.perform({type: 'abstract', payload: {} });

            expect(performEventSpy).toBeCalled();
        });

        it('should not call action methods of unregistred actions', () => {
            client.perform({type: 'foobarbaz', payload: {} });

            expect(performEventSpy).not.toBeCalled();
        });
    });
});
