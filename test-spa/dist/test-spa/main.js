(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../src/actions.ts":
/*!*************************!*\
  !*** ../src/actions.ts ***!
  \*************************/
/*! exports provided: ActionsName, MoveToAction, ClickToAction, KeypressAction, KeydownAction, KeyupAction, ScrollByAction, DblClickToAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsName", function() { return ActionsName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveToAction", function() { return MoveToAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickToAction", function() { return ClickToAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeypressAction", function() { return KeypressAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeydownAction", function() { return KeydownAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyupAction", function() { return KeyupAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollByAction", function() { return ScrollByAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DblClickToAction", function() { return DblClickToAction; });
var ActionsName;
(function (ActionsName) {
    ActionsName["MOVE_TO"] = "[Action] Move To";
    ActionsName["CLICK_TO"] = "[Action] Click To";
    ActionsName["DBL_CLICK_TO"] = "[Action] Double Click To";
    ActionsName["KEYPRESS"] = "[Action] Keypress";
    ActionsName["KEYDOWN"] = "[Action] Keydown";
    ActionsName["KEYUP"] = "[Action] Keyup";
    ActionsName["SCROLL_BY"] = "[Action] Scroll By";
})(ActionsName || (ActionsName = {}));
var MoveToAction = /** @class */ (function () {
    function MoveToAction(payload) {
        this.payload = payload;
        this.type = ActionsName.MOVE_TO;
    }
    ;
    return MoveToAction;
}());

var ClickToAction = /** @class */ (function () {
    function ClickToAction(payload) {
        this.payload = payload;
        this.type = ActionsName.CLICK_TO;
    }
    ;
    return ClickToAction;
}());

var KeypressAction = /** @class */ (function () {
    function KeypressAction(payload) {
        this.payload = payload;
        this.type = ActionsName.KEYPRESS;
    }
    ;
    return KeypressAction;
}());

var KeydownAction = /** @class */ (function () {
    function KeydownAction(payload) {
        this.payload = payload;
        this.type = ActionsName.KEYDOWN;
    }
    ;
    return KeydownAction;
}());

var KeyupAction = /** @class */ (function () {
    function KeyupAction(payload) {
        this.payload = payload;
        this.type = ActionsName.KEYUP;
    }
    ;
    return KeyupAction;
}());

var ScrollByAction = /** @class */ (function () {
    function ScrollByAction(payload) {
        this.payload = payload;
        this.type = ActionsName.SCROLL_BY;
    }
    ;
    return ScrollByAction;
}());

var DblClickToAction = /** @class */ (function () {
    function DblClickToAction(payload) {
        this.payload = payload;
        this.type = ActionsName.DBL_CLICK_TO;
    }
    ;
    return DblClickToAction;
}());



/***/ }),

/***/ "../src/client.ts":
/*!************************!*\
  !*** ../src/client.ts ***!
  \************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transports */ "../src/transports/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../src/actions.ts");


var Client = /** @class */ (function () {
    function Client(transport, dom) {
        var _this = this;
        this.dom = dom;
        transport.on(_transports__WEBPACK_IMPORTED_MODULE_0__["TransportEvents"].connect, function (event) {
            console.log('Clinet', event);
            _this.calibrate();
            _this.dom.init();
        });
        transport.on(_transports__WEBPACK_IMPORTED_MODULE_0__["TransportEvents"].action, function (event) {
            var message = event.detail;
            console.log('Clinet message', message.data);
            _this.perform(message.data); // TODO: Transport for Actions?
        });
    }
    Client.prototype.calibrate = function () {
        // to implement
    };
    Client.prototype.perform = function (action) {
        switch (action.type) {
            case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionsName"].MOVE_TO:
                this.dom.moveCursorTo(action.payload);
                break;
            case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionsName"].CLICK_TO:
                this.dom.clickTo(action.payload);
                break;
            case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionsName"].DBL_CLICK_TO:
                this.dom.dblClickTo(action.payload);
                break;
            case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionsName"].KEYPRESS:
                this.dom.keypress(action.payload);
                break;
            case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionsName"].SCROLL_BY:
                this.dom.scroll(action.payload);
                break;
            default:
                break;
        }
    };
    return Client;
}());



/***/ }),

/***/ "../src/dom.ts":
/*!*********************!*\
  !*** ../src/dom.ts ***!
  \*********************/
