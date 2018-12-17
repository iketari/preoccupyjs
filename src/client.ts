import { PreoccupyTransport, TransportEvents, Message } from './transports';
import { ActionUnion, ActionsName } from './actions';
import { DomController } from './dom';

export default class Client {
    constructor(
        transport: PreoccupyTransport,
        private dom: DomController
    ) {
        transport.on(TransportEvents.connect, (event) => {
            console.log(event);
            this.calibrate();
        });

        transport.on(TransportEvents.action, (event) => {
            const message: Message = event.detail;
            this.perform(message.data as ActionUnion); // TODO: Transport for Actions?
        });
    }

    public calibrate() {
        // to implement
    }

    public perform(action: ActionUnion) {
        switch (action.type) {
            case ActionsName.MOVE_TO:
                this.dom.moveCursorTo(action.payload.x, action.payload.y);
                break;

            case ActionsName.CLICK_TO:
                this.dom.clickTo(action.payload.x, action.payload.y);

            default:
                break;
        }
    }

}