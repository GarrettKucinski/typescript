"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var formatDateString_1 = require("../utilities/formatDateString");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReader.prototype.mapRow = function (row) {
        var _a = row.split(','), date = _a[0], homeTeam = _a[1], awayTeam = _a[2], homeScore = _a[3], awayScore = _a[4], winningTeam = _a[5], ref = _a[6];
        return [
            formatDateString_1.default(date),
            homeTeam,
            awayTeam,
            parseInt(homeScore),
            parseInt(awayScore),
            winningTeam,
            ref
        ];
    };
    return MatchReader;
}(CsvFileReader_1.default));
exports.default = MatchReader;
