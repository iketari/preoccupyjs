"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
var dom_1 = require("./dom");
var host_1 = require("./host");
var transports_1 = require("./transports");
__export(require("./client"));
__export(require("./host"));
__export(require("./transports"));
var localTransport = new transports_1.LocalTransport();
function createClient(el, transport) {
    if (transport === void 0) { transport = localTransport; }
    var client = new client_1.Client(transport, new dom_1.DomController(el));
    transport.handshake();
    return client;
}
exports.createClient = createClient;
function createHost(el, transport) {
    if (transport === void 0) { transport = localTransport; }
    var host = new host_1.Host(transport, el);
    transport.handshake();
    return host;
}
exports.createHost = createHost;
//# sourceMappingURL=preoccupyjs.js.map