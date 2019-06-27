/**
 * We can use generics with functions as well to specify
 * a generic function that can log an array of whatever
 * items we choose to give it, specifying the type of the
 * items in the array on the fly.
 */

function logArrayOfItems<T> (items:  T[]): void {
  for(let i = 0; i < items.length; i++) {
    console.log(items[i]);
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
