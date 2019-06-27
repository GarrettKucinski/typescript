/**
 * We can use generics with functions as well to specify
 * a generic function that can log an array of whatever
 * items we choose to give it, specifying the type of the
 * items in the array on the fly.
 */

interface Printable {
  print(): void
}

class House {
  constructor(public address: string) {}

  print() {
    console.log(`My address is ${this.address}`);
  }
}

function logArrayOfItems<T> (items:  T[]): void {
  for(let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}

function printableArrayOfItems<T extends Printable> (items:  T[]): void {
  for(let i = 0; i < items.length; i++) {
    console.log(items[i].print());
  }
}

const arrayOfStrings = [
  'Garrett',
  'Jamie',
  'Emilia',
  'Jackson',
  'Muppet',
  'Merlin'
];

logArrayOfItems<string>(arrayOfStrings);
printableArrayOfItems<House>([new House('2128 N. Heritage St.'), new House('')]);
