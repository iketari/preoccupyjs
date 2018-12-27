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
var CURSOR = 1;
var DomController = /** @class */ (function () {
    function DomController(el) {
        this.el = el;
        this.cursorEl = document.createElement('div');
    }
    DomController.prototype.init = function () {
        this.createCursorEl();
        this.moveCursorTo({ x: 0, y: 0 });
    };
    DomController.prototype.moveCursorTo = function (coordinates) {
        var _a = this.getAbsoluteCoordinates(coordinates), x = _a.x, y = _a.y;
        this.cursorEl.style.top = y + "px";
        this.cursorEl.style.left = x + "px";
    };
    DomController.prototype.clickTo = function (coordinates) {
        var absCoordinates = this.getAbsoluteCoordinates(coordinates);
        var el = this.getElementFromPoint(absCoordinates);
        switch (el.tagName.toLowerCase()) {
            case 'textarea':
            case 'input':
                this.setFocus(el);
            default:
                var options = {
                    clientX: absCoordinates.x,
                    clientY: absCoordinates.y,
                    view: window
                };
                this.fireEvent('mousedown', el, options);
                this.fireEvent('mouseup', el, options);
                this.fireEvent('click', el, options);
                break;
        }
    };
    DomController.prototype.dblClickTo = function (coordinates) {
        var el = this.getElementFromPoint(this.getAbsoluteCoordinates(coordinates));
        this.fireEvent('dblclick', el);
    };
    DomController.prototype.keypress = function (_a) {
        var which = _a.which;
        var el = document.activeElement;
        if (el == null) {
            return;
        }
        switch (el.tagName.toLowerCase()) {
            case 'textarea':
            case 'input':
                this.fireEvent('keydown', el);
                this.fireEvent('keypress', el);
                el.value += String.fromCharCode(which);
                this.fireEvent('input', el);
                this.fireEvent('keyup', el);
            default:
                break;
        }
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
    DomController.prototype.css = function (el, styles) {
        for (var _i = 0, _a = Object.entries(styles); _i < _a.length; _i++) {
            var _b = _a[_i], prop = _b[0], value = _b[1];
            el.style.setProperty(prop, value);
        }
    };
    DomController.prototype.getElementFromPoint = function (_a) {
        var x = _a.x, y = _a.y;
        return document.elementFromPoint(x - CURSOR, y - CURSOR);
    };
    DomController.prototype.setFocus = function (el) {
        el.focus();
        el.select();
    };
    DomController.prototype.fireEvent = function (type, el, options) {
        if (options === void 0) { options = {}; }
        var event;
        switch (type) {
            case 'click':
            case 'dblclick':
            case 'mousedown':
            case 'mouseup':
                event = new MouseEvent(type, __assign({ bubbles: true, cancelable: true }, options));
                break;
            default:
                event = new Event(type, {
                    bubbles: true,
                    cancelable: true
                });
                break;
        }
        console.log('emited', event);
        return el.dispatchEvent(event);
    };
    DomController.prototype.isScrollable = function (el) {
        return el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
    };
    DomController.prototype.createCursorEl = function () {
        this.css(this.cursorEl, {
            'z-index': '100500',
            position: 'absolute',
            width: '30px',
            height: '30px',
            display: 'inline-block',
            background: "url('data:image/png;base64,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')"
        });
        var bodyEl = this.el.querySelector('body');
        if (bodyEl) {
            bodyEl.appendChild(this.cursorEl);
        }
        else {
            this.el.appendChild(this.cursorEl);
        }
    };
    return DomController;
}());
exports.DomController = DomController;
//# sourceMappingURL=dom.js.map