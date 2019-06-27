import MatchData from "./MatchData";
import WinsAnalysis from "./analyzers/WinsAnalysis";
import HtmlReport from "./reportTargets/HtmlReport";

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface OutputTarget {
  print(report: string): void;
}

class Summary {
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

export { Summary as default, Analyzer, OutputTarget };
