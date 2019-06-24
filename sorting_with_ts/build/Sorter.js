"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var Sorter = (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length - 1; i++) {
            for (var j = 0; j < length - (i + 1); j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.default = Sorter;
