import formatDateString from './utilities/formatDateString';
import MatchData from './MatchData';
import MatchResult from './MatchResult';
import CsvFileReader from './CsvFileReader';

interface DataReader {
  read(): void,
  data: string[]
}

class MatchReader {
  matches: MatchData[] = [];

  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRow);
  }

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

