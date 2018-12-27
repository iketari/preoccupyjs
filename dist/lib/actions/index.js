"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoveToAction_1 = require("./MoveToAction");
var ClickToAction_1 = require("./ClickToAction");
var KeypressAction_1 = require("./KeypressAction");
var ScrollByAction_1 = require("./ScrollByAction");
var DblClickToAction_1 = require("./DblClickToAction");
var KeydownAction_1 = require("./KeydownAction");
var KeyupAction_1 = require("./KeyupAction");
exports.actionMap = new Map([
    [MoveToAction_1.MoveToAction.type, MoveToAction_1.MoveToAction],
    [ClickToAction_1.ClickToAction.type, ClickToAction_1.ClickToAction],
    [KeydownAction_1.KeydownAction.type, KeydownAction_1.KeydownAction],
    [KeypressAction_1.KeypressAction.type, KeypressAction_1.KeypressAction],
    [KeyupAction_1.KeyupAction.type, KeyupAction_1.KeyupAction],
    [MoveToAction_1.MoveToAction.type, MoveToAction_1.MoveToAction],
    [ScrollByAction_1.ScrollByAction.type, ScrollByAction_1.ScrollByAction],
    [DblClickToAction_1.DblClickToAction.type, DblClickToAction_1.DblClickToAction]
]);
//# sourceMappingURL=index.js.map