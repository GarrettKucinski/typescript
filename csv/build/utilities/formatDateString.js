"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formateDateString = function (dateString) {
    var _a = dateString.split('/').map(function (piece) { return parseInt(piece); }), day = _a[0], month = _a[1], year = _a[2];
    return new Date(year, month - 1, day);
};
exports.default = formateDateString;
