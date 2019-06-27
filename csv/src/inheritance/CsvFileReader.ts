import * as fs from 'fs';
import MatchResult from '../MatchResult';

abstract class CsvFileReader<T> {
  abstract mapRow(row: string): T;

  data: T[] = [];

  constructor(public filePath: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filePath, { encoding: 'utf-8' })
      .split('\n')
      .map(this.mapRow);
  }
}

export default CsvFileReader;
