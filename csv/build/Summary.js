"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (teamName) {
        return new Summary(new WinsAnalysis_1.default(teamName), new HtmlReport_1.default());
    };
    Summary.prototype.buildAndReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.default = Summary;
