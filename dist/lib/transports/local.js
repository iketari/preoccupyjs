"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_1 = require("./abstract");
var LocalTransport = /** @class */ (function () {
    function LocalTransport(preifx, stackSize) {
        if (preifx === void 0) { preifx = 'prefix'; }
        if (stackSize === void 0) { stackSize = 10; }
        this.preifx = preifx;
        this.stackSize = stackSize;
        this.connected = false;
        this.listeners = {};
        this.publishedMessages = [];
        this.storage = localStorage;
    }
    LocalTransport.prototype.handshake = function () {
        if (this.connected) {
            this.trigger(abstract_1.TransportEvents.connect);
        }
        else {
            this.connect();
        }
    };
    LocalTransport.prototype.on = function (eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    };
    ;
    LocalTransport.prototype.publish = function (action) {
        var message = new abstract_1.Message('action', action);
        this.publishedMessages.push(message);
        this.storage.setItem(this.preifx + "|" + message.type + "|" + message.hash, message.serialize());
        if (this.publishedMessages.length > this.stackSize) {
            var messageToDelete = this.publishedMessages.shift();
            if (messageToDelete != null) {
                this.storage.removeItem(this.preifx + "|" + messageToDelete.type + "|" + messageToDelete.hash);
            }
        }
    };
    ;
    LocalTransport.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'storage':
                this.onStorageMessage(event);
                break;
            default:
                break;
        }
    };
    LocalTransport.prototype.connect = function () {
        this.cleanUp();
        window.removeEventListener('storage', this);
        window.addEventListener('storage', this);
        this.connected = true;
        this.trigger(abstract_1.TransportEvents.connect);
    };
    LocalTransport.prototype.cleanUp = function () {
        var _this = this;
        Object.keys(localStorage).forEach(function (key) {
            if (key.startsWith(_this.preifx)) {
                localStorage.removeItem(key);
            }
        });
    };
    LocalTransport.prototype.onStorageMessage = function (_a) {
        var key = _a.key, newValue = _a.newValue;
        if (key && newValue && key.startsWith(this.preifx)) {
            var message = abstract_1.Message.parse(key + '|' + newValue);
            if (this.isExternalMessage(message)) {
                this.trigger(abstract_1.TransportEvents.action, message);
            }
        }
    };
    LocalTransport.prototype.trigger = function (type, detail) {
        if (Array.isArray(this.listeners[type])) {
            this.listeners[type].forEach(function (callback) { return callback({
                type: type,
                detail: detail
            }); });
        }
        ;
    };
    LocalTransport.prototype.isExternalMessage = function (message) {
        return this.publishedMessages.find(function (ownMessage) { return ownMessage.hash === message.hash; }) == null;
    };
    return LocalTransport;
}());
exports.LocalTransport = LocalTransport;
//# sourceMappingURL=local.js.map