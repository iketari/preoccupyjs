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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var ScrollByAction = /** @class */ (function (_super) {
    __extends(ScrollByAction, _super);
    function ScrollByAction(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        _this.type = ScrollByAction.type;
        return _this;
    }
    ScrollByAction.prototype.performEvent = function (dom, stack) {
        dom.scroll(this.payload);
    };
    ScrollByAction.handleEvent = function (host, event) {
        var coordinates = host.getRelativeCoordinate(event);
        return new ScrollByAction(__assign({}, coordinates, { deltaX: event.deltaX, deltaY: event.deltaY }));
    };
    ScrollByAction.type = base_1.ActionsName.SCROLL_BY;
    ScrollByAction.eventName = 'mousewheel';
    return ScrollByAction;
}(base_1.BaseAction));
exports.ScrollByAction = ScrollByAction;
//# sourceMappingURL=ScrollByAction.js.map