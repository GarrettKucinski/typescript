"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var gamesWon = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var homeTeam = match[1], awayTeam = match[2];
            var homeWin = MatchResult_1.default.homeWin, awayWin = MatchResult_1.default.awayWin;
            var outcome = match[5];
            var isWinningTeam = Boolean(homeTeam === this.teamName && outcome === homeWin ||
                awayTeam === this.teamName && outcome === awayWin);
            if (isWinningTeam) {
                gamesWon++;
            }
        }
        return "Team " + this.teamName + " has won " + gamesWon + " games.";
    };
    return WinsAnalysis;
}());
exports.default = WinsAnalysis;
