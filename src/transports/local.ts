import { PreoccupyAction } from './../actions/base';
import { AbstractTransport, TransportEvents } from './abstract';
import { EventEmitter } from './EventEmitter';
import { Message } from './Message';

export class LocalTransport extends EventEmitter implements AbstractTransport {
  private connected: boolean = false;
  private publishedMessages: Message[] = [];
  private storage: Storage = localStorage;

  constructor(private preifx: string = 'prefix', private stackSize: number = 10) {
    super();
  }

  public handshake() {
    if (this.connected) {
      this.trigger(TransportEvents.connect);
    } else {
      this.connect();
    }
  }

  public disconnect() {
    this.cleanUp();
    window.removeEventListener('storage', this);
    this.off();

    this.connected = false;
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

  private isExternalMessage(message: Message): boolean {
    return !this.publishedMessages.find(ownMessage => ownMessage.hash === message.hash);
  }
}
