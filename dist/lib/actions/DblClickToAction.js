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
var DblClickToAction = /** @class */ (function (_super) {
    __extends(DblClickToAction, _super);
    function DblClickToAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = DblClickToAction.type;
        return _this;
    }
    DblClickToAction.prototype.performEvent = function (dom, stack) {
        dom.dblClickTo(this.payload);
    };
    DblClickToAction.handleEvent = function (host, event) {
        var payload = host.getRelativeCoordinate(event);
        return new DblClickToAction(payload);
    };
    DblClickToAction.type = base_1.ActionsName.DBL_CLICK_TO;
    DblClickToAction.eventName = 'dblclick';
    return DblClickToAction;
}(base_1.BaseAction));
exports.DblClickToAction = DblClickToAction;
//# sourceMappingURL=DblClickToAction.js.map