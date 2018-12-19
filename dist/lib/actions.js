"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionsName;
(function (ActionsName) {
    ActionsName["MOVE_TO"] = "[Action] Move To";
    ActionsName["CLICK_TO"] = "[Action] Click To";
    ActionsName["DBL_CLICK_TO"] = "[Action] Double Click To";
    ActionsName["KEYPRESS"] = "[Action] Keypress";
    ActionsName["SCROLL_BY"] = "[Action] Scroll By";
})(ActionsName = exports.ActionsName || (exports.ActionsName = {}));
var MoveToAction = /** @class */ (function () {
    function MoveToAction(payload) {
        this.payload = payload;
        this.type = ActionsName.MOVE_TO;
    }
    ;
    return MoveToAction;
}());
exports.MoveToAction = MoveToAction;
var ClickToAction = /** @class */ (function () {
    function ClickToAction(payload) {
        this.payload = payload;
        this.type = ActionsName.CLICK_TO;
    }
    ;
    return ClickToAction;
}());
exports.ClickToAction = ClickToAction;
var KeypressAction = /** @class */ (function () {
    function KeypressAction(payload) {
        this.payload = payload;
        this.type = ActionsName.KEYPRESS;
    }
    ;
    return KeypressAction;
}());
exports.KeypressAction = KeypressAction;
var ScrollByAction = /** @class */ (function () {
    function ScrollByAction(payload) {
        this.payload = payload;
        this.type = ActionsName.SCROLL_BY;
    }
    ;
    return ScrollByAction;
}());
exports.ScrollByAction = ScrollByAction;
var DblClickToAction = /** @class */ (function () {
    function DblClickToAction(payload) {
        this.payload = payload;
        this.type = ActionsName.DBL_CLICK_TO;
    }
    ;
    return DblClickToAction;
}());
exports.DblClickToAction = DblClickToAction;
//# sourceMappingURL=actions.js.map