/*! exports provided: DomController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomController", function() { return DomController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

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
                event = new MouseEvent(type, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ bubbles: true, cancelable: true }, options));
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
            'position': 'absolute',
            'width': '30px',
            'height': '30px',
            'display': 'inline-block',
            'background': "url('data:image/png;base64,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')",
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



/***/ }),

/***/ "../src/host.ts":
/*!**********************!*\
  !*** ../src/host.ts ***!
  \**********************/
/*! exports provided: Host */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Host", function() { return Host; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transports */ "../src/transports/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../src/actions.ts");



var Host = /** @class */ (function () {
    function Host(transport, el) {
        this.transport = transport;
        this.el = el;
        transport.on(_transports__WEBPACK_IMPORTED_MODULE_1__["TransportEvents"].connect, function (event) {
            console.log('HOST', event);
        });
        this.initEvents();
    }
    Host.prototype.moveCursorTo = function (event) {
        var coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new _actions__WEBPACK_IMPORTED_MODULE_2__["MoveToAction"](coordinates));
    };
    Host.prototype.clickTo = function (event) {
        var coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new _actions__WEBPACK_IMPORTED_MODULE_2__["ClickToAction"](coordinates));
    };
    Host.prototype.dblClickTo = function (event) {
        var coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new _actions__WEBPACK_IMPORTED_MODULE_2__["DblClickToAction"](coordinates));
    };
    Host.prototype.keypress = function (which) {
        this.transport.publish(new _actions__WEBPACK_IMPORTED_MODULE_2__["KeypressAction"]({ which: which }));
    };
    Host.prototype.wheel = function (event) {
        var coordinates = this.getRelativeCoordinate(event);
        this.transport.publish(new _actions__WEBPACK_IMPORTED_MODULE_2__["ScrollByAction"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, coordinates, { deltaX: event.deltaX, deltaY: event.deltaY })));
    };
    Host.prototype.initEvents = function () {
        var _this = this;
        this.el.addEventListener('mousemove', function (event) {
            _this.moveCursorTo(event);
        });
        this.el.addEventListener('click', function (event) {
            _this.clickTo(event);
        });
        this.el.addEventListener('keypress', function (event) {
            _this.keypress(event.which);
        });
        this.el.addEventListener('wheel', function (event) {
            _this.wheel(event);
        });
        this.el.addEventListener('dblclick', function (event) {
            _this.dblClickTo(event);
        });
    };
    Host.prototype.getRelativeCoordinate = function (event) {
        var offsetX = event.offsetX, offsetY = event.offsetY;
        var _a = event.target, clientHeight = _a.clientHeight, clientWidth = _a.clientWidth;
        return {
            x: offsetX / clientWidth,
            y: offsetY / clientHeight
        };
    };
    return Host;
}());



/***/ }),

/***/ "../src/preoccupyjs.ts":
/*!*****************************!*\
  !*** ../src/preoccupyjs.ts ***!
  \*****************************/
/*! exports provided: start, connect, Client, Host */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "../src/client.ts");
/* harmony import */ var _transports_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transports/local */ "../src/transports/local.ts");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "../src/dom.ts");
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./host */ "../src/host.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _client__WEBPACK_IMPORTED_MODULE_0__["Client"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Host", function() { return _host__WEBPACK_IMPORTED_MODULE_3__["Host"]; });







var transport = new _transports_local__WEBPACK_IMPORTED_MODULE_1__["LocalTransport"]();
function start(el) {
    var client = new _client__WEBPACK_IMPORTED_MODULE_0__["Client"](transport, new _dom__WEBPACK_IMPORTED_MODULE_2__["DomController"](el));
    transport.handshake();
    return client;
}
function connect(el) {
    var host = new _host__WEBPACK_IMPORTED_MODULE_3__["Host"](transport, el);
    transport.handshake();
    return host;
}


/***/ }),

/***/ "../src/transports/abstract.ts":
/*!*************************************!*\
  !*** ../src/transports/abstract.ts ***!
  \*************************************/
/*! exports provided: TransportEvents, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportEvents", function() { return TransportEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var TransportEvents;
(function (TransportEvents) {
    TransportEvents[TransportEvents["connect"] = 0] = "connect";
    TransportEvents[TransportEvents["disconnect"] = 1] = "disconnect";
    TransportEvents[TransportEvents["action"] = 2] = "action";
})(TransportEvents || (TransportEvents = {}));
var Message = /** @class */ (function () {
    function Message(type, data, hash) {
        this.type = type;
        this.data = data;
        this.hash = hash || Math.random() * 10e6 + '';
    }
    Message.prototype.serialize = function () {
        return JSON.stringify(this.data);
    };
    Message.parse = function (src) {
        var _a = src.split('|'), _prefix = _a[0], type = _a[1], hash = _a[2], dataSrc = _a[3];
        return new Message(type, JSON.parse(dataSrc), hash);
    };
    return Message;
}());

