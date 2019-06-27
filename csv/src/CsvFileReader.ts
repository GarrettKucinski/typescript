import * as fs from 'fs';

class CsvFileReader {
  data: string[] = [];

  constructor(public filePath: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filePath, { encoding: 'utf-8' })
      .split('\n');
  }
}

export default CsvFileReader;
