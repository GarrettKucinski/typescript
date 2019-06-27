"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filePath) {
        this.filePath = filePath;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs
            .readFileSync(this.filePath, { encoding: 'utf-8' })
            .split('\n');
    };
    return CsvFileReader;
}());
exports.default = CsvFileReader;
