"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var abstract_1 = require("./abstract");
var RxjsTransport = /** @class */ (function () {
    function RxjsTransport(options) {
        this.listeners = {};
        this.connected = false;
        this.subject = options.subject;
        this.filterFn = options.filterFn || (function (rawData) { return rawData != null; });
        this.wrapFn = options.wrapFn || (function (message) { return ({ data: message.serialize() }); });
    }
    RxjsTransport.prototype.on = function (eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    };
    ;
    RxjsTransport.prototype.publish = function (action) {
        var message = new abstract_1.Message('action', action);
        this.subject.next(this.wrapFn(message));
    };
    ;
    RxjsTransport.prototype.handshake = function () {
        if (this.connected) {
            this.trigger(abstract_1.TransportEvents.connect);
        }
        else {
            this.connect();
        }
    };
    RxjsTransport.prototype.connect = function () {
        var _this = this;
        this.subject
            .pipe(operators_1.filter(function (rawData) { return _this.filterFn(rawData); }))
            .subscribe(function (data) {
            var message = abstract_1.Message.parse('|||' + data.data);
            _this.trigger(abstract_1.TransportEvents.action, message);
        });
        this.trigger(abstract_1.TransportEvents.connect, null);
    };
    RxjsTransport.prototype.trigger = function (type, detail) {
        if (Array.isArray(this.listeners[type])) {
            this.listeners[type].forEach(function (callback) { return callback({
                type: type,
                detail: detail
            }); });
        }
        ;
    };
    return RxjsTransport;
}());
exports.RxjsTransport = RxjsTransport;
//# sourceMappingURL=rxjs.js.map