;


/***/ }),

/***/ "../src/transports/index.ts":
/*!**********************************!*\
  !*** ../src/transports/index.ts ***!
  \**********************************/
/*! exports provided: TransportEvents, Message, LocalTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "../src/transports/abstract.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportEvents", function() { return _abstract__WEBPACK_IMPORTED_MODULE_0__["TransportEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _abstract__WEBPACK_IMPORTED_MODULE_0__["Message"]; });

/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local */ "../src/transports/local.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalTransport", function() { return _local__WEBPACK_IMPORTED_MODULE_1__["LocalTransport"]; });





/***/ }),

/***/ "../src/transports/local.ts":
/*!**********************************!*\
  !*** ../src/transports/local.ts ***!
  \**********************************/
/*! exports provided: LocalTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalTransport", function() { return LocalTransport; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "../src/transports/abstract.ts");

var LocalTransport = /** @class */ (function () {
    function LocalTransport(preifx, stackSize) {
        if (preifx === void 0) { preifx = 'prefix'; }
        if (stackSize === void 0) { stackSize = 10; }
        this.preifx = preifx;
        this.stackSize = stackSize;
        this.connected = false;
        this.listeners = {};
        this.publishedMessages = [];
        this.storage = localStorage;
    }
    LocalTransport.prototype.handshake = function () {
        if (this.connected) {
            this.trigger(_abstract__WEBPACK_IMPORTED_MODULE_0__["TransportEvents"].connect);
        }
        else {
            this.connect();
        }
    };
    LocalTransport.prototype.on = function (eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    };
    ;
    LocalTransport.prototype.publish = function (action) {
        var message = new _abstract__WEBPACK_IMPORTED_MODULE_0__["Message"]('action', action);
        this.publishedMessages.push(message);
        this.storage.setItem(this.preifx + "|" + message.type + "|" + message.hash, message.serialize());
        if (this.publishedMessages.length > this.stackSize) {
            var messageToDelete = this.publishedMessages.shift();
            if (messageToDelete != null) {
                this.storage.removeItem(this.preifx + "|" + messageToDelete.type + "|" + messageToDelete.hash);
            }
        }
    };
    ;
    LocalTransport.prototype.connect = function () {
        var _this = this;
        window.addEventListener('storage', function (event) { return _this.onStorageMessage(event); });
        this.connected = true;
        this.trigger(_abstract__WEBPACK_IMPORTED_MODULE_0__["TransportEvents"].connect);
    };
    LocalTransport.prototype.onStorageMessage = function (_a) {
        var key = _a.key, newValue = _a.newValue;
        if (key && newValue && key.startsWith(this.preifx)) {
            var message = _abstract__WEBPACK_IMPORTED_MODULE_0__["Message"].parse(key + '|' + newValue);
            if (this.isExternalMessage(message)) {
                this.trigger(_abstract__WEBPACK_IMPORTED_MODULE_0__["TransportEvents"].action, message);
            }
        }
    };
    LocalTransport.prototype.trigger = function (type, detail) {
        if (Array.isArray(this.listeners[type])) {
            this.listeners[type].forEach(function (callback) { return callback({
                type: type,
                detail: detail
            }); });
        }
        ;
    };
    LocalTransport.prototype.isExternalMessage = function (message) {
        return this.publishedMessages.find(function (ownMessage) { return ownMessage.hash === message.hash; }) == null;
    };
    return LocalTransport;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ace/ace.component.css":
/*!***************************************!*\
  !*** ./src/app/ace/ace.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjZS9hY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ace/ace.component.html":
/*!****************************************!*\
  !*** ./src/app/ace/ace.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Edit me roughly!</h3>\n\n<ace-editor\n  [(text)]=\"text\"\n  [mode]=\"'sql'\"\n  [options]=\"{'fontSize': '14pt'}\"\n  #editor style=\"height:150px;\"></ace-editor>"

/***/ }),

/***/ "./src/app/ace/ace.component.ts":
/*!**************************************!*\
  !*** ./src/app/ace/ace.component.ts ***!
  \**************************************/
