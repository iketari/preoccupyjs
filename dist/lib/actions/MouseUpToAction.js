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
var MouseUpToAction = /** @class */ (function (_super) {
    __extends(MouseUpToAction, _super);
    function MouseUpToAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = MouseUpToAction.type;
        return _this;
    }
    MouseUpToAction.prototype.performEvent = function (dom, stack) {
        dom.mouseUpTo(this.payload);
    };
    MouseUpToAction.handleEvent = function (host, event) {
        var payload = host.getRelativeCoordinate(event);
        return new MouseUpToAction(payload);
    };
    MouseUpToAction.type = base_1.ActionsName.MOUSE_UP_TO;
    MouseUpToAction.eventName = 'mouseup';
    return MouseUpToAction;
}(base_1.BaseAction));
exports.MouseUpToAction = MouseUpToAction;
//# sourceMappingURL=MouseUpToAction.js.map