"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transports_1 = require("./transports");
var actions_1 = require("./actions");
var Client = /** @class */ (function () {
    function Client(transport, dom) {
        var _this = this;
        this.dom = dom;
        transport.on(transports_1.TransportEvents.connect, function (event) {
            console.log('Clinet', event);
            _this.calibrate();
            _this.dom.init();
        });
        transport.on(transports_1.TransportEvents.action, function (event) {
            var message = event.detail;
            console.log('Clinet message', message.data);
            _this.perform(message.data); // TODO: Transport for Actions?
        });
    }
    Client.prototype.calibrate = function () {
        // to implement
    };
    Client.prototype.perform = function (action) {
        switch (action.type) {
            case actions_1.ActionsName.MOVE_TO:
                this.dom.moveCursorTo(action.payload);
                break;
            case actions_1.ActionsName.CLICK_TO:
                this.dom.clickTo(action.payload);
                break;
            case actions_1.ActionsName.DBL_CLICK_TO:
                this.dom.dblClickTo(action.payload);
                break;
            case actions_1.ActionsName.KEYPRESS:
                this.dom.keypress(action.payload);
                break;
            case actions_1.ActionsName.SCROLL_BY:
                this.dom.scroll(action.payload);
                break;
            default:
                break;
        }
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map