/*! exports provided: AceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceComponent", function() { return AceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AceComponent = /** @class */ (function () {
    function AceComponent() {
        this.text = 'SELECT * FROM users;';
    }
    AceComponent.prototype.ngOnInit = function () {
    };
    AceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ace',
            template: __webpack_require__(/*! ./ace.component.html */ "./src/app/ace/ace.component.html"),
            styles: [__webpack_require__(/*! ./ace.component.css */ "./src/app/ace/ace.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AceComponent);
    return AceComponent;
}());

// beh-select


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control/control.component */ "./src/app/control/control.component.ts");
/* harmony import */ var _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll/scroll.component */ "./src/app/scroll/scroll.component.ts");
/* harmony import */ var _ace_ace_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ace/ace.component */ "./src/app/ace/ace.component.ts");







var routes = [
    {
        path: 'form',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]
    },
    {
        path: 'control',
        component: _control_control_component__WEBPACK_IMPORTED_MODULE_4__["ControlComponent"]
    },
    {
        path: 'scroll',
        component: _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__["ScrollComponent"]
    },
    {
        path: 'ace',
        component: _ace_ace_component__WEBPACK_IMPORTED_MODULE_6__["AceComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n    display: flex;\n    align-items: center;\n}\n\n    .menu-item {\n        margin-top: 0;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztJQUVHO1FBQ0ksY0FBYztLQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container\">\n<div class=\"panel\">\n  <div class=\"panel-header text-center\">\n    <figure class=\"avatar avatar-xl\"><img src=\"assets/occupy_logo.png\" alt=\"Avatar\"></figure>\n    <div class=\"panel-title h5 mt-10\">PreoccupyJS</div>\n    <div class=\"panel-subtitle\">Demo App</div>\n  </div>\n  <div class=\"panel-footer\">\n    <button [ngClass]=\"{'btn-success': activated}\" [disabled]=\"activated\" class=\"btn\" (click)=\"onActivate()\">Activate remote control</button>\n  </div>\n  <div class=\"panel-nav\">\n    <ul class=\"tab tab-block\">\n      <li class=\"tab-item\" routerLinkActive=\"active\">\n        <a routerLink=\"/control\">Control</a>\n      </li>\n      <li class=\"tab-item\" routerLinkActive=\"active\">\n        <a routerLink=\"/form\">Form</a>\n      </li>\n      <li class=\"tab-item\" routerLinkActive=\"active\">\n        <a routerLink=\"/scroll\">Scroll</a>\n      </li>\n      <li class=\"tab-item\" routerLinkActive=\"active\">\n        <a routerLink=\"/ace\">Editor</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"panel-body\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _preoccupyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @preoccupyjs */ "../src/preoccupyjs.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-spa';
        this.activated = false;
    }
    AppComponent.prototype.onActivate = function () {
        Object(_preoccupyjs__WEBPACK_IMPORTED_MODULE_2__["start"])(document.documentElement);
        this.activated = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control/control.component */ "./src/app/control/control.component.ts");
/* harmony import */ var _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scroll/scroll.component */ "./src/app/scroll/scroll.component.ts");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _ace_ace_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ace/ace.component */ "./src/app/ace/ace.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                _control_control_component__WEBPACK_IMPORTED_MODULE_6__["ControlComponent"],
                _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_7__["ScrollComponent"],
                _ace_ace_component__WEBPACK_IMPORTED_MODULE_9__["AceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_8__["AceEditorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/control/control.component.css":
/*!***********************************************!*\
  !*** ./src/app/control/control.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad {\n    margin: 10px 5px;\n    border: 1px dashed #888;\n    width: 100%;\n    height: calc(100vh - 350px);\n    resize: both;\n    overflow: auto;\n}\n\n.pad:focus {\n    outline: none;\n    border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkIHtcbiAgICBtYXJnaW46IDEwcHggNXB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjODg4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcbiAgICByZXNpemU6IGJvdGg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wYWQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/control/control.component.html":
/*!************************************************!*\
  !*** ./src/app/control/control.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div tabindex=\"1\" class=\"pad\" #pad></div>\n<button class=\"btn btn-primary\" (click)=\"onConnectClick()\">Connect</button>"

/***/ }),

/***/ "./src/app/control/control.component.ts":
/*!**********************************************!*\
  !*** ./src/app/control/control.component.ts ***!
  \**********************************************/
/*! exports provided: ControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _preoccupyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @preoccupyjs */ "../src/preoccupyjs.ts");



