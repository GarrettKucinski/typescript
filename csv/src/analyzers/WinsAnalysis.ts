import { Analyzer } from '../Summary';
import MatchData from '../MatchData';
import MatchResult from '../MatchResult';

class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let gamesWon = 0;

    for (let match of matches) {
      const [, homeTeam, awayTeam] = match;
      const { homeWin, awayWin } = MatchResult;
      const outcome = match[5];

      const isWinningTeam = Boolean(
        homeTeam === this.teamName && outcome === homeWin ||
        awayTeam === this.teamName && outcome === awayWin
      );

      if (isWinningTeam) {
        gamesWon++;
      }
    }

    return `Team ${this.teamName} has won ${gamesWon} games.`;
  }
}

export default WinsAnalysis;
