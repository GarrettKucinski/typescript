class CharactersCollection {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split('');
    [chars[leftIndex], chars[rightIndex]] = [chars[rightIndex], chars[leftIndex]];

    this.data = chars.join('');
  }
}

export default CharactersCollection;
