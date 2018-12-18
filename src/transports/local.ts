import { AbstractTransport, TransportEvents, TransportEvent, Listener, Message } from './abstract';
import { PreoccupyAction } from '../actions';

export class LocalTransport implements AbstractTransport {

    private connected: boolean = false;
    private listeners: { [prop: string]: Listener[] } = {};
    private publishedMessages: Message[] = [];
    private storage: Storage = localStorage;

    constructor(private preifx: string = 'prefix', private stackSize: number = 10) {}

    public handshake() {
        if (this.connected) {
            this.trigger(TransportEvents.connect);
        } else {
            this.connect();
        }
    }

    public on(eventName: TransportEvents, callback: Listener): void {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    };

    public publish(action: PreoccupyAction): void {
        const message = new Message('action', action);

        this.publishedMessages.push(message);
        this.storage.setItem(`${this.preifx}|${message.type}|${message.hash}`, message.serialize());

        if (this.publishedMessages.length > this.stackSize) {
            const messageToDelete = this.publishedMessages.shift();
            if (messageToDelete != null) {
                this.storage.removeItem(`${this.preifx}|${messageToDelete.type}|${messageToDelete.hash}`);
            }
        }
    };

    private connect() {
        window.addEventListener('storage', (event) => this.onStorageMessage(event));
        this.connected = true;
        this.trigger(TransportEvents.connect);
    }

    private onStorageMessage({key, newValue}: StorageEvent) {
        if (key && newValue && key.startsWith(this.preifx)) {
            const message = Message.parse(key + '|' + newValue);

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
        return this.publishedMessages.find((ownMessage) => ownMessage.hash === message.hash) == null;
    }
}
