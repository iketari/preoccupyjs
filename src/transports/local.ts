import { PreoccupyAction } from './../actions/base';
import { AbstractTransport, Listener, Message, TransportEvents } from './abstract';

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
  }

  public publish(action: PreoccupyAction): void {
    const message = new Message('action', action);

    this.publishedMessages.push(message);
    this.storage.setItem(`${this.preifx}|${message.type}|${message.hash}`, message.serialize());

    if (this.publishedMessages.length > this.stackSize) {
      const messageToDelete = this.publishedMessages.shift();
      if (messageToDelete) {
        this.storage.removeItem(`${this.preifx}|${messageToDelete.type}|${messageToDelete.hash}`);
      }
    }
  }

  public handleEvent(event: Event) {
    switch (event.type) {
      case 'storage':
        this.onStorageMessage(event as StorageEvent);
        break;

      default:
        break;
    }
  }

  private connect() {
    this.cleanUp();
    window.removeEventListener('storage', this);
    window.addEventListener('storage', this);
    this.connected = true;
    this.trigger(TransportEvents.connect);
  }

  private cleanUp() {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(this.preifx)) {
        localStorage.removeItem(key);
      }
    });
  }

  private onStorageMessage({ key, newValue }: StorageEvent) {
    if (key && newValue && key.startsWith(this.preifx)) {
      const message = Message.parse(key + '|' + newValue);

      if (this.isExternalMessage(message)) {
        this.trigger(TransportEvents.action, message);
      }
    }
  }

  private trigger(type: TransportEvents, detail?: any) {
    if (Array.isArray(this.listeners[type])) {
      this.listeners[type].forEach(callback =>
        callback({
          type,
          detail
        })
      );
    }
  }

  private isExternalMessage(message: Message): boolean {
    return !this.publishedMessages.find(ownMessage => ownMessage.hash === message.hash);
  }
}