var ControlComponent = /** @class */ (function () {
    function ControlComponent() {
    }
    ControlComponent.prototype.ngOnInit = function () { };
    ControlComponent.prototype.onConnectClick = function () {
        var host = Object(_preoccupyjs__WEBPACK_IMPORTED_MODULE_2__["connect"])(this.padView.nativeElement);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pad'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ControlComponent.prototype, "padView", void 0);
    ControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control',
            template: __webpack_require__(/*! ./control.component.html */ "./src/app/control/control.component.html"),
            styles: [__webpack_require__(/*! ./control.component.css */ "./src/app/control/control.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControlComponent);
    return ControlComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result {\n    white-space: pre;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Form me handsomly!</h3>\n<form class=\"form-horizontal\" (submit)=\"onFormSubmit($event)\">\n  <div class=\"form-group\">\n    <div class=\"col-3 col-sm-12\">\n      <label class=\"form-label\" for=\"textField\">Form field #1</label>\n    </div>\n    <div class=\"col-3 col-sm-12\">\n      <input class=\"form-input\" name=\"textField\" id=\"textField\" type=\"text\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-3 col-sm-12\">\n      <label class=\"form-label\" for=\"textArea\">Form field #2</label>\n    </div>\n    <div class=\"col-3 col-sm-12\">\n      <textarea class=\"form-input\" name=\"textArea\" id=\"textArea\"></textarea>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-3 col-sm-12\">\n      <label for=\"checkbox\">Form field #3</label>\n    </div>\n    <div class=\"col-3 col-sm-12\">\n      <input name=\"checkbox\" type=\"checkbox\" id=\"checkbox\"/>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-3 col-sm-12\">\n      <label class=\"form-label\">Type</label>\n    </div>\n    <div class=\"col-9 col-sm-12\">\n      <label class=\"form-radio\">\n        <input value=\"Email\" type=\"radio\" name=\"radio\"><i class=\"form-icon\"></i> Email\n      </label>\n      <label class=\"form-radio\">\n        <input value=\"Phone\" type=\"radio\" name=\"radio\"><i class=\"form-icon\"></i> Phone\n      </label>\n    </div>\n  </div>\n\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"submit\">\n  <p>Result:</p>\n  <div class=\"result\">{{formResult}}</div>\n</form>\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.formResult = '';
    }
    FormComponent.prototype.onFormSubmit = function (event) {
        event.preventDefault();
        var formData = new FormData(event.target);
        this.formResult = Array.from(formData.entries())
            .reduce(function (acc, pair) { return acc += "name: " + pair[0] + " value: " + pair[1] + "\n"; }, '');
        console.log(this.formResult, formData.entries());
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/scroll/scroll.component.css":
/*!*********************************************!*\
  !*** ./src/app/scroll/scroll.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable {\n    height: 200px;\n    border: 1px solid #000;\n    overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsL3Njcm9sbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2Nyb2xsL3Njcm9sbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGFibGUge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/scroll/scroll.component.html":
/*!**********************************************!*\
  !*** ./src/app/scroll/scroll.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Scroll me gently!</h3>\n\n<div #scrollable (wheel)=\"onScroll($event)\" (scroll)=\"onScroll($event)\"  class=\"scrollable\">\n  <p *ngFor=\"let date of dates\">Date: {{date.toLocaleString()}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/scroll/scroll.component.ts":
/*!********************************************!*\
  !*** ./src/app/scroll/scroll.component.ts ***!
  \********************************************/
/*! exports provided: ScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SCROLL_OFFSET = 20;
var ScrollComponent = /** @class */ (function () {
    function ScrollComponent() {
        this.dates = [];
    }
    ScrollComponent.prototype.ngOnInit = function () {
        this.dates = this.generate(10);
    };
    ScrollComponent.prototype.onScroll = function (event) {
        var _a;
        console.log(event);
        var _b = event.target, scrollHeight = _b.scrollHeight, scrollTop = _b.scrollTop, clientHeight = _b.clientHeight;
        if (clientHeight + scrollTop + SCROLL_OFFSET >= scrollHeight) {
            (_a = this.dates).push.apply(_a, this.generate(10));
        }
    };
    ScrollComponent.prototype.generate = function (n) {
        return Array.from(Array(n).keys()).map(function (i) { return new Date(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ScrollComponent.prototype, "scrollableElRef", void 0);
    ScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scroll',
            template: __webpack_require__(/*! ./scroll.component.html */ "./src/app/scroll/scroll.component.html"),
            styles: [__webpack_require__(/*! ./scroll.component.css */ "./src/app/scroll/scroll.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScrollComponent);
    return ScrollComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/iketari/Development/preoccupyjs/test-spa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map