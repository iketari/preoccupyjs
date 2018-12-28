"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function css(el, styles) {
    for (var _i = 0, _a = Object.entries(styles); _i < _a.length; _i++) {
        var _b = _a[_i], prop = _b[0], value = _b[1];
        el.style.setProperty(prop, value);
    }
}
exports.css = css;
function pick(src, fields) {
    if (fields === void 0) { fields = []; }
    return fields.reduce(function (result, field) {
        result[field] = src[field];
        return result;
    }, {});
}
exports.pick = pick;
exports.DEBUG_FLAG = 'preoccupydebug';
//# sourceMappingURL=utils.js.map