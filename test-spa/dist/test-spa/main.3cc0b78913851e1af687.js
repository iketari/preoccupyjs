(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(l,n,t){l.exports=t("zUnb")},crnd:function(l,n){function t(l){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+l+"'");throw n.code="MODULE_NOT_FOUND",n})}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="crnd"},zUnb:function(l,n,t){"use strict";t.r(n);var e,u=t("CcnG"),o=function(){return function(){}}(),i=t("bb6g");!function(l){l.BASE="[Action] Base",l.MOVE_TO="[Action] Move To",l.MOUSE_DOWN_TO="[Action] MouseDown To",l.MOUSE_UP_TO="[Action] MouseUp To",l.CLICK_TO="[Action] Click To",l.RIGHT_CLICK_TO="[Action] Right Click To",l.DBL_CLICK_TO="[Action] Double Click To",l.KEYPRESS="[Action] Keypress",l.KEYDOWN="[Action] Keydown",l.KEYUP="[Action] Keyup",l.SCROLL_BY="[Action] Scroll By"}(e||(e={}));var r=function(){function l(n){void 0===n&&(n={}),this.payload=n,this.type=l.type}return l.handleEvent=function(l,n){return console.warn("You have to implement a static method handleEvent for "+this.type+" action"),{}},l.type=e.BASE,l}(),a=function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.moveCursorTo(this.payload)},n.handleEvent=function(l,t){return new n(l.getRelativeCoordinate(t))},n.type=e.MOVE_TO,n.eventName="mousemove",n}(r),c=function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.clickTo(this.payload)},n.handleEvent=function(l,t){return new n(l.getRelativeCoordinate(t))},n.type=e.CLICK_TO,n.eventName="click",n}(r),s=function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.keypress(this.payload)},n.handleEvent=function(l,t){return new n({key:t.key,code:t.code,keyCode:t.keyCode})},n.type=e.KEYPRESS,n.eventName="keypress",n}(r),p=function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.scroll(this.payload)},n.handleEvent=function(l,t){var e=l.getRelativeCoordinate(t);return new n(i.a({},e,{deltaX:t.shiftKey?t.deltaY:0,deltaY:t.shiftKey?0:t.deltaY}))},n.type=e.SCROLL_BY,n.eventName="mousewheel",n}(r),b=function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.dblClickTo(this.payload)},n.handleEvent=function(l,t){return new n(l.getRelativeCoordinate(t))},n.type=e.DBL_CLICK_TO,n.eventName="dblclick",n}(r);function f(l,n){return void 0===n&&(n=[]),n.reduce(function(n,t){return n[t]=l[t],n},{})}var h=new Map([a,c,function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.keydown(this.payload)},n.handleEvent=function(l,t){return new n(f(t,["which","key","code","ctrlKey","keyCode","metaKey","shiftKey","type"]))},n.type=e.KEYDOWN,n.eventName="keydown",n}(r),s,function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.keyup(this.payload)},n.handleEvent=function(l,t){return new n(f(t,["which","key","code","ctrlKey","keyCode","metaKey","shiftKey","type"]))},n.type=e.KEYUP,n.eventName="keyup",n}(r),a,p,b,function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.rightClickTo(this.payload)},n.handleEvent=function(l,t){return t.preventDefault(),new n(l.getRelativeCoordinate(t))},n.type=e.RIGHT_CLICK_TO,n.eventName="contextmenu",n}(r),function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.mouseDownTo(this.payload)},n.handleEvent=function(l,t){return new n(l.getRelativeCoordinate(t))},n.type=e.MOUSE_DOWN_TO,n.eventName="mousedown",n}(r),function(l){function n(t){var e=l.call(this)||this;return e.payload=t,e.type=n.type,e}return i.b(n,l),n.prototype.performEvent=function(l,n){l.mouseUpTo(this.payload)},n.handleEvent=function(l,t){return new n(l.getRelativeCoordinate(t))},n.type=e.MOUSE_UP_TO,n.eventName="mouseup",n}(r)].map(function(l){return[l.type,l]})),d=function(l){return l[l.connect=0]="connect",l[l.disconnect=1]="disconnect",l[l.action=2]="action",l}({}),v=function(){function l(){this.listeners={}}return l.prototype.off=function(l){void 0!==l?this.listeners[l]=[]:this.listeners={}},l.prototype.on=function(l,n){this.listeners[l]||(this.listeners[l]=[]),this.listeners[l].push(n)},l.prototype.trigger=function(l,n){Array.isArray(this.listeners[l])&&this.listeners[l].forEach(function(t){return t({type:l,detail:n})})},l}(),y=function(){function l(l,n,t){this.type=l,this.data=n,this.hash=t||1e7*Math.random()+""}return l.prototype.serialize=function(){return JSON.stringify(this.data)},l.parse=function(n){var t=n.split("|"),e=t[2];return new l(t[1],JSON.parse(t[3]),e)},l}(),m=function(l){function n(n,t){void 0===n&&(n="prefix"),void 0===t&&(t=10);var e=l.call(this)||this;return e.preifx=n,e.stackSize=t,e.connected=!1,e.publishedMessages=[],e.storage=localStorage,e}return i.b(n,l),n.prototype.handshake=function(){this.connected?this.trigger(d.connect):this.connect()},n.prototype.disconnect=function(){this.cleanUp(),window.removeEventListener("storage",this),this.off(),this.connected=!1},n.prototype.publish=function(l){var n=new y("action",l);if(this.publishedMessages.push(n),this.storage.setItem(this.preifx+"|"+n.type+"|"+n.hash,n.serialize()),this.publishedMessages.length>this.stackSize){var t=this.publishedMessages.shift();t&&this.storage.removeItem(this.preifx+"|"+t.type+"|"+t.hash)}},n.prototype.handleEvent=function(l){switch(l.type){case"storage":this.onStorageMessage(l)}},n.prototype.connect=function(){window.addEventListener("storage",this),this.connected=!0,this.trigger(d.connect)},n.prototype.cleanUp=function(){var l=this;Object.keys(localStorage).forEach(function(n){n.startsWith(l.preifx)&&localStorage.removeItem(n)})},n.prototype.onStorageMessage=function(l){var n=l.key,t=l.newValue;if(n&&t&&n.startsWith(this.preifx)){var e=y.parse(n+"|"+t);this.isExternalMessage(e)&&this.trigger(d.action,e)}},n.prototype.isExternalMessage=function(l){return!this.publishedMessages.find(function(n){return n.hash===l.hash})},n}(v),w=(t("zvoD"),function(){function l(l,n){this.transport=l,this.dom=n,this.actionStack=[],this.actions=h}return l.prototype.perform=function(l){if(this.actions.has(l.type)){var n=new(this.actions.get(l.type))(l.payload);for(n.performEvent(this.dom,this.actionStack),this.actionStack.push(n);this.actionStack.length>30;)this.actionStack.shift()}},l.prototype.start=function(){var l=this;this.transport.on(d.connect,function(n){l.dom.init()}),this.transport.on(d.action,function(n){l.perform(n.detail.data)}),this.transport.handshake()},l.prototype.stop=function(){this.transport.disconnect(),this.dom.destroy()},l}()),g=function(){function l(){this.el=this.createCursorEl()}return l.prototype.moveTo=function(l){this.el.style.transform="translateX("+l.x+"px) translateY("+l.y+"px)"},l.prototype.getEl=function(){return this.el},l.prototype.destroy=function(){this.el&&this.el.remove()},l.prototype.createCursorEl=function(){var l=document.createElement("div");return function(l,n){for(var t=0,e=Object.entries({"z-index":"100500",position:"fixed",top:"0",left:"0",width:"30px",height:"30px",display:"inline-block",background:"url('data:image/png;base64,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')"});t<e.length;t++){var u=e[t];l.style.setProperty(u[0],u[1])}}(l),l},l}(),k=function(){function l(l){this.el=l,this.cursor=new g}return l.prototype.init=function(){this.cursor.moveTo({x:0,y:0});var l=this.el.querySelector("body");"static"!==getComputedStyle(this.el).position?this.el.appendChild(this.cursor.getEl()):l.appendChild(this.cursor.getEl())},l.prototype.destroy=function(){this.cursor.destroy()},l.prototype.moveCursorTo=function(l){var n=this.getAbsoluteCoordinates(l),t=this.getMouseEventPayload(l);null!==t&&(this.fireEvent.apply(this,["mousemove"].concat(t)),this.cursor.moveTo(n))},l.prototype.mouseDownTo=function(l){var n=this.getMouseEventPayload(l);null!==n&&this.fireEvent.apply(this,["mousedown"].concat(n))},l.prototype.mouseUpTo=function(l){var n=this.getMouseEventPayload(l);null!==n&&this.fireEvent.apply(this,["mouseup"].concat(n))},l.prototype.clickTo=function(l){var n=this.getMouseEventPayload(l);if(null!==n){var t=n[0],e=n[1];null!==document.activeElement&&this.fireEvent("blur",document.activeElement),this.setFocus(t),this.fireEvent("focus",t),this.fireEvent("click",t,e)}},l.prototype.rightClickTo=function(l){var n=this.getMouseEventPayload(l);null!==n&&this.fireEvent.apply(this,["contextmenu"].concat(n))},l.prototype.dblClickTo=function(l){var n=this.getElementFromPoint(this.getAbsoluteCoordinates(l));if(n){switch(n.tagName.toLowerCase()){case"textarea":case"input":n.select()}this.fireEvent("dblclick",n)}},l.prototype.keydown=function(l){var n=document.activeElement;if(n){if("Backspace"===l.code)switch(n.tagName.toLowerCase()){case"textarea":case"input":var t=n;if(["checkbox","radio"].includes(t.type)||!t.value)break;t.value=n.value.slice(0,-1);break;default:n.isContentEditable&&(n.innerHTML=n.innerHTML.slice(0,-1))}this.fireEvent("keydown",n,l)}},l.prototype.keyup=function(l){var n=document.activeElement;n&&this.fireEvent("keyup",n,l)},l.prototype.keypress=function(l){var n=document.activeElement;if(n&&void 0!==l.keyCode){switch(this.fireEvent("keypress",n,l),n.tagName.toLowerCase()){case"textarea":case"input":n.value+=String.fromCharCode(l.keyCode);break;default:n.innerHTML+=String.fromCharCode(l.keyCode)}this.fireEvent("input",n,l)}},l.prototype.scroll=function(l){var n,t=l.deltaX,e=l.deltaY,u=this.getElementFromPoint(this.getAbsoluteCoordinates({x:l.x,y:l.y}));if(u){for(;u&&u.parentElement;){if(this.isScrollable(u)){n=u;break}u=u.parentElement}n||(n=document.body),n.scrollBy({left:t,top:e}),this.fireEvent("wheel",u),this.fireEvent("scroll",u)}},l.prototype.getMouseEventPayload=function(l){var n=this.getAbsoluteCoordinates(l),t=this.getElementFromPoint(n);return t?[t,{clientX:n.x,clientY:n.y,view:window}]:null},l.prototype.getAbsoluteCoordinates=function(l){var n=window.innerHeight;return{x:l.x*window.innerWidth,y:l.y*n}},l.prototype.getElementFromPoint=function(l){return document.elementFromPoint(l.x-1,l.y-1)},l.prototype.setFocus=function(l){l.focus&&l.focus()},l.prototype.fireEvent=function(l,n,t){var e;void 0===t&&(t={});var u={bubbles:!0,cancelable:!0};switch(l){case"click":case"dblclick":case"mousedown":case"mouseup":case"contextmenu":case"mousemove":e=new MouseEvent(l,i.a({},u,t));break;case"keypress":case"keydown":case"keyup":e=new KeyboardEvent(l,i.a({},u,t));break;default:e=new Event(l,i.a({},u,t))}return window.preoccupydebug&&console.log("fired",e),n.dispatchEvent(e)},l.prototype.isScrollable=function(l){return this.isScrollableY(l)||this.isScrollableX(l)},l.prototype.isScrollableX=function(l){var n=getComputedStyle(l);return["auto","scroll"].includes(n.overflowX)&&l.scrollWidth>l.clientWidth},l.prototype.isScrollableY=function(l){var n=getComputedStyle(l);return["auto","scroll"].includes(n.overflowY)&&l.scrollHeight>l.clientHeight},l}(),E=function(){function l(l,n){this.transport=l,this.el=n,this.actions=h,this.eventCallbacks=new WeakMap}return l.prototype.start=function(){this.initEvents(),this.transport.handshake()},l.prototype.stop=function(){this.transport.disconnect(),this.disableEvents()},l.prototype.initEvents=function(){var l=this;this.actions.forEach(function(n){l.eventCallbacks.set(n,function(t){var e=n.handleEvent(l,t);l.transport.publish(e)}),l.el.addEventListener(n.eventName,l.eventCallbacks.get(n))})},l.prototype.disableEvents=function(){var l=this;this.actions.forEach(function(n){return l.el.removeEventListener(n.eventName,l.eventCallbacks.get(n))})},l.prototype.getRelativeCoordinate=function(l){var n=l.target;return{x:l.offsetX/n.clientWidth,y:l.offsetY/n.clientHeight}},l}(),C=new m,A=function(){function l(){this.title="test-spa",this.activated=!1}return l.prototype.onActivate=function(){var l,n;(l=document.documentElement,void 0===n&&(n=C),new w(n,new k(l))).start(),this.activated=!0},l}(),x=t("pMnS"),S=function(){function l(){this.formResult=""}return l.prototype.onFormSubmit=function(l){l.preventDefault();var n=new FormData(l.target);this.formResult=Array.from(n.entries()).reduce(function(l,n){return l+"name: "+n[0]+" value: "+n[1]+"\n"},""),console.log(this.formResult,n.entries())},l}(),K=u.nb({encapsulation:0,styles:[[".result[_ngcontent-%COMP%]{white-space:pre}"]],data:{}});function T(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Form me handsomly!"])),(l()(),u.pb(2,0,null,null,36,"form",[["class","form-horizontal"]],null,[[null,"submit"]],function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==l.component.onFormSubmit(t)&&e),e},null,null)),(l()(),u.pb(3,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,2,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(l()(),u.pb(5,0,null,null,1,"label",[["class","form-label"],["for","textField"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Form field #1"])),(l()(),u.pb(7,0,null,null,1,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(l()(),u.pb(8,0,null,null,0,"input",[["class","form-input"],["id","textField"],["name","textField"],["type","text"]],null,null,null,null,null)),(l()(),u.pb(9,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.pb(10,0,null,null,2,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(l()(),u.pb(11,0,null,null,1,"label",[["class","form-label"],["for","textArea"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Form field #2"])),(l()(),u.pb(13,0,null,null,1,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(l()(),u.pb(14,0,null,null,0,"textarea",[["class","form-input"],["id","textArea"],["name","textArea"]],null,null,null,null,null)),(l()(),u.pb(15,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.pb(16,0,null,null,2,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(l()(),u.pb(17,0,null,null,1,"label",[["for","checkbox"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Form field #3"])),(l()(),u.pb(19,0,null,null,1,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(l()(),u.pb(20,0,null,null,0,"input",[["id","checkbox"],["name","checkbox"],["type","checkbox"]],null,null,null,null,null)),(l()(),u.pb(21,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.pb(22,0,null,null,2,"div",[["class","col-3 col-sm-12"]],null,null,null,null,null)),(l()(),u.pb(23,0,null,null,1,"label",[["class","form-label"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Type"])),(l()(),u.pb(25,0,null,null,8,"div",[["class","col-9 col-sm-12"]],null,null,null,null,null)),(l()(),u.pb(26,0,null,null,3,"label",[["class","form-radio"]],null,null,null,null,null)),(l()(),u.pb(27,0,null,null,0,"input",[["name","radio"],["type","radio"],["value","Email"]],null,null,null,null,null)),(l()(),u.pb(28,0,null,null,0,"i",[["class","form-icon"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,[" Email "])),(l()(),u.pb(30,0,null,null,3,"label",[["class","form-radio"]],null,null,null,null,null)),(l()(),u.pb(31,0,null,null,0,"input",[["name","radio"],["type","radio"],["value","Phone"]],null,null,null,null,null)),(l()(),u.pb(32,0,null,null,0,"i",[["class","form-icon"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,[" Phone "])),(l()(),u.pb(34,0,null,null,0,"input",[["class","btn btn-primary"],["type","submit"],["value","submit"]],null,null,null,null,null)),(l()(),u.pb(35,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Result:"])),(l()(),u.pb(37,0,null,null,1,"div",[["class","result"]],null,null,null,null,null)),(l()(),u.Cb(38,null,["",""]))],null,function(l,n){l(n,38,0,n.component.formResult)})}function L(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"app-form",[],null,null,null,T,K)),u.ob(1,49152,null,0,S,[],null,null)],null,null)}var O=u.lb("app-form",S,L,{},{},[]),M=function(){function l(){}return l.prototype.ngOnInit=function(){},l.prototype.onConnectClick=function(){var l;this.host=(void 0===l&&(l=C),new E(l,this.padView.nativeElement)),this.host.start()},l}(),z=u.nb({encapsulation:0,styles:[[".pad[_ngcontent-%COMP%]{margin:10px 5px;border:1px dashed #888;width:100%;height:calc(100vh - 350px);resize:both;overflow:auto}.pad[_ngcontent-%COMP%]:focus{outline:0;border-width:2px}"]],data:{}});function R(l){return u.Db(0,[u.Ab(402653184,1,{padView:0}),(l()(),u.pb(1,0,[[1,0],["pad",1]],null,0,"div",[["class","pad"],["tabindex","1"]],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onConnectClick()&&e),e},null,null)),(l()(),u.Cb(-1,null,["Connect"]))],null,function(l,n){l(n,2,0,n.component.host)})}function D(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"app-control",[],null,null,null,R,z)),u.ob(1,114688,null,0,M,[],null,null)],function(l,n){l(n,1,0)},null)}var P=u.lb("app-control",M,D,{},{},[]),Y=t("Ip0R"),B=function(){function l(){this.scrollableElRef=null,this.dates=[]}return l.prototype.ngOnInit=function(){this.dates=this.generate(10)},l.prototype.onScroll=function(l){var n;console.log(l);var t=l.target;t.clientHeight+t.scrollTop+20>=t.scrollHeight&&(n=this.dates).push.apply(n,this.generate(10))},l.prototype.generate=function(l){return Array.from(Array(l).keys()).map(function(l){return new Date})},l}(),U=u.nb({encapsulation:0,styles:[[".scrollable[_ngcontent-%COMP%]{height:200px;border:1px solid #000;overflow:auto}"]],data:{}});function j(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Cb(1,null,["Date: ",""]))],null,function(l,n){var t=n.context.$implicit.toLocaleString();l(n,1,0,t)})}function N(l){return u.Db(0,[u.Ab(402653184,1,{scrollableElRef:0}),(l()(),u.pb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Scroll me gently!"])),(l()(),u.pb(3,0,[[1,0],["scrollable",1]],null,2,"div",[["class","scrollable"]],null,[[null,"wheel"],[null,"scroll"]],function(l,n,t){var e=!0,u=l.component;return"wheel"===n&&(e=!1!==u.onScroll(t)&&e),"scroll"===n&&(e=!1!==u.onScroll(t)&&e),e},null,null)),(l()(),u.gb(16777216,null,null,1,null,j)),u.ob(5,278528,null,0,Y.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.dates)},null)}function X(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"app-scroll",[],null,null,null,N,U)),u.ob(1,114688,null,0,B,[],null,null)],function(l,n){l(n,1,0)},null)}var F=u.lb("app-scroll",B,X,{},{},[]),q=t("gakQ"),I=t("gIcY"),W=t("BXrY"),H=t("A1fA"),Q=t("t/Na"),J=function(){function l(){this.text="SELECT * FROM users;"}return l.prototype.ngOnInit=function(){},l}(),V=u.nb({encapsulation:0,styles:[[""]],data:{}});function G(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Edit me roughly!"])),(l()(),u.pb(2,0,null,null,3,"ace-editor",[["style","height:150px;"]],null,[[null,"textChange"]],function(l,n,t){var e=!0;return"textChange"===n&&(e=!1!==(l.component.text=t)&&e),e},q.b,q.a)),u.zb(5120,null,I.a,function(l){return[l]},[W.a]),u.ob(4,245760,[["editor",4]],0,W.a,[u.k,u.z],{style:[0,"style"],options:[1,"options"],mode:[2,"mode"],text:[3,"text"]},{textChange:"textChange"}),u.yb(5,{fontSize:0}),(l()(),u.pb(6,0,null,null,1,"h3",[["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Edit me jovially!"])),(l()(),u.pb(8,0,null,null,2,"div",[],null,null,null,null,null)),u.zb(5120,null,I.a,function(l){return[l]},[H.a]),u.ob(10,737280,null,0,H.a,[u.k,u.z,Q.c],null,null)],function(l,n){var t=n.component,e=l(n,5,0,"14pt");l(n,4,0,"height:150px;",e,"sql",t.text),l(n,10,0)},null)}function Z(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"app-ace",[],null,null,null,G,V)),u.ob(1,114688,null,0,J,[],null,null)],function(l,n){l(n,1,0)},null)}var _=u.lb("app-ace",J,Z,{},{},[]),$=t("ZYCi"),ll=u.nb({encapsulation:0,styles:[[".avatar[_ngcontent-%COMP%]{width:84px;height:84px;background:url(https://artsiom.mezin.eu/preoccupyjs/demo/occupy_logo.5333adb14d3b90a39995.png) 50% 16%/115%}.menu[_ngcontent-%COMP%]{display:flex;align-items:center}.menu-item[_ngcontent-%COMP%]{margin-top:0}"]],data:{}});function nl(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,41,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,40,"div",[["class","panel"]],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,5,"div",[["class","panel-header text-center"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,0,"figure",[["class","avatar avatar-xl"]],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,1,"div",[["class","panel-title h5 mt-10"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["PreoccupyJS"])),(l()(),u.pb(6,0,null,null,1,"div",[["class","panel-subtitle"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Demo App"])),(l()(),u.pb(8,0,null,null,4,"div",[["class","panel-footer"]],null,null,null,null,null)),(l()(),u.pb(9,0,null,null,3,"button",[["class","btn"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onActivate()&&e),e},null,null)),u.ob(10,278528,null,0,Y.h,[u.s,u.t,u.k,u.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.yb(11,{"btn-success":0}),(l()(),u.Cb(-1,null,["Activate remote control"])),(l()(),u.pb(13,0,null,null,25,"div",[["class","panel-nav"]],null,null,null,null,null)),(l()(),u.pb(14,0,null,null,24,"ul",[["class","tab tab-block"]],null,null,null,null,null)),(l()(),u.pb(15,0,null,null,2,"li",[["class","tab-item"]],null,null,null,null,null)),(l()(),u.pb(16,0,null,null,1,"a",[["href","control.html"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Cb(-1,null,["Control"])),(l()(),u.pb(18,0,null,null,6,"li",[["class","tab-item"],["routerLinkActive","active"]],null,null,null,null,null)),u.ob(19,1720320,null,2,$.l,[$.k,u.k,u.D,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u.Ab(603979776,1,{links:1}),u.Ab(603979776,2,{linksWithHrefs:1}),(l()(),u.pb(22,0,null,null,2,"a",[["routerLink","/form"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.xb(l,23).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.ob(23,671744,[[2,4]],0,$.m,[$.k,$.a,Y.g],{routerLink:[0,"routerLink"]},null),(l()(),u.Cb(-1,null,["Form"])),(l()(),u.pb(25,0,null,null,6,"li",[["class","tab-item"],["routerLinkActive","active"]],null,null,null,null,null)),u.ob(26,1720320,null,2,$.l,[$.k,u.k,u.D,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u.Ab(603979776,3,{links:1}),u.Ab(603979776,4,{linksWithHrefs:1}),(l()(),u.pb(29,0,null,null,2,"a",[["routerLink","/scroll"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.xb(l,30).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.ob(30,671744,[[4,4]],0,$.m,[$.k,$.a,Y.g],{routerLink:[0,"routerLink"]},null),(l()(),u.Cb(-1,null,["Scroll"])),(l()(),u.pb(32,0,null,null,6,"li",[["class","tab-item"],["routerLinkActive","active"]],null,null,null,null,null)),u.ob(33,1720320,null,2,$.l,[$.k,u.k,u.D,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u.Ab(603979776,5,{links:1}),u.Ab(603979776,6,{linksWithHrefs:1}),(l()(),u.pb(36,0,null,null,2,"a",[["routerLink","/ace"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.xb(l,37).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.ob(37,671744,[[6,4]],0,$.m,[$.k,$.a,Y.g],{routerLink:[0,"routerLink"]},null),(l()(),u.Cb(-1,null,["Editor"])),(l()(),u.pb(39,0,null,null,2,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),u.pb(40,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.ob(41,212992,null,0,$.o,[$.b,u.O,u.j,[8,null],u.h],null,null)],function(l,n){var t=l(n,11,0,n.component.activated);l(n,10,0,"btn",t),l(n,19,0,"active"),l(n,23,0,"/form"),l(n,26,0,"active"),l(n,30,0,"/scroll"),l(n,33,0,"active"),l(n,37,0,"/ace"),l(n,41,0)},function(l,n){l(n,9,0,n.component.activated),l(n,22,0,u.xb(n,23).target,u.xb(n,23).href),l(n,29,0,u.xb(n,30).target,u.xb(n,30).href),l(n,36,0,u.xb(n,37).target,u.xb(n,37).href)})}function tl(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"app-root",[],null,null,null,nl,ll)),u.ob(1,49152,null,0,A,[],null,null)],null,null)}var el=u.lb("app-root",A,tl,{},{},[]),ul=t("ZYjt"),ol=function(){return function(){}}(),il=t("o6Sk"),rl=u.mb(o,[A],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[x.a,O,P,F,_,el]],[3,u.j],u.x]),u.wb(5120,u.u,u.kb,[[3,u.u]]),u.wb(4608,Y.k,Y.j,[u.u,[2,Y.q]]),u.wb(5120,u.c,u.hb,[]),u.wb(5120,u.s,u.ib,[]),u.wb(5120,u.t,u.jb,[]),u.wb(4608,ul.b,ul.k,[Y.c]),u.wb(6144,u.G,null,[ul.b]),u.wb(4608,ul.e,ul.g,[]),u.wb(5120,ul.c,function(l,n,t,e,u,o,i,r){return[new ul.i(l,n,t),new ul.n(e),new ul.m(u,o,i,r)]},[Y.c,u.z,u.B,Y.c,Y.c,ul.e,u.cb,[2,ul.f]]),u.wb(4608,ul.d,ul.d,[ul.c,u.z]),u.wb(135680,ul.l,ul.l,[Y.c]),u.wb(4608,ul.j,ul.j,[ul.d,ul.l]),u.wb(6144,u.E,null,[ul.j]),u.wb(6144,ul.o,null,[ul.l]),u.wb(4608,u.M,u.M,[u.z]),u.wb(5120,$.a,$.z,[$.k]),u.wb(4608,$.d,$.d,[]),u.wb(6144,$.f,null,[$.d]),u.wb(135680,$.p,$.p,[$.k,u.w,u.i,u.q,$.f]),u.wb(4608,$.e,$.e,[]),u.wb(5120,$.D,$.v,[$.k,Y.n,$.g]),u.wb(5120,$.h,$.C,[$.A]),u.wb(5120,u.b,function(l){return[l]},[$.h]),u.wb(4608,Q.h,Q.n,[Y.c,u.B,Q.l]),u.wb(4608,Q.o,Q.o,[Q.h,Q.m]),u.wb(5120,Q.a,function(l){return[l]},[Q.o]),u.wb(4608,Q.k,Q.k,[]),u.wb(6144,Q.i,null,[Q.k]),u.wb(4608,Q.g,Q.g,[Q.i]),u.wb(6144,Q.b,null,[Q.g]),u.wb(4608,Q.f,Q.j,[Q.b,u.q]),u.wb(4608,Q.c,Q.c,[Q.f]),u.wb(1073742336,Y.b,Y.b,[]),u.wb(1024,u.l,ul.p,[]),u.wb(1024,u.y,function(){return[$.u()]},[]),u.wb(512,$.A,$.A,[u.q]),u.wb(1024,u.d,function(l,n){return[ul.q(l),$.B(n)]},[[2,u.y],$.A]),u.wb(512,u.e,u.e,[[2,u.d]]),u.wb(131584,u.g,u.g,[u.z,u.cb,u.q,u.l,u.j,u.e]),u.wb(1073742336,u.f,u.f,[u.g]),u.wb(1073742336,ul.a,ul.a,[[3,ul.a]]),u.wb(1024,$.t,$.x,[[3,$.k]]),u.wb(512,$.r,$.c,[]),u.wb(512,$.b,$.b,[]),u.wb(256,$.g,{useHash:!0},[]),u.wb(1024,Y.g,$.w,[Y.m,[2,Y.a],$.g]),u.wb(512,Y.f,Y.f,[Y.g]),u.wb(512,u.i,u.i,[]),u.wb(512,u.w,u.J,[u.i,[2,u.K]]),u.wb(1024,$.i,function(){return[[{path:"form",component:S},{path:"control",component:M},{path:"scroll",component:B},{path:"ace",component:J}]]},[]),u.wb(1024,$.k,$.y,[u.g,$.r,$.b,Y.f,u.q,u.w,u.i,$.i,$.g,[2,$.q],[2,$.j]]),u.wb(1073742336,$.n,$.n,[[2,$.t],[2,$.k]]),u.wb(1073742336,ol,ol,[]),u.wb(1073742336,Q.e,Q.e,[]),u.wb(1073742336,Q.d,Q.d,[]),u.wb(1073742336,il.a,il.a,[]),u.wb(1073742336,H.b,H.b,[]),u.wb(1073742336,o,o,[]),u.wb(256,u.ab,!0,[]),u.wb(256,Q.l,"XSRF-TOKEN",[]),u.wb(256,Q.m,"X-XSRF-TOKEN",[])])});"https:"!==location.protocol&&(location.href=location.href.replace("http","https")),Object(u.T)(),ul.h().bootstrapModuleFactory(rl).catch(function(l){return console.error(l)})}},[[0,0,4]]]);