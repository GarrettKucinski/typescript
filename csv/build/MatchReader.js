"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatDateString_1 = require("./utilities/formatDateString");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCsv = function (fileName) {
        return new MatchReader(new CsvFileReader_1.default(fileName));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(this.mapRow);
    };
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
}());
exports.default = MatchReader;
