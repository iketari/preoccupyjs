(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.preoccupyjs = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
    })(ActionsName || (ActionsName = {}));
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
        BaseAction.type = ActionsName.BASE;
        return BaseAction;
    }());

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
        MoveToAction.type = ActionsName.MOVE_TO;
        MoveToAction.eventName = 'mousemove';
        return MoveToAction;
    }(BaseAction));

    var ClickToAction = /** @class */ (function (_super) {
        __extends(ClickToAction, _super);
        function ClickToAction(payload) {
            var _this = _super.call(this) || this;
            _this.payload = payload;
            _this.type = ClickToAction.type;
            return _this;
        }
        ClickToAction.prototype.performEvent = function (dom, stack) {
            dom.clickTo(this.payload);
        };
        ClickToAction.handleEvent = function (host, event) {
            var payload = host.getRelativeCoordinate(event);
            return new ClickToAction(payload);
        };
        ClickToAction.type = ActionsName.CLICK_TO;
        ClickToAction.eventName = 'click';
        return ClickToAction;
    }(BaseAction));

    var KeypressAction = /** @class */ (function (_super) {
        __extends(KeypressAction, _super);
        function KeypressAction(payload) {
            var _this = _super.call(this) || this;
            _this.payload = payload;
            _this.type = KeypressAction.type;
            return _this;
        }
        KeypressAction.prototype.performEvent = function (dom, stack) {
            dom.keypress(this.payload);
        };
        KeypressAction.handleEvent = function (host, event) {
            return new KeypressAction({
                which: event.which
            });
        };
        KeypressAction.type = ActionsName.KEYPRESS;
        KeypressAction.eventName = 'keypress';
        return KeypressAction;
    }(BaseAction));

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
        ScrollByAction.type = ActionsName.SCROLL_BY;
        ScrollByAction.eventName = 'mousewheel';
        return ScrollByAction;
    }(BaseAction));

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
        DblClickToAction.type = ActionsName.DBL_CLICK_TO;
        DblClickToAction.eventName = 'dblclick';
        return DblClickToAction;
    }(BaseAction));

    var KeydownAction = /** @class */ (function (_super) {
        __extends(KeydownAction, _super);
        function KeydownAction(payload) {
            var _this = _super.call(this) || this;
            _this.payload = payload;
            _this.type = KeydownAction.type;
            return _this;
        }
        KeydownAction.prototype.performEvent = function (dom, stack) {
            // TBI
        };
        KeydownAction.handleEvent = function (host, event) {
            return new KeydownAction({
                which: event.which
            });
        };
        KeydownAction.type = ActionsName.KEYDOWN;
        KeydownAction.eventName = 'keydown';
        return KeydownAction;
    }(BaseAction));

    var KeyupAction = /** @class */ (function (_super) {
        __extends(KeyupAction, _super);
        function KeyupAction(payload) {
            var _this = _super.call(this) || this;
            _this.payload = payload;
            _this.type = KeyupAction.type;
            return _this;
        }
        KeyupAction.prototype.performEvent = function (dom, stack) {
            // dom.k
        };
        KeyupAction.handleEvent = function (host, event) {
            return new KeyupAction({
                which: event.which
            });
        };
        KeyupAction.type = ActionsName.KEYUP;
        KeyupAction.eventName = 'keyup';
        return KeyupAction;
    }(BaseAction));

    var actionMap = new Map([
        [MoveToAction.type, MoveToAction],
        [ClickToAction.type, ClickToAction],
        [KeydownAction.type, KeydownAction],
        [KeypressAction.type, KeypressAction],
        [KeyupAction.type, KeyupAction],
        [MoveToAction.type, MoveToAction],
        [ScrollByAction.type, ScrollByAction],
        [DblClickToAction.type, DblClickToAction]
    ]);

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
                this.trigger(TransportEvents.connect);
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
        LocalTransport.prototype.publish = function (action) {
            var message = new Message('action', action);
            this.publishedMessages.push(message);
            this.storage.setItem(this.preifx + "|" + message.type + "|" + message.hash, message.serialize());
            if (this.publishedMessages.length > this.stackSize) {
                var messageToDelete = this.publishedMessages.shift();
                if (messageToDelete != null) {
                    this.storage.removeItem(this.preifx + "|" + messageToDelete.type + "|" + messageToDelete.hash);
                }
            }
        };
        LocalTransport.prototype.connect = function () {
            var _this = this;
            window.addEventListener('storage', function (event) { return _this.onStorageMessage(event); });
            this.connected = true;
            this.trigger(TransportEvents.connect);
        };
        LocalTransport.prototype.onStorageMessage = function (_a) {
            var key = _a.key, newValue = _a.newValue;
            if (key && newValue && key.startsWith(this.preifx)) {
                var message = Message.parse(key + '|' + newValue);
                if (this.isExternalMessage(message)) {
                    this.trigger(TransportEvents.action, message);
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
        };
        LocalTransport.prototype.isExternalMessage = function (message) {
            return this.publishedMessages.find(function (ownMessage) { return ownMessage.hash === message.hash; }) == null;
        };
        return LocalTransport;
    }());

    var STACK_LENGTH = 30;
    var Client = /** @class */ (function () {
        function Client(transport, dom) {
            var _this = this;
            this.dom = dom;
            this.actionStack = [];
            this.actions = actionMap;
            transport.on(TransportEvents.connect, function (event) {
                _this.dom.init();
            });
            transport.on(TransportEvents.action, function (event) {
                var message = event.detail;
                _this.perform(message.data);
            });
        }
        Client.prototype.perform = function (rawAction) {
            if (this.actions.has(rawAction.type)) {
                var Action = this.actions.get(rawAction.type);
                var action = new Action(rawAction.payload);
                action.performEvent(this.dom, this.actionStack);
                this.actionStack.push(action);
                while (this.actionStack.length > STACK_LENGTH) {
                    this.actionStack.shift();
                }
            }
        };
        return Client;
    }());

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

    var Host = /** @class */ (function () {
        function Host(transport, el) {
            var _this = this;
            this.transport = transport;
            this.el = el;
            this.actions = actionMap;
            transport.on(TransportEvents.connect, function (event) {
                console.log('HOST', event);
                _this.initEvents();
            });
        }
        Host.prototype.initEvents = function () {
            var _this = this;
            this.actions.forEach(function (Action) {
                _this.el.addEventListener(Action.eventName, function (event) {
                    var action = Action.handleEvent(_this, event);
                    _this.transport.publish(action);
                });
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

    var transport = new LocalTransport();
    function start(el) {
        var client = new Client(transport, new DomController(el));
        transport.handshake();
        return client;
    }
    function connect(el) {
        var host = new Host(transport, el);
        transport.handshake();
        return host;
    }

    exports.start = start;
    exports.connect = connect;
    exports.Client = Client;
    exports.Host = Host;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=preoccupyjs.umd.js.map
