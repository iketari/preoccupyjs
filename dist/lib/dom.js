"use strict";
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
var cursor_1 = require("./cursor");
var utils_1 = require("./utils");
var CURSOR = 1;
var DomController = /** @class */ (function () {
    function DomController(el) {
        this.el = el;
        this.cursor = new cursor_1.Cursor();
    }
    DomController.prototype.init = function () {
        this.cursor.moveTo({ x: 0, y: 0 });
        var bodyEl = this.el.querySelector('body');
        if (getComputedStyle(this.el).position !== 'static') {
            this.el.appendChild(this.cursor.getEl());
        }
        else {
            bodyEl.appendChild(this.cursor.getEl());
        }
    };
    DomController.prototype.moveCursorTo = function (coordinates) {
        var absCoordinates = this.getAbsoluteCoordinates(coordinates);
        this.cursor.moveTo(absCoordinates);
    };
    DomController.prototype.clickTo = function (coordinates) {
        var absCoordinates = this.getAbsoluteCoordinates(coordinates);
        var el = this.getElementFromPoint(absCoordinates);
        this.setFocus(el);
        var options = {
            clientX: absCoordinates.x,
            clientY: absCoordinates.y,
            view: window
        };
        this.fireEvent('mousedown', el, options);
        this.fireEvent('mouseup', el, options);
        this.fireEvent('click', el, options);
    };
    DomController.prototype.dblClickTo = function (coordinates) {
        var el = this.getElementFromPoint(this.getAbsoluteCoordinates(coordinates));
        this.fireEvent('dblclick', el);
    };
    DomController.prototype.keydown = function (payload) {
        var el = document.activeElement;
        if (el == null) {
            return;
        }
        this.fireEvent('keydown', el, payload);
    };
    DomController.prototype.keyup = function (payload) {
        var el = document.activeElement;
        if (el == null) {
            return;
        }
        this.fireEvent('keyup', el, payload);
    };
    DomController.prototype.keypress = function (_a) {
        var which = _a.which;
        var el = document.activeElement;
        if (el == null) {
            return;
        }
        this.fireEvent('keypress', el);
        switch (el.tagName.toLowerCase()) {
            case 'textarea':
            case 'input':
                el.value += String.fromCharCode(which);
            default:
                el.innerHTML += String.fromCharCode(which);
                break;
        }
        this.fireEvent('input', el);
    };
    DomController.prototype.scroll = function (_a) {
        var x = _a.x, y = _a.y, deltaX = _a.deltaX, deltaY = _a.deltaY;
        var initialEl = this.getElementFromPoint(this.getAbsoluteCoordinates({ x: x, y: y }));
        var scrollableEl;
        var el = initialEl;
        while (el.parentElement) {
            if (this.isScrollable(el)) {
                scrollableEl = el;
                break;
            }
            el = el.parentElement;
        }
        if (scrollableEl) {
            scrollableEl.scrollBy({
                left: deltaX,
                top: deltaY
            });
        }
        this.fireEvent('wheel', el);
        this.fireEvent('scroll', el);
    };
    DomController.prototype.getAbsoluteCoordinates = function (_a) {
        var x = _a.x, y = _a.y;
        var _b = this.el, clientHeight = _b.clientHeight, clientWidth = _b.clientWidth;
        return {
            x: x * clientWidth,
            y: y * clientHeight
        };
    };
    DomController.prototype.getElementFromPoint = function (_a) {
        var x = _a.x, y = _a.y;
        return document.elementFromPoint(x - CURSOR, y - CURSOR);
    };
    DomController.prototype.setFocus = function (el) {
        if (typeof el.focus === 'function') {
            el.focus();
        }
    };
    DomController.prototype.fireEvent = function (type, el, options) {
        if (options === void 0) { options = {}; }
        var event;
        var defaultOptions = {
            bubbles: true,
            cancelable: true
        };
        switch (type) {
            case 'click':
            case 'dblclick':
            case 'mousedown':
            case 'mouseup':
                event = new MouseEvent(type, __assign({}, defaultOptions, options));
                break;
            case 'keypress':
            case 'keydown':
            case 'keyup':
                event = new KeyboardEvent(type, __assign({}, defaultOptions, options));
                break;
            default:
                event = new Event(type, __assign({}, defaultOptions, options));
                break;
        }
        if (window[utils_1.DEBUG_FLAG]) {
            console.log('fired', event);
        }
        return el.dispatchEvent(event);
    };
    DomController.prototype.isScrollable = function (el) {
        return el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
    };
    return DomController;
}());
exports.DomController = DomController;
//# sourceMappingURL=dom.js.map