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
var KeyupAction = /** @class */ (function (_super) {
    __extends(KeyupAction, _super);
    function KeyupAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = KeyupAction.type;
        return _this;
    }
    KeyupAction.prototype.performEvent = function (dom, stack) {
        // dom.k
    };
    KeyupAction.handleEvent = function (host, event) {
        return new KeyupAction({
            which: event.which
        });
    };
    KeyupAction.type = base_1.ActionsName.KEYUP;
    KeyupAction.eventName = 'keyup';
    return KeyupAction;
}(base_1.BaseAction));
exports.KeyupAction = KeyupAction;
//# sourceMappingURL=KeyupAction.js.map