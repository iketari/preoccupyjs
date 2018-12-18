import { AbstractTransport, TransportEvents, Message } from './transports';
import { ActionUnion, ActionsName, MoveToAction, ClickToAction, KeypressAction, ScrollByAction } from './actions';
import { DomController } from './dom';

export class Client {
    constructor(
        transport: AbstractTransport,
        private dom: DomController
    ) {
        transport.on(TransportEvents.connect, (event) => {
            console.log('Clinet', event);
            this.calibrate();
            this.dom.init();
        });

        transport.on(TransportEvents.action, (event) => {
            const message: Message = event.detail;

            console.log('Clinet message', message.data)
            this.perform(message.data as ActionUnion); // TODO: Transport for Actions?
        });
    }

    public calibrate() {
        // to implement
    }

    public perform(action: ActionUnion) {
        switch (action.type) {
            case ActionsName.MOVE_TO:
                this.dom.moveCursorTo((<MoveToAction>action).payload);
                break;

            case ActionsName.CLICK_TO:
                this.dom.clickTo((<ClickToAction>action).payload);
                break;

            case ActionsName.KEYPRESS:
                this.dom.keypress((<KeypressAction>action).payload);
                break;

            case ActionsName.SCROLL_BY:
                this.dom.scroll((<ScrollByAction>action).payload);
                break;

            default:
                break;
        }
    }

}