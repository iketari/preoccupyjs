"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoveToAction_1 = require("./MoveToAction");
var ClickToAction_1 = require("./ClickToAction");
var KeypressAction_1 = require("./KeypressAction");
var ScrollByAction_1 = require("./ScrollByAction");
var DblClickToAction_1 = require("./DblClickToAction");
var KeydownAction_1 = require("./KeydownAction");
var KeyupAction_1 = require("./KeyupAction");
var RightClickToAction_1 = require("./RightClickToAction");
var MouseDownToAction_1 = require("./MouseDownToAction");
var MouseUpToAction_1 = require("./MouseUpToAction");
exports.actionMap = new Map([
    MoveToAction_1.MoveToAction,
    ClickToAction_1.ClickToAction,
    KeydownAction_1.KeydownAction,
    KeypressAction_1.KeypressAction,
    KeyupAction_1.KeyupAction,
    MoveToAction_1.MoveToAction,
    ScrollByAction_1.ScrollByAction,
    DblClickToAction_1.DblClickToAction,
    RightClickToAction_1.RightClickToAction,
    MouseDownToAction_1.MouseDownToAction,
    MouseUpToAction_1.MouseUpToAction
].map(function (Action) { return [Action.type, Action]; }));
//# sourceMappingURL=index.js.map