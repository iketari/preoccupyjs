"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransportEvents;
(function (TransportEvents) {
    TransportEvents[TransportEvents["connect"] = 0] = "connect";
    TransportEvents[TransportEvents["disconnect"] = 1] = "disconnect";
    TransportEvents[TransportEvents["action"] = 2] = "action";
})(TransportEvents = exports.TransportEvents || (exports.TransportEvents = {}));
var Message = /** @class */ (function () {
    function Message(type, data, hash) {
        this.type = type;
        this.data = data;
        this.hash = hash || Math.random() * 10e6 + '';
    }
    Message.prototype.serialize = function () {
        return JSON.stringify(this.data);
    };
    Message.parse = function (src) {
        var _a = src.split('|'), _prefix = _a[0], type = _a[1], hash = _a[2], dataSrc = _a[3];
        return new Message(type, JSON.parse(dataSrc), hash);
    };
    return Message;
}());
exports.Message = Message;
;
//# sourceMappingURL=abstract.js.map