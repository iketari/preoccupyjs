import { actionMap } from './actions';
import { PreoccupyAction, RawPreoccupyAction } from './actions/base';
import { DomController } from './dom';
import { AbstractTransport, Message, TransportEvents } from './transports';

const STACK_LENGTH = 30;

export class Client {
    private actionStack: PreoccupyAction[] = [];
    private actions: Map<string, any> = actionMap;
    constructor(
        transport: AbstractTransport,
        private dom: DomController
    ) {
        transport.on(TransportEvents.connect, (event) => {
            this.dom.init();
        });

        transport.on(TransportEvents.action, (event) => {
            const message: Message = event.detail;

            this.perform(message.data as RawPreoccupyAction);
        });
    }

    public perform(rawAction: RawPreoccupyAction) {
        if (this.actions.has(rawAction.type)) {
            const Action = this.actions.get(rawAction.type);
            const action = new Action(rawAction.payload) as PreoccupyAction;

            action.performEvent(this.dom, this.actionStack);
            this.actionStack.push(action);
            while (this.actionStack.length > STACK_LENGTH) {
                this.actionStack.shift();
            }
        }
    }

}