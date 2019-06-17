import { createClient, createHost } from './preoccupyjs';
import { Client } from './client';
import { Host } from './host';

describe('main', () => {
  describe('createClient', () => {
    it('should create a client instance', () => {
      const actual = createClient(document.createElement('div'));

      expect(actual).toBeInstanceOf(Client);
    });
  });

  describe('createHost', () => {
    it('should create a host instance', () => {
      const actual = createHost(document.createElement('div'));

      expect(actual).toBeInstanceOf(Host);
    });
  });
});
