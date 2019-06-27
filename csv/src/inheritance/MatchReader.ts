import CsvFileReader from './CsvFileReader';
import MatchResult from '../MatchResult';
import formatDateString from '../utilities/formatDateString';

type MatchData = [Date, string, string, number, number, MatchResult, string];

class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string): MatchData {
    const [
      date,
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
      winningTeam,
      ref
    ] = row.split(',');

    return [
      formatDateString(date),
      homeTeam,
      awayTeam,
      parseInt(homeScore),
      parseInt(awayScore),
      winningTeam as MatchResult,
      ref
    ];
  }
}

export default MatchReader;
