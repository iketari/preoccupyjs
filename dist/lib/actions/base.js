"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionsName;
(function (ActionsName) {
    ActionsName["BASE"] = "[Action] Base";
    ActionsName["MOVE_TO"] = "[Action] Move To";
    ActionsName["CLICK_TO"] = "[Action] Click To";
    ActionsName["DBL_CLICK_TO"] = "[Action] Double Click To";
    ActionsName["KEYPRESS"] = "[Action] Keypress";
    ActionsName["KEYDOWN"] = "[Action] Keydown";
    ActionsName["KEYUP"] = "[Action] Keyup";
    ActionsName["SCROLL_BY"] = "[Action] Scroll By";
})(ActionsName = exports.ActionsName || (exports.ActionsName = {}));
var BaseAction = /** @class */ (function () {
    function BaseAction(payload) {
        if (payload === void 0) { payload = {}; }
        this.payload = payload;
        this.type = BaseAction.type;
    }
    BaseAction.handleEvent = function (host, event) {
        console.warn("You have to implement a static method handleEvent for " + this.type + " action");
        return {};
    };
    ;
    BaseAction.type = ActionsName.BASE;
    return BaseAction;
}());
exports.BaseAction = BaseAction;
//# sourceMappingURL=base.js.map