(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(n,l,t){n.exports=t("zUnb")},crnd:function(n,l){function t(n){return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="crnd"},zUnb:function(n,l,t){"use strict";t.r(l);var e,o=t("CcnG"),u=function(){return function(){}}(),i=t("bb6g");!function(n){n.BASE="[Action] Base",n.MOVE_TO="[Action] Move To",n.MOUSE_DOWN_TO="[Action] MouseDown To",n.MOUSE_UP_TO="[Action] MouseUp To",n.CLICK_TO="[Action] Click To",n.RIGHT_CLICK_TO="[Action] Right Click To",n.DBL_CLICK_TO="[Action] Double Click To",n.KEYPRESS="[Action] Keypress",n.KEYDOWN="[Action] Keydown",n.KEYUP="[Action] Keyup",n.SCROLL_BY="[Action] Scroll By"}(e||(e={}));var r=function(){function n(l){void 0===l&&(l={}),this.payload=l,this.type=n.type}return n.handleEvent=function(n,l){return console.warn("You have to implement a static method handleEvent for "+this.type+" action"),{}},n.type=e.BASE,n}(),a=function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.moveCursorTo(this.payload)},l.handleEvent=function(n,t){return new l(n.getRelativeCoordinate(t))},l.type=e.MOVE_TO,l.eventName="mousemove",l}(r),c=function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.clickTo(this.payload)},l.handleEvent=function(n,t){return new l(n.getRelativeCoordinate(t))},l.type=e.CLICK_TO,l.eventName="click",l}(r),s=function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.keypress(this.payload)},l.handleEvent=function(n,t){return new l({key:t.key,code:t.code,keyCode:t.keyCode})},l.type=e.KEYPRESS,l.eventName="keypress",l}(r),p=function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.scroll(this.payload)},l.handleEvent=function(n,t){var e=n.getRelativeCoordinate(t);return new l(i.a({},e,{deltaX:t.shiftKey?t.deltaY:0,deltaY:t.shiftKey?0:t.deltaY}))},l.type=e.SCROLL_BY,l.eventName="mousewheel",l}(r),b=function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.dblClickTo(this.payload)},l.handleEvent=function(n,t){return new l(n.getRelativeCoordinate(t))},l.type=e.DBL_CLICK_TO,l.eventName="dblclick",l}(r);function f(n,l){return void 0===l&&(l=[]),l.reduce(function(l,t){return l[t]=n[t],l},{})}var h=new Map([a,c,function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.keydown(this.payload)},l.handleEvent=function(n,t){return new l(f(t,["which","key","code","ctrlKey","keyCode","metaKey","shiftKey","type"]))},l.type=e.KEYDOWN,l.eventName="keydown",l}(r),s,function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.keyup(this.payload)},l.handleEvent=function(n,t){return new l(f(t,["which","key","code","ctrlKey","keyCode","metaKey","shiftKey","type"]))},l.type=e.KEYUP,l.eventName="keyup",l}(r),a,p,b,function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.rightClickTo(this.payload)},l.handleEvent=function(n,t){return t.preventDefault(),new l(n.getRelativeCoordinate(t))},l.type=e.RIGHT_CLICK_TO,l.eventName="contextmenu",l}(r),function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.mouseDownTo(this.payload)},l.handleEvent=function(n,t){return new l(n.getRelativeCoordinate(t))},l.type=e.MOUSE_DOWN_TO,l.eventName="mousedown",l}(r),function(n){function l(t){var e=n.call(this)||this;return e.payload=t,e.type=l.type,e}return i.b(l,n),l.prototype.performEvent=function(n,l){n.mouseUpTo(this.payload)},l.handleEvent=function(n,t){return new l(n.getRelativeCoordinate(t))},l.type=e.MOUSE_UP_TO,l.eventName="mouseup",l}(r)].map(function(n){return[n.type,n]})),v=function(n){return n[n.connect=0]="connect",n[n.disconnect=1]="disconnect",n[n.action=2]="action",n}({}),d=function(){function n(){this.listeners={}}return n.prototype.off=function(n){void 0!==n?this.listeners[n]=[]:this.listeners={}},n.prototype.on=function(n,l){this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(l)},n.prototype.trigger=function(n,l){Array.isArray(this.listeners[n])&&this.listeners[n].forEach(function(t){return t({type:n,detail:l})})},n}(),y=function(){function n(n,l,t){this.type=n,this.data=l,this.hash=t||1e7*Math.random()+""}return n.prototype.serialize=function(){return JSON.stringify(this.data)},n.parse=function(l){var t=l.split("|"),e=t[2];return new n(t[1],JSON.parse(t[3]),e)},n}(),m=function(n){function l(l,t){void 0===l&&(l="prefix"),void 0===t&&(t=10);var e=n.call(this)||this;return e.preifx=l,e.stackSize=t,e.connected=!1,e.publishedMessages=[],e.storage=localStorage,e}return i.b(l,n),l.prototype.handshake=function(){this.connected?this.trigger(v.connect):this.connect()},l.prototype.disconnect=function(){this.cleanUp(),window.removeEventListener("storage",this),this.off(),this.connected=!1},l.prototype.publish=function(n){var l=new y("action",n);if(this.publishedMessages.push(l),this.storage.setItem(this.preifx+"|"+l.type+"|"+l.hash,l.serialize()),this.publishedMessages.length>this.stackSize){var t=this.publishedMessages.shift();t&&this.storage.removeItem(this.preifx+"|"+t.type+"|"+t.hash)}},l.prototype.handleEvent=function(n){switch(n.type){case"storage":this.onStorageMessage(n)}},l.prototype.connect=function(){window.addEventListener("storage",this),this.connected=!0,this.trigger(v.connect)},l.prototype.cleanUp=function(){var n=this;Object.keys(localStorage).forEach(function(l){l.startsWith(n.preifx)&&localStorage.removeItem(l)})},l.prototype.onStorageMessage=function(n){var l=n.key,t=n.newValue;if(l&&t&&l.startsWith(this.preifx)){var e=y.parse(l+"|"+t);this.isExternalMessage(e)&&this.trigger(v.action,e)}},l.prototype.isExternalMessage=function(n){return!this.publishedMessages.find(function(l){return l.hash===n.hash})},l}(d),g=(t("zvoD"),function(){function n(n,l){this.transport=n,this.dom=l,this.actionStack=[],this.actions=h}return n.prototype.perform=function(n){if(this.actions.has(n.type)){var l=new(this.actions.get(n.type))(n.payload);for(l.performEvent(this.dom,this.actionStack),this.actionStack.push(l);this.actionStack.length>30;)this.actionStack.shift()}},n.prototype.start=function(){var n=this;this.transport.on(v.connect,function(l){n.dom.init()}),this.transport.on(v.action,function(l){n.perform(l.detail.data)}),this.transport.handshake()},n.prototype.stop=function(){this.transport.disconnect(),this.dom.destroy()},n}()),k=function(){function n(){this.el=this.createCursorEl()}return n.prototype.moveTo=function(n){this.el.style.transform="translateX("+n.x+"px) translateY("+n.y+"px)"},n.prototype.getEl=function(){return this.el},n.prototype.destroy=function(){this.el&&this.el.remove()},n.prototype.createCursorEl=function(){var n=document.createElement("div");return function(n,l){for(var t=0,e=Object.entries({"z-index":"100500",position:"fixed",top:"0",left:"0",width:"30px",height:"30px",display:"inline-block",background:"url('data:image/png;base64,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')"});t<e.length;t++){var o=e[t];n.style.setProperty(o[0],o[1])}}(n),n},n}(),E=function(){function n(n){this.el=n,this.cursor=new k}return n.prototype.init=function(){this.cursor.moveTo({x:0,y:0});var n=this.el.querySelector("body");"static"!==getComputedStyle(this.el).position?this.el.appendChild(this.cursor.getEl()):n.appendChild(this.cursor.getEl())},n.prototype.destroy=function(){this.cursor.destroy()},n.prototype.moveCursorTo=function(n){var l=this.getAbsoluteCoordinates(n),t=this.getMouseEventPayload(n);null!==t&&(this.fireEvent.apply(this,["mousemove"].concat(t)),this.cursor.moveTo(l))},n.prototype.mouseDownTo=function(n){var l=this.getMouseEventPayload(n);null!==l&&this.fireEvent.apply(this,["mousedown"].concat(l))},n.prototype.mouseUpTo=function(n){var l=this.getMouseEventPayload(n);null!==l&&this.fireEvent.apply(this,["mouseup"].concat(l))},n.prototype.clickTo=function(n){var l=this.getMouseEventPayload(n);if(null!==l){var t=l[0],e=l[1];null!==document.activeElement&&this.fireEvent("blur",document.activeElement),this.setFocus(t),this.fireEvent("focus",t),this.fireEvent("click",t,e)}},n.prototype.rightClickTo=function(n){var l=this.getMouseEventPayload(n);null!==l&&this.fireEvent.apply(this,["contextmenu"].concat(l))},n.prototype.dblClickTo=function(n){var l=this.getElementFromPoint(this.getAbsoluteCoordinates(n));if(l){switch(l.tagName.toLowerCase()){case"textarea":case"input":l.select()}this.fireEvent("dblclick",l)}},n.prototype.keydown=function(n){var l=document.activeElement;if(l){if("Backspace"===n.code)switch(l.tagName.toLowerCase()){case"textarea":case"input":var t=l;if(["checkbox","radio"].includes(t.type)||!t.value)break;t.value=l.value.slice(0,-1);break;default:l.isContentEditable&&(l.innerHTML=l.innerHTML.slice(0,-1))}this.fireEvent("keydown",l,n)}},n.prototype.keyup=function(n){var l=document.activeElement;l&&this.fireEvent("keyup",l,n)},n.prototype.keypress=function(n){var l=document.activeElement;if(l&&void 0!==n.keyCode){switch(this.fireEvent("keypress",l,n),l.tagName.toLowerCase()){case"textarea":case"input":l.value+=String.fromCharCode(n.keyCode);break;default:l.innerHTML+=String.fromCharCode(n.keyCode)}this.fireEvent("input",l,n)}},n.prototype.scroll=function(n){var l,t=n.deltaX,e=n.deltaY,o=this.getElementFromPoint(this.getAbsoluteCoordinates({x:n.x,y:n.y}));if(o){for(;o&&o.parentElement;){if(this.isScrollable(o)){l=o;break}o=o.parentElement}l||(l=document.body),l.scrollBy({left:t,top:e}),this.fireEvent("wheel",o),this.fireEvent("scroll",o)}},n.prototype.getMouseEventPayload=function(n){var l=this.getAbsoluteCoordinates(n),t=this.getElementFromPoint(l);return t?[t,{clientX:l.x,clientY:l.y,view:window}]:null},n.prototype.getAbsoluteCoordinates=function(n){var l=window.innerHeight;return{x:n.x*window.innerWidth,y:n.y*l}},n.prototype.getElementFromPoint=function(n){return document.elementFromPoint(n.x-1,n.y-1)},n.prototype.setFocus=function(n){n.focus&&n.focus()},n.prototype.fireEvent=function(n,l,t){var e;void 0===t&&(t={});var o={bubbles:!0,cancelable:!0};switch(n){case"click":case"dblclick":case"mousedown":case"mouseup":case"contextmenu":case"mousemove":e=new MouseEvent(n,i.a({},o,t));break;case"keypress":case"keydown":case"keyup":e=new KeyboardEvent(n,i.a({},o,t));break;default:e=new Event(n,i.a({},o,t))}return window.preoccupydebug&&console.log("fired",e),l.dispatchEvent(e)},n.prototype.isScrollable=function(n){return this.isScrollableY(n)||this.isScrollableX(n)},n.prototype.isScrollableX=function(n){var l=getComputedStyle(n);return["auto","scroll"].includes(l.overflowX)&&n.scrollWidth>n.clientWidth},n.prototype.isScrollableY=function(n){var l=getComputedStyle(n);return["auto","scroll"].includes(l.overflowY)&&n.scrollHeight>n.clientHeight},n}(),w=function(){function n(n,l){this.transport=n,this.el=l,this.actions=h,this.eventCallbacks=new WeakMap}return n.prototype.start=function(){this.initEvents(),this.transport.handshake()},n.prototype.stop=function(){this.transport.disconnect(),this.disableEvents()},n.prototype.initEvents=function(){var n=this;this.actions.forEach(function(l){n.eventCallbacks.set(l,function(t){var e=l.handleEvent(n,t);n.transport.publish(e)}),n.el.addEventListener(l.eventName,n.eventCallbacks.get(l))})},n.prototype.disableEvents=function(){var n=this;this.actions.forEach(function(l){return n.el.removeEventListener(l.eventName,n.eventCallbacks.get(l))})},n.prototype.getRelativeCoordinate=function(n){var l=n.target;return{x:n.offsetX/l.clientWidth,y:n.offsetY/l.clientHeight}},n}(),C=new m,A=function(){function n(){this.title="test-spa",this.activated=!1}return n.prototype.onActivate=function(){var n,l;(n=document.documentElement,void 0===l&&(l=C),new g(l,new E(n))).start(),this.activated=!0},n}(),x=t("pMnS"),S=function(){function n(){this.formResult=""}return n.prototype.onFormSubmit=function(n){n.preventDefault();var l=new FormData(n.target);this.formResult=Array.from(l.entries()).reduce(function(n,l){return n+"name: "+l[0]+" value: "+l[1]+"\n"},""),console.log(this.formResult,l.entries())},n}(),K=o.mb({encapsulation:0,styles:[[".result[_ngcontent-%COMP%]{white-space:pre}"]],data:{}});function T(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Form me handsomly!"])),(n()(),o.ob(2,0,null,null,36,"form",[["class","form-horizontal"]],null,[[null,"submit"]],function(n,l,t){var e=!0;return"submit"===l&&(e=!1!==n.component.onFormSubmit(t)&&e),e},null,null)),(n()(),o.ob(3,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o.ob(4,0,null,null,2,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(n()(),o.ob(5,0,null,null,1,"label",[["class","form-label"],["for","textField"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Form field #1"])),(n()(),o.ob(7,0,null,null,1,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(n()(),o.ob(8,0,null,null,0,"input",[["class","form-input"],["id","textField"],["name","textField"],["type","text"]],null,null,null,null,null)),(n()(),o.ob(9,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o.ob(10,0,null,null,2,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(n()(),o.ob(11,0,null,null,1,"label",[["class","form-label"],["for","textArea"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Form field #2"])),(n()(),o.ob(13,0,null,null,1,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(n()(),o.ob(14,0,null,null,0,"textarea",[["class","form-input"],["id","textArea"],["name","textArea"]],null,null,null,null,null)),(n()(),o.ob(15,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o.ob(16,0,null,null,2,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(n()(),o.ob(17,0,null,null,1,"label",[["for","checkbox"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Form field #3"])),(n()(),o.ob(19,0,null,null,1,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(n()(),o.ob(20,0,null,null,0,"input",[["id","checkbox"],["name","checkbox"],["type","checkbox"]],null,null,null,null,null)),(n()(),o.ob(21,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o.ob(22,0,null,null,2,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(n()(),o.ob(23,0,null,null,1,"label",[["class","form-label"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Type"])),(n()(),o.ob(25,0,null,null,8,"div",[["class","col-9 col-sm-12"]],null,null,null,null,null)),(n()(),o.ob(26,0,null,null,3,"label",[["class","form-radio"]],null,null,null,null,null)),(n()(),o.ob(27,0,null,null,0,"input",[["name","radio"],["type","radio"],["value","Email"]],null,null,null,null,null)),(n()(),o.ob(28,0,null,null,0,"i",[["class","form-icon"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,[" Email "])),(n()(),o.ob(30,0,null,null,3,"label",[["class","form-radio"]],null,null,null,null,null)),(n()(),o.ob(31,0,null,null,0,"input",[["name","radio"],["type","radio"],["value","Phone"]],null,null,null,null,null)),(n()(),o.ob(32,0,null,null,0,"i",[["class","form-icon"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,[" Phone "])),(n()(),o.ob(34,0,null,null,0,"input",[["class","btn btn-primary"],["type","submit"],["value","submit"]],null,null,null,null,null)),(n()(),o.ob(35,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Result:"])),(n()(),o.ob(37,0,null,null,1,"div",[["class","result"]],null,null,null,null,null)),(n()(),o.Bb(38,null,["",""]))],null,function(n,l){n(l,38,0,l.component.formResult)})}function L(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,1,"app-form",[],null,null,null,T,K)),o.nb(1,49152,null,0,S,[],null,null)],null,null)}var O=o.kb("app-form",S,L,{},{},[]),B=function(){function n(){}return n.prototype.ngOnInit=function(){},n.prototype.onConnectClick=function(){var n;this.host=(void 0===n&&(n=C),new w(n,this.padView.nativeElement)),this.host.start()},n}(),M=o.mb({encapsulation:0,styles:[[".pad[_ngcontent-%COMP%]{margin:10px 5px;border:1px dashed #888;width:100%;height:calc(100vh - 350px);resize:both;overflow:auto}.pad[_ngcontent-%COMP%]:focus{outline:0;border-width:2px}"]],data:{}});function z(n){return o.Cb(0,[o.zb(402653184,1,{padView:0}),(n()(),o.ob(1,0,[[1,0],["pad",1]],null,0,"div",[["class","pad"],["tabindex","1"]],null,null,null,null,null)),(n()(),o.ob(2,0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onConnectClick()&&e),e},null,null)),(n()(),o.Bb(-1,null,["Connect"]))],null,function(n,l){n(l,2,0,l.component.host)})}function R(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,1,"app-control",[],null,null,null,z,M)),o.nb(1,114688,null,0,B,[],null,null)],function(n,l){n(l,1,0)},null)}var P=o.kb("app-control",B,R,{},{},[]),Y=t("Ip0R"),U=function(){function n(){this.scrollableElRef=null,this.dates=[]}return n.prototype.ngOnInit=function(){this.dates=this.generate(10)},n.prototype.onScroll=function(n){var l;console.log(n);var t=n.target;t.clientHeight+t.scrollTop+20>=t.scrollHeight&&(l=this.dates).push.apply(l,this.generate(10))},n.prototype.generate=function(n){return Array.from(Array(n).keys()).map(function(n){return new Date})},n}(),N=o.mb({encapsulation:0,styles:[[".scrollable[_ngcontent-%COMP%]{height:200px;border:1px solid #000;overflow:auto}"]],data:{}});function X(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Bb(1,null,["Date: ",""]))],null,function(n,l){var t=l.context.$implicit.toLocaleString();n(l,1,0,t)})}function j(n){return o.Cb(0,[o.zb(402653184,1,{scrollableElRef:0}),(n()(),o.ob(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Scroll me gently!"])),(n()(),o.ob(3,0,[[1,0],["scrollable",1]],null,2,"div",[["class","scrollable"]],null,[[null,"wheel"],[null,"scroll"]],function(n,l,t){var e=!0,o=n.component;return"wheel"===l&&(e=!1!==o.onScroll(t)&&e),"scroll"===l&&(e=!1!==o.onScroll(t)&&e),e},null,null)),(n()(),o.fb(16777216,null,null,1,null,X)),o.nb(5,278528,null,0,Y.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,5,0,l.component.dates)},null)}function F(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,1,"app-scroll",[],null,null,null,j,N)),o.nb(1,114688,null,0,U,[],null,null)],function(n,l){n(l,1,0)},null)}var D=o.kb("app-scroll",U,F,{},{},[]),q=t("gakQ"),I=t("gIcY"),W=t("BXrY"),H=t("A1fA"),Q=t("t/Na"),J=function(){function n(){this.text="SELECT * FROM users;"}return n.prototype.ngOnInit=function(){},n}(),V=o.mb({encapsulation:0,styles:[[""]],data:{}});function G(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Edit me roughly!"])),(n()(),o.ob(2,0,null,null,3,"ace-editor",[["style","height:150px;"]],null,[[null,"textChange"]],function(n,l,t){var e=!0;return"textChange"===l&&(e=!1!==(n.component.text=t)&&e),e},q.b,q.a)),o.yb(5120,null,I.a,function(n){return[n]},[W.a]),o.nb(4,245760,[["editor",4]],0,W.a,[o.k,o.z],{style:[0,"style"],options:[1,"options"],mode:[2,"mode"],text:[3,"text"]},{textChange:"textChange"}),o.xb(5,{fontSize:0}),(n()(),o.ob(6,0,null,null,1,"h3",[["style","margin-top: 10px;"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Edit me jovially!"])),(n()(),o.ob(8,0,null,null,2,"div",[],null,null,null,null,null)),o.yb(5120,null,I.a,function(n){return[n]},[H.a]),o.nb(10,737280,null,0,H.a,[o.k,o.z,Q.c],null,null)],function(n,l){var t=l.component,e=n(l,5,0,"14pt");n(l,4,0,"height:150px;",e,"sql",t.text),n(l,10,0)},null)}function Z(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,1,"app-ace",[],null,null,null,G,V)),o.nb(1,114688,null,0,J,[],null,null)],function(n,l){n(l,1,0)},null)}var _=o.kb("app-ace",J,Z,{},{},[]),$=t("ZYCi"),nn=o.mb({encapsulation:0,styles:[[".avatar[_ngcontent-%COMP%]{width:84px;height:84px;background:url(https://artsiom.mezin.eu/preoccupyjs/demo/occupy_logo.5333adb14d3b90a39995.png) 50% 16%/115%}.menu[_ngcontent-%COMP%]{display:flex;align-items:center}.menu-item[_ngcontent-%COMP%]{margin-top:0}"]],data:{}});function ln(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,41,"div",[["class","container"]],null,null,null,null,null)),(n()(),o.ob(1,0,null,null,40,"div",[["class","panel"]],null,null,null,null,null)),(n()(),o.ob(2,0,null,null,5,"div",[["class","panel-header text-center"]],null,null,null,null,null)),(n()(),o.ob(3,0,null,null,0,"figure",[["class","avatar avatar-xl"]],null,null,null,null,null)),(n()(),o.ob(4,0,null,null,1,"div",[["class","panel-title h5 mt-10"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,["PreoccupyJS"])),(n()(),o.ob(6,0,null,null,1,"div",[["class","panel-subtitle"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Demo App"])),(n()(),o.ob(8,0,null,null,4,"div",[["class","panel-footer"]],null,null,null,null,null)),(n()(),o.ob(9,0,null,null,3,"button",[["class","btn"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onActivate()&&e),e},null,null)),o.nb(10,278528,null,0,Y.h,[o.s,o.t,o.k,o.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.xb(11,{"btn-success":0}),(n()(),o.Bb(-1,null,["Activate remote control"])),(n()(),o.ob(13,0,null,null,25,"div",[["class","panel-nav"]],null,null,null,null,null)),(n()(),o.ob(14,0,null,null,24,"ul",[["class","tab tab-block"]],null,null,null,null,null)),(n()(),o.ob(15,0,null,null,2,"li",[["class","tab-item"]],null,null,null,null,null)),(n()(),o.ob(16,0,null,null,1,"a",[["href","control.html"],["target","_blank"]],null,null,null,null,null)),(n()(),o.Bb(-1,null,["Control"])),(n()(),o.ob(18,0,null,null,6,"li",[["class","tab-item"],["routerLinkActive","active"]],null,null,null,null,null)),o.nb(19,1720320,null,2,$.l,[$.k,o.k,o.D,o.h],{routerLinkActive:[0,"routerLinkActive"]},null),o.zb(603979776,1,{links:1}),o.zb(603979776,2,{linksWithHrefs:1}),(n()(),o.ob(22,0,null,null,2,"a",[["routerLink","/form"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.wb(n,23).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),o.nb(23,671744,[[2,4]],0,$.m,[$.k,$.a,Y.g],{routerLink:[0,"routerLink"]},null),(n()(),o.Bb(-1,null,["Form"])),(n()(),o.ob(25,0,null,null,6,"li",[["class","tab-item"],["routerLinkActive","active"]],null,null,null,null,null)),o.nb(26,1720320,null,2,$.l,[$.k,o.k,o.D,o.h],{routerLinkActive:[0,"routerLinkActive"]},null),o.zb(603979776,3,{links:1}),o.zb(603979776,4,{linksWithHrefs:1}),(n()(),o.ob(29,0,null,null,2,"a",[["routerLink","/scroll"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.wb(n,30).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),o.nb(30,671744,[[4,4]],0,$.m,[$.k,$.a,Y.g],{routerLink:[0,"routerLink"]},null),(n()(),o.Bb(-1,null,["Scroll"])),(n()(),o.ob(32,0,null,null,6,"li",[["class","tab-item"],["routerLinkActive","active"]],null,null,null,null,null)),o.nb(33,1720320,null,2,$.l,[$.k,o.k,o.D,o.h],{routerLinkActive:[0,"routerLinkActive"]},null),o.zb(603979776,5,{links:1}),o.zb(603979776,6,{linksWithHrefs:1}),(n()(),o.ob(36,0,null,null,2,"a",[["routerLink","/ace"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.wb(n,37).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),o.nb(37,671744,[[6,4]],0,$.m,[$.k,$.a,Y.g],{routerLink:[0,"routerLink"]},null),(n()(),o.Bb(-1,null,["Editor"])),(n()(),o.ob(39,0,null,null,2,"div",[["class","panel-body"]],null,null,null,null,null)),(n()(),o.ob(40,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o.nb(41,212992,null,0,$.o,[$.b,o.O,o.j,[8,null],o.h],null,null)],function(n,l){var t=n(l,11,0,l.component.activated);n(l,10,0,"btn",t),n(l,19,0,"active"),n(l,23,0,"/form"),n(l,26,0,"active"),n(l,30,0,"/scroll"),n(l,33,0,"active"),n(l,37,0,"/ace"),n(l,41,0)},function(n,l){n(l,9,0,l.component.activated),n(l,22,0,o.wb(l,23).target,o.wb(l,23).href),n(l,29,0,o.wb(l,30).target,o.wb(l,30).href),n(l,36,0,o.wb(l,37).target,o.wb(l,37).href)})}function tn(n){return o.Cb(0,[(n()(),o.ob(0,0,null,null,1,"app-root",[],null,null,null,ln,nn)),o.nb(1,49152,null,0,A,[],null,null)],null,null)}var en=o.kb("app-root",A,tn,{},{},[]),on=t("ZYjt"),un=function(){return function(){}}(),rn=t("o6Sk"),an=o.lb(u,[A],function(n){return o.ub([o.vb(512,o.j,o.ab,[[8,[x.a,O,P,D,_,en]],[3,o.j],o.x]),o.vb(5120,o.u,o.jb,[[3,o.u]]),o.vb(4608,Y.k,Y.j,[o.u,[2,Y.q]]),o.vb(5120,o.c,o.gb,[]),o.vb(5120,o.s,o.hb,[]),o.vb(5120,o.t,o.ib,[]),o.vb(4608,on.b,on.k,[Y.c]),o.vb(6144,o.G,null,[on.b]),o.vb(4608,on.e,on.g,[]),o.vb(5120,on.c,function(n,l,t,e,o,u,i,r){return[new on.i(n,l,t),new on.n(e),new on.m(o,u,i,r)]},[Y.c,o.z,o.B,Y.c,Y.c,on.e,o.bb,[2,on.f]]),o.vb(4608,on.d,on.d,[on.c,o.z]),o.vb(135680,on.l,on.l,[Y.c]),o.vb(4608,on.j,on.j,[on.d,on.l]),o.vb(6144,o.E,null,[on.j]),o.vb(6144,on.o,null,[on.l]),o.vb(4608,o.M,o.M,[o.z]),o.vb(5120,$.a,$.z,[$.k]),o.vb(4608,$.d,$.d,[]),o.vb(6144,$.f,null,[$.d]),o.vb(135680,$.p,$.p,[$.k,o.w,o.i,o.q,$.f]),o.vb(4608,$.e,$.e,[]),o.vb(5120,$.D,$.v,[$.k,Y.n,$.g]),o.vb(5120,$.h,$.C,[$.A]),o.vb(5120,o.b,function(n){return[n]},[$.h]),o.vb(4608,Q.h,Q.n,[Y.c,o.B,Q.l]),o.vb(4608,Q.o,Q.o,[Q.h,Q.m]),o.vb(5120,Q.a,function(n){return[n]},[Q.o]),o.vb(4608,Q.k,Q.k,[]),o.vb(6144,Q.i,null,[Q.k]),o.vb(4608,Q.g,Q.g,[Q.i]),o.vb(6144,Q.b,null,[Q.g]),o.vb(4608,Q.f,Q.j,[Q.b,o.q]),o.vb(4608,Q.c,Q.c,[Q.f]),o.vb(1073742336,Y.b,Y.b,[]),o.vb(1024,o.l,on.p,[]),o.vb(1024,o.y,function(){return[$.u()]},[]),o.vb(512,$.A,$.A,[o.q]),o.vb(1024,o.d,function(n,l){return[on.q(n),$.B(l)]},[[2,o.y],$.A]),o.vb(512,o.e,o.e,[[2,o.d]]),o.vb(131584,o.g,o.g,[o.z,o.bb,o.q,o.l,o.j,o.e]),o.vb(1073742336,o.f,o.f,[o.g]),o.vb(1073742336,on.a,on.a,[[3,on.a]]),o.vb(1024,$.t,$.x,[[3,$.k]]),o.vb(512,$.r,$.c,[]),o.vb(512,$.b,$.b,[]),o.vb(256,$.g,{useHash:!0},[]),o.vb(1024,Y.g,$.w,[Y.m,[2,Y.a],$.g]),o.vb(512,Y.f,Y.f,[Y.g]),o.vb(512,o.i,o.i,[]),o.vb(512,o.w,o.J,[o.i,[2,o.K]]),o.vb(1024,$.i,function(){return[[{path:"form",component:S},{path:"control",component:B},{path:"scroll",component:U},{path:"ace",component:J}]]},[]),o.vb(1024,$.k,$.y,[o.g,$.r,$.b,Y.f,o.q,o.w,o.i,$.i,$.g,[2,$.q],[2,$.j]]),o.vb(1073742336,$.n,$.n,[[2,$.t],[2,$.k]]),o.vb(1073742336,un,un,[]),o.vb(1073742336,Q.e,Q.e,[]),o.vb(1073742336,Q.d,Q.d,[]),o.vb(1073742336,rn.a,rn.a,[]),o.vb(1073742336,H.b,H.b,[]),o.vb(1073742336,u,u,[]),o.vb(256,o.Z,!0,[]),o.vb(256,Q.l,"XSRF-TOKEN",[]),o.vb(256,Q.m,"X-XSRF-TOKEN",[])])});on.h().bootstrapModuleFactory(an).catch(function(n){return console.error(n)})}},[[0,0,4]]]);