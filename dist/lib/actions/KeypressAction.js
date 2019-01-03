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
var KeypressAction = /** @class */ (function (_super) {
    __extends(KeypressAction, _super);
    function KeypressAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = KeypressAction.type;
        return _this;
    }
    KeypressAction.prototype.performEvent = function (dom, stack) {
        dom.keypress(this.payload);
    };
    KeypressAction.handleEvent = function (host, event) {
        return new KeypressAction({
            key: event.key,
            code: event.code,
            keyCode: event.keyCode
        });
    };
    KeypressAction.type = base_1.ActionsName.KEYPRESS;
    KeypressAction.eventName = 'keypress';
    return KeypressAction;
}(base_1.BaseAction));
exports.KeypressAction = KeypressAction;
//# sourceMappingURL=KeypressAction.js.map