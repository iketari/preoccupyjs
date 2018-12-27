"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var transports_1 = require("./transports");
var STACK_LENGTH = 30;
var Client = /** @class */ (function () {
    function Client(transport, dom) {
        var _this = this;
        this.dom = dom;
        this.actionStack = [];
        this.actions = actions_1.actionMap;
        transport.on(transports_1.TransportEvents.connect, function (event) {
            _this.dom.init();
        });
        transport.on(transports_1.TransportEvents.action, function (event) {
            var message = event.detail;
            _this.perform(message.data);
        });
    }
    Client.prototype.perform = function (rawAction) {
        if (this.actions.has(rawAction.type)) {
            var Action = this.actions.get(rawAction.type);
            var action = new Action(rawAction.payload);
            action.performEvent(this.dom, this.actionStack);
            this.actionStack.push(action);
            while (this.actionStack.length > STACK_LENGTH) {
                this.actionStack.shift();
            }
        }
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map