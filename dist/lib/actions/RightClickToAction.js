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
var RightClickToAction = /** @class */ (function (_super) {
    __extends(RightClickToAction, _super);
    function RightClickToAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = RightClickToAction.type;
        return _this;
    }
    RightClickToAction.prototype.performEvent = function (dom, stack) {
        dom.rightClickTo(this.payload);
    };
    RightClickToAction.handleEvent = function (host, event) {
        event.preventDefault();
        var payload = host.getRelativeCoordinate(event);
        return new RightClickToAction(payload);
    };
    RightClickToAction.type = base_1.ActionsName.RIGHT_CLICK_TO;
    RightClickToAction.eventName = 'contextmenu';
    return RightClickToAction;
}(base_1.BaseAction));
exports.RightClickToAction = RightClickToAction;
//# sourceMappingURL=RightClickToAction.js.map