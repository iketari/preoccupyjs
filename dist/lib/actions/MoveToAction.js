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
var MoveToAction = /** @class */ (function (_super) {
    __extends(MoveToAction, _super);
    function MoveToAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = MoveToAction.type;
        return _this;
    }
    MoveToAction.prototype.performEvent = function (dom, stack) {
        dom.moveCursorTo(this.payload);
    };
    MoveToAction.handleEvent = function (host, event) {
        var payload = host.getRelativeCoordinate(event);
        return new MoveToAction(payload);
    };
    MoveToAction.type = base_1.ActionsName.MOVE_TO;
    MoveToAction.eventName = 'mousemove';
    return MoveToAction;
}(base_1.BaseAction));
exports.MoveToAction = MoveToAction;
//# sourceMappingURL=MoveToAction.js.map