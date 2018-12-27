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
var KeydownAction = /** @class */ (function (_super) {
    __extends(KeydownAction, _super);
    function KeydownAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = KeydownAction.type;
        return _this;
    }
    KeydownAction.prototype.performEvent = function (dom, stack) {
        // TBI
    };
    KeydownAction.handleEvent = function (host, event) {
        return new KeydownAction({
            which: event.which
        });
    };
    KeydownAction.type = base_1.ActionsName.KEYDOWN;
    KeydownAction.eventName = 'keydown';
    return KeydownAction;
}(base_1.BaseAction));
exports.KeydownAction = KeydownAction;
//# sourceMappingURL=KeydownAction.js.map