export class Message {
  public hash: string;
  constructor(public type: string, public data: object, hash?: string) {
    this.hash = hash || Math.random() * 10e6 + '';
  }
  public serialize(): string {
    return JSON.stringify(this.data);
  }
  static parse(src: string): Message {
    const [_prefix, type, hash, dataSrc] = src.split('|');
    return new Message(type, JSON.parse(dataSrc), hash);
  }
}
