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
var ClickToAction = /** @class */ (function (_super) {
    __extends(ClickToAction, _super);
    function ClickToAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = ClickToAction.type;
        return _this;
    }
    ClickToAction.prototype.performEvent = function (dom, stack) {
        dom.clickTo(this.payload);
    };
    ClickToAction.handleEvent = function (host, event) {
        var payload = host.getRelativeCoordinate(event);
        return new ClickToAction(payload);
    };
    ClickToAction.type = base_1.ActionsName.CLICK_TO;
    ClickToAction.eventName = 'click';
    return ClickToAction;
}(base_1.BaseAction));
exports.ClickToAction = ClickToAction;
//# sourceMappingURL=ClickToAction.js.map