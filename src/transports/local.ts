import { PreoccupyTransport, TransportEvents, TransportEvent, Listener, Message } from './abstract';
import { PreoccupyAction } from '../actions';

export class LocalPreoccupyTransport implements PreoccupyTransport {

    private listeners: { [prop: string]: Listener[] } = {};
    private publishedMessages: Message[] = [];
    private storage: Storage = localStorage;

    constructor(private preifx: string = 'prefix', private stackSize: number = 10) {
        window.addEventListener('storage', (event) => this.onStorageMessage(event));
        this.trigger(TransportEvents.connect);
    }

    public on(eventName: TransportEvents, callback: Listener): void {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    };

    public publish(action: PreoccupyAction): void {
        const message = new Message(action.type, action.payload || {});

        this.publishedMessages.push(message);
        this.storage.setItem(`${this.preifx}|${message.hash}`, message.serialize());

        if (this.publishedMessages.length > this.stackSize) {
            const messageToDelete = this.publishedMessages.shift();
            if (messageToDelete != null) {
                this.storage.removeItem(`${this.preifx}|${messageToDelete.hash}`);
            }
        }
    };

    private onStorageMessage({key, newValue}: StorageEvent) {
        if (key && newValue && key.startsWith(this.preifx)) {
            const message = Message.parse(newValue);

            if (this.isExternalMessage(message)) {
                this.trigger(TransportEvents.action, message);
            }
        }
    }

    private trigger(type: TransportEvents, detail?: any) {
        if (Array.isArray(this.listeners[type])) {
            this.listeners[type].forEach((callback) => callback({
                type,
                detail
            }));
        };
    }

    private isExternalMessage(message: Message): boolean {
        return this.publishedMessages.find((ownMessage) => ownMessage.hash === message.hash) === null;
    }
}