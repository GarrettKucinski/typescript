"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.default.fromCsv('./football.csv');
var summary = Summary_1.default.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndReport(matchReader.matches);
