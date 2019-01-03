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
var MouseDownToAction = /** @class */ (function (_super) {
    __extends(MouseDownToAction, _super);
    function MouseDownToAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = MouseDownToAction.type;
        return _this;
    }
    MouseDownToAction.prototype.performEvent = function (dom, stack) {
        dom.mouseDownTo(this.payload);
    };
    MouseDownToAction.handleEvent = function (host, event) {
        var payload = host.getRelativeCoordinate(event);
        return new MouseDownToAction(payload);
    };
    MouseDownToAction.type = base_1.ActionsName.MOUSE_DOWN_TO;
    MouseDownToAction.eventName = 'mousedown';
    return MouseDownToAction;
}(base_1.BaseAction));
exports.MouseDownToAction = MouseDownToAction;
//# sourceMappingURL=MouseDownToAction.js.map