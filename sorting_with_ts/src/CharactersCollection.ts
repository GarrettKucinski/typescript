import Sorter from './Sorter';

class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase();
  }

  swap(l: number, r: number): void {
    const chars = this.data.split('');

    [ chars[l], chars[r] ] = [ chars[r], chars[l] ];

    this.data = chars.join('');
  }
}

export default CharactersCollection;
