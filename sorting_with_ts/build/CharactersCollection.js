"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var chars = this.data.split('');
        _a = [chars[rightIndex], chars[leftIndex]], chars[leftIndex] = _a[0], chars[rightIndex] = _a[1];
        this.data = chars.join('');
        var _a;
    };
    return CharactersCollection;
}());
exports.default = CharactersCollection;
