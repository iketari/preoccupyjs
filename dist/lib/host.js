"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var transports_1 = require("./transports");
var actions_1 = require("./actions");
var Host = /** @class */ (function () {
    function Host(transport, el) {
        this.transport = transport;
        this.el = el;
        transport.on(transports_1.TransportEvents.connect, function (event) {
            console.log('HOST', event);
        });
        this.initEvents();
    }
    Host.prototype.moveCursorTo = function (event) {
        var coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new actions_1.MoveToAction(coordinates));
    };
    Host.prototype.clickTo = function (event) {
        var coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new actions_1.ClickToAction(coordinates));
    };
    Host.prototype.dblClickTo = function (event) {
        var coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new actions_1.DblClickToAction(coordinates));
    };
    Host.prototype.keypress = function (which) {
        this.transport.publish(new actions_1.KeypressAction({ which: which }));
    };
    Host.prototype.wheel = function (event) {
        var coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new actions_1.ScrollByAction(__assign({}, coordinates, { deltaX: event.deltaX, deltaY: event.deltaY })));
    };
    Host.prototype.initEvents = function () {
        var _this = this;
        this.el.addEventListener('mousemove', function (event) {
            _this.moveCursorTo(event);
        });
        this.el.addEventListener('click', function (event) {
            _this.clickTo(event);
        });
        this.el.addEventListener('keypress', function (event) {
            _this.keypress(event.which);
        });
        this.el.addEventListener('wheel', function (event) {
            _this.wheel(event);
        });
        this.el.addEventListener('dblclick', function (event) {
            _this.dblClickTo(event);
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