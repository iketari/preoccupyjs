"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transports_1 = require("./transports");
var actions_1 = require("./actions");
var Host = /** @class */ (function () {
    function Host(transport, el) {
        var _this = this;
        this.transport = transport;
        this.el = el;
        this.actions = actions_1.actionMap;
        transport.on(transports_1.TransportEvents.connect, function (event) {
            _this.initEvents();
        });
    }
    Host.prototype.initEvents = function () {
        var _this = this;
        this.actions.forEach(function (Action) {
            _this.el.addEventListener(Action.eventName, function (event) {
                var action = Action.handleEvent(_this, event);
                _this.transport.publish(action);
            });
        });
    };
    Host.prototype.getRelativeCoordinate = function (event) {
        var offsetX = event.offsetX, offsetY = event.offsetY;
        var _a = event.target, clientHeight = _a.clientHeight, clientWidth = _a.clientWidth;
        return {
            x: offsetX / clientWidth,
            y: offsetY / clientHeight
        };
    };
    return Host;
}());
exports.Host = Host;
//# sourceMappingURL=host.js.map