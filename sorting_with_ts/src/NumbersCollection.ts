import Sorter from './Sorter';

class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(l: number, r: number) {
    [ this.data[l], this.data[r] ] = [ this.data[r], this.data[l] ];
  }

}

export default NumbersCollection;
