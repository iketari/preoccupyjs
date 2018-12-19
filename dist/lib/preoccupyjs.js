"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
var local_1 = require("./transports/local");
var dom_1 = require("./dom");
var host_1 = require("./host");
__export(require("./client"));
__export(require("./host"));
var transport = new local_1.LocalTransport();
function start(el) {
    var client = new client_1.Client(transport, new dom_1.DomController(el));
    transport.handshake();
    return client;
}
exports.start = start;
function connect(el) {
    var host = new host_1.Host(transport, el);
    transport.handshake();
    return host;
}
exports.connect = connect;
//# sourceMappingURL=preoccupyjs.js.map