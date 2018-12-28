"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var utils_1 = require("../utils");
var KeydownAction = /** @class */ (function (_super) {
    __extends(KeydownAction, _super);
    function KeydownAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = KeydownAction.type;
        return _this;
    }
    KeydownAction.prototype.performEvent = function (dom, stack) {
        dom.keydown(this.payload);
    };
    KeydownAction.handleEvent = function (host, event) {
        var eventData = utils_1.pick(event, [
            'which',
            'key',
            'code',
            'ctrlKey',
            'keyCode',
            'metaKey',
            'shiftKey',
            'type'
        ]);
        return new KeydownAction(eventData);
    };
    KeydownAction.type = base_1.ActionsName.KEYDOWN;
    KeydownAction.eventName = 'keydown';
    return KeydownAction;
}(base_1.BaseAction));
exports.KeydownAction = KeydownAction;
//# sourceMappingURL=KeydownAction.js.map