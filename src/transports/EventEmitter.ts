import { TransportEvents, Listener } from "./abstract";

export class EventEmitter {
    listeners: { [prop: string]: Listener[] } = {};

    off(type?: string) {
      if (type === undefined) {
        this.listeners = {};
        return;
      }

      this.listeners[type] = [];
    }

    on(type: TransportEvents, callback: Listener): void {
      if (!this.listeners[type]) {
        this.listeners[type] = [];
      }
      this.listeners[type].push(callback);
    }

    trigger(type: TransportEvents, detail?: any) {
      if (Array.isArray(this.listeners[type])) {
        this.listeners[type].forEach(callback =>
          callback({
            type,
            detail
          })
        );
      }
    